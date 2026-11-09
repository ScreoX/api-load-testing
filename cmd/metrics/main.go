package main

import (
	"encoding/csv"
	"flag"
	"fmt"
	"io"
	"log"
	"math"
	"os"
	"path/filepath"
	"regexp"
	"sort"
	"strconv"
)

type sample struct {
	elapsed float64
	ok      bool
}

type metrics struct {
	count    int
	failures int
	average  float64
	p95      float64
}

func readJMeter(path string) ([]sample, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer f.Close()
	r := csv.NewReader(f)
	header, err := r.Read()
	if err != nil {
		return nil, err
	}
	fields := make(map[string]int)
	for i, name := range header {
		fields[name] = i
	}
	for _, name := range []string{"elapsed", "success"} {
		_, ok := fields[name]
		if !ok {
			return nil, fmt.Errorf("missing JTL column %q", name)
		}
	}
	var samples []sample
	for {
		row, err := r.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			return nil, err
		}
		elapsed, err := strconv.ParseFloat(row[fields["elapsed"]], 64)
		if err != nil {
			return nil, err
		}
		ok, err := strconv.ParseBool(row[fields["success"]])
		if err != nil {
			return nil, err
		}
		samples = append(samples, sample{elapsed, ok})
	}
	return samples, nil
}

func readGatling(path string) (metrics, error) {
	body, err := os.ReadFile(path)
	if err != nil {
		return metrics{}, err
	}
	root := regexp.MustCompile(`(?s)<tr id="ROOT"\s*>(.*?)</tr>`).FindSubmatch(body)
	if len(root) != 2 {
		return metrics{}, fmt.Errorf("missing All Requests row in %s", path)
	}
	columns := make(map[int]float64)
	for _, match := range regexp.MustCompile(`class="value [^"]*col-([0-9]+)">([0-9.]+)</td>`).FindAllSubmatch(root[1], -1) {
		column, err := strconv.Atoi(string(match[1]))
		if err != nil {
			return metrics{}, err
		}
		value, err := strconv.ParseFloat(string(match[2]), 64)
		if err != nil {
			return metrics{}, err
		}
		columns[column] = value
	}
	for _, column := range []int{2, 3, 4, 10, 13} {
		_, ok := columns[column]
		if !ok {
			return metrics{}, fmt.Errorf("missing Gatling statistics column %d", column)
		}
	}
	if columns[2] != columns[3]+columns[4] {
		return metrics{}, fmt.Errorf("Gatling request counts do not match")
	}
	return metrics{int(columns[2]), int(columns[4]), columns[13], columns[10]}, nil
}

func calculate(samples []sample) metrics {
	result := metrics{count: len(samples)}
	if len(samples) == 0 {
		return result
	}
	times := make([]float64, len(samples))
	for i, s := range samples {
		result.average += s.elapsed
		times[i] = s.elapsed
		if !s.ok {
			result.failures++
		}
	}
	sort.Float64s(times)
	result.average /= float64(len(samples))
	result.p95 = times[int(math.Ceil(0.95*float64(len(samples))))-1]
	return result
}

func main() {
	check := flag.String("check", "", "check a JMeter JTL for nonempty, successful samples")
	duration := flag.Float64("duration", 70, "scheduled run duration in seconds, including ramp-up")
	flag.Parse()
	if *check != "" {
		samples, err := readJMeter(*check)
		if err != nil {
			log.Fatal(err)
		}
		if len(samples) == 0 {
			log.Fatal("JMeter produced no samples")
		}
		for _, s := range samples {
			if !s.ok {
				log.Fatal("JMeter contains failed samples. Inspect the JTL")
			}
		}
		fmt.Printf("Verified %d successful JMeter samples\n", len(samples))
		return
	}
	if flag.NArg() != 1 || *duration <= 0 {
		log.Fatal("usage: go run ./cmd/metrics [-duration 70] results/experiment")
	}
	root := flag.Arg(0)
	w := csv.NewWriter(os.Stdout)
	err := w.Write([]string{"tool", "users", "duration_seconds", "requests", "rps", "average_ms", "p95_ms", "error_rate_percent"})
	if err != nil {
		log.Fatal(err)
	}
	for _, tool := range []string{"JMeter", "Gatling"} {
		for _, users := range []int{5, 15, 30} {
			var result metrics
			var err error
			if tool == "JMeter" {
				var samples []sample
				samples, err = readJMeter(filepath.Join(root, "jmeter", fmt.Sprintf("users-%d.jtl", users)))
				result = calculate(samples)
			} else {
				result, err = readGatling(filepath.Join(root, "gatling", fmt.Sprintf("users-%d", users), "index.html"))
			}
			if err != nil {
				log.Fatal(err)
			}
			if result.count == 0 {
				log.Fatalf("%s/%d contains no samples", tool, users)
			}
			n := float64(result.count)
			row := []string{tool, strconv.Itoa(users), fmt.Sprintf("%.0f", *duration), strconv.Itoa(result.count),
				fmt.Sprintf("%.2f", n / *duration), fmt.Sprintf("%.3f", result.average),
				fmt.Sprintf("%.0f", result.p95), fmt.Sprintf("%.2f", 100*float64(result.failures)/n)}
			err = w.Write(row)
			if err != nil {
				log.Fatal(err)
			}
		}
	}
	w.Flush()
	err = w.Error()
	if err != nil {
		log.Fatal(err)
	}
}
