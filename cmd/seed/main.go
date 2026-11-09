package main

import (
	"bytes"
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"
)

type member struct {
	ID       string `json:"user_id"`
	Username string `json:"username"`
	IsActive bool   `json:"is_active"`
}

type team struct {
	Name    string   `json:"team_name"`
	Members []member `json:"members"`
}

func readTeams() ([]team, error) {
	file, err := os.Open("jmeter/teams.csv")
	if err != nil {
		return nil, err
	}
	defer file.Close()

	rows, err := csv.NewReader(file).ReadAll()
	if err != nil {
		return nil, err
	}
	if len(rows) < 2 || len(rows[0]) != 2 || rows[0][0] != "team_name" || rows[0][1] != "member_count" {
		return nil, fmt.Errorf("CSV must contain team_name and member_count")
	}

	teams := make([]team, 0, len(rows)-1)
	for _, row := range rows[1:] {
		count, err := strconv.Atoi(row[1])
		if err != nil || count < 1 {
			return nil, fmt.Errorf("invalid member count for %q", row[0])
		}
		current := team{Name: row[0]}
		for i := range count {
			current.Members = append(current.Members, member{
				ID:       fmt.Sprintf("%s-user-%d", current.Name, i+1),
				Username: fmt.Sprintf("User %d", i+1),
				IsActive: true,
			})
		}
		teams = append(teams, current)
	}
	return teams, nil
}

func createTeam(client *http.Client, current team) error {
	body, err := json.Marshal(current)
	if err != nil {
		return err
	}
	response, err := client.Post("http://127.0.0.1:8088/team/add", "application/json", bytes.NewReader(body))
	if err != nil {
		return err
	}
	defer response.Body.Close()
	responseBody, err := io.ReadAll(response.Body)
	if err != nil {
		return err
	}
	if response.StatusCode != http.StatusCreated {
		return fmt.Errorf("create %s: HTTP %d, body=%s", current.Name, response.StatusCode, responseBody)
	}
	return nil
}

func main() {
	teams, err := readTeams()
	if err != nil {
		log.Fatal(err)
	}
	client := &http.Client{Timeout: 5 * time.Second}
	for _, current := range teams {
		err = createTeam(client, current)
		if err != nil {
			log.Fatal(err)
		}
	}
	fmt.Printf("Created %d teams\n", len(teams))
}
