/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 211.0, "series": [{"data": [[0.0, 0.0], [0.1, 0.0], [0.2, 0.0], [0.3, 0.0], [0.4, 0.0], [0.5, 0.0], [0.6, 0.0], [0.7, 0.0], [0.8, 0.0], [0.9, 0.0], [1.0, 0.0], [1.1, 0.0], [1.2, 0.0], [1.3, 0.0], [1.4, 0.0], [1.5, 0.0], [1.6, 0.0], [1.7, 0.0], [1.8, 0.0], [1.9, 0.0], [2.0, 0.0], [2.1, 0.0], [2.2, 0.0], [2.3, 0.0], [2.4, 0.0], [2.5, 0.0], [2.6, 0.0], [2.7, 0.0], [2.8, 0.0], [2.9, 0.0], [3.0, 0.0], [3.1, 0.0], [3.2, 0.0], [3.3, 0.0], [3.4, 0.0], [3.5, 0.0], [3.6, 0.0], [3.7, 0.0], [3.8, 0.0], [3.9, 0.0], [4.0, 0.0], [4.1, 0.0], [4.2, 0.0], [4.3, 0.0], [4.4, 0.0], [4.5, 1.0], [4.6, 1.0], [4.7, 1.0], [4.8, 1.0], [4.9, 1.0], [5.0, 1.0], [5.1, 1.0], [5.2, 1.0], [5.3, 1.0], [5.4, 1.0], [5.5, 1.0], [5.6, 1.0], [5.7, 1.0], [5.8, 1.0], [5.9, 1.0], [6.0, 1.0], [6.1, 1.0], [6.2, 1.0], [6.3, 1.0], [6.4, 1.0], [6.5, 1.0], [6.6, 1.0], [6.7, 1.0], [6.8, 1.0], [6.9, 1.0], [7.0, 1.0], [7.1, 1.0], [7.2, 1.0], [7.3, 1.0], [7.4, 1.0], [7.5, 1.0], [7.6, 1.0], [7.7, 1.0], [7.8, 1.0], [7.9, 1.0], [8.0, 1.0], [8.1, 1.0], [8.2, 1.0], [8.3, 1.0], [8.4, 1.0], [8.5, 1.0], [8.6, 1.0], [8.7, 1.0], [8.8, 1.0], [8.9, 1.0], [9.0, 1.0], [9.1, 1.0], [9.2, 1.0], [9.3, 1.0], [9.4, 1.0], [9.5, 1.0], [9.6, 1.0], [9.7, 1.0], [9.8, 1.0], [9.9, 1.0], [10.0, 1.0], [10.1, 1.0], [10.2, 1.0], [10.3, 1.0], [10.4, 1.0], [10.5, 1.0], [10.6, 1.0], [10.7, 1.0], [10.8, 1.0], [10.9, 1.0], [11.0, 1.0], [11.1, 1.0], [11.2, 1.0], [11.3, 1.0], [11.4, 1.0], [11.5, 1.0], [11.6, 1.0], [11.7, 1.0], [11.8, 1.0], [11.9, 1.0], [12.0, 1.0], [12.1, 1.0], [12.2, 1.0], [12.3, 1.0], [12.4, 1.0], [12.5, 1.0], [12.6, 1.0], [12.7, 1.0], [12.8, 1.0], [12.9, 1.0], [13.0, 1.0], [13.1, 1.0], [13.2, 1.0], [13.3, 1.0], [13.4, 1.0], [13.5, 1.0], [13.6, 1.0], [13.7, 1.0], [13.8, 1.0], [13.9, 1.0], [14.0, 1.0], [14.1, 1.0], [14.2, 1.0], [14.3, 1.0], [14.4, 1.0], [14.5, 1.0], [14.6, 1.0], [14.7, 1.0], [14.8, 1.0], [14.9, 1.0], [15.0, 1.0], [15.1, 1.0], [15.2, 1.0], [15.3, 1.0], [15.4, 1.0], [15.5, 1.0], [15.6, 1.0], [15.7, 1.0], [15.8, 1.0], [15.9, 1.0], [16.0, 1.0], [16.1, 1.0], [16.2, 1.0], [16.3, 1.0], [16.4, 1.0], [16.5, 1.0], [16.6, 1.0], [16.7, 1.0], [16.8, 1.0], [16.9, 1.0], [17.0, 1.0], [17.1, 1.0], [17.2, 1.0], [17.3, 1.0], [17.4, 1.0], [17.5, 1.0], [17.6, 1.0], [17.7, 1.0], [17.8, 1.0], [17.9, 1.0], [18.0, 1.0], [18.1, 1.0], [18.2, 1.0], [18.3, 1.0], [18.4, 1.0], [18.5, 1.0], [18.6, 1.0], [18.7, 1.0], [18.8, 1.0], [18.9, 1.0], [19.0, 1.0], [19.1, 1.0], [19.2, 1.0], [19.3, 1.0], [19.4, 1.0], [19.5, 1.0], [19.6, 1.0], [19.7, 1.0], [19.8, 1.0], [19.9, 1.0], [20.0, 1.0], [20.1, 1.0], [20.2, 1.0], [20.3, 1.0], [20.4, 1.0], [20.5, 1.0], [20.6, 1.0], [20.7, 1.0], [20.8, 1.0], [20.9, 1.0], [21.0, 1.0], [21.1, 1.0], [21.2, 1.0], [21.3, 1.0], [21.4, 1.0], [21.5, 1.0], [21.6, 1.0], [21.7, 1.0], [21.8, 1.0], [21.9, 1.0], [22.0, 1.0], [22.1, 1.0], [22.2, 1.0], [22.3, 1.0], [22.4, 1.0], [22.5, 1.0], [22.6, 1.0], [22.7, 1.0], [22.8, 1.0], [22.9, 1.0], [23.0, 1.0], [23.1, 1.0], [23.2, 1.0], [23.3, 1.0], [23.4, 1.0], [23.5, 1.0], [23.6, 1.0], [23.7, 1.0], [23.8, 1.0], [23.9, 1.0], [24.0, 1.0], [24.1, 1.0], [24.2, 1.0], [24.3, 1.0], [24.4, 1.0], [24.5, 1.0], [24.6, 1.0], [24.7, 1.0], [24.8, 1.0], [24.9, 1.0], [25.0, 1.0], [25.1, 1.0], [25.2, 1.0], [25.3, 1.0], [25.4, 1.0], [25.5, 1.0], [25.6, 1.0], [25.7, 1.0], [25.8, 1.0], [25.9, 1.0], [26.0, 1.0], [26.1, 1.0], [26.2, 1.0], [26.3, 1.0], [26.4, 1.0], [26.5, 1.0], [26.6, 1.0], [26.7, 1.0], [26.8, 1.0], [26.9, 1.0], [27.0, 1.0], [27.1, 1.0], [27.2, 1.0], [27.3, 1.0], [27.4, 1.0], [27.5, 1.0], [27.6, 1.0], [27.7, 1.0], [27.8, 1.0], [27.9, 1.0], [28.0, 1.0], [28.1, 1.0], [28.2, 1.0], [28.3, 1.0], [28.4, 1.0], [28.5, 1.0], [28.6, 1.0], [28.7, 1.0], [28.8, 1.0], [28.9, 1.0], [29.0, 1.0], [29.1, 1.0], [29.2, 1.0], [29.3, 1.0], [29.4, 1.0], [29.5, 1.0], [29.6, 1.0], [29.7, 1.0], [29.8, 1.0], [29.9, 1.0], [30.0, 1.0], [30.1, 1.0], [30.2, 1.0], [30.3, 1.0], [30.4, 1.0], [30.5, 1.0], [30.6, 1.0], [30.7, 1.0], [30.8, 1.0], [30.9, 1.0], [31.0, 1.0], [31.1, 1.0], [31.2, 1.0], [31.3, 1.0], [31.4, 1.0], [31.5, 1.0], [31.6, 1.0], [31.7, 1.0], [31.8, 1.0], [31.9, 1.0], [32.0, 1.0], [32.1, 1.0], [32.2, 1.0], [32.3, 1.0], [32.4, 1.0], [32.5, 1.0], [32.6, 1.0], [32.7, 1.0], [32.8, 1.0], [32.9, 1.0], [33.0, 1.0], [33.1, 1.0], [33.2, 1.0], [33.3, 1.0], [33.4, 1.0], [33.5, 1.0], [33.6, 1.0], [33.7, 1.0], [33.8, 1.0], [33.9, 1.0], [34.0, 1.0], [34.1, 1.0], [34.2, 1.0], [34.3, 1.0], [34.4, 1.0], [34.5, 1.0], [34.6, 1.0], [34.7, 1.0], [34.8, 1.0], [34.9, 1.0], [35.0, 1.0], [35.1, 1.0], [35.2, 1.0], [35.3, 1.0], [35.4, 1.0], [35.5, 1.0], [35.6, 1.0], [35.7, 1.0], [35.8, 1.0], [35.9, 1.0], [36.0, 1.0], [36.1, 1.0], [36.2, 1.0], [36.3, 1.0], [36.4, 1.0], [36.5, 1.0], [36.6, 1.0], [36.7, 1.0], [36.8, 1.0], [36.9, 1.0], [37.0, 1.0], [37.1, 1.0], [37.2, 1.0], [37.3, 1.0], [37.4, 1.0], [37.5, 1.0], [37.6, 1.0], [37.7, 1.0], [37.8, 1.0], [37.9, 1.0], [38.0, 1.0], [38.1, 1.0], [38.2, 1.0], [38.3, 1.0], [38.4, 1.0], [38.5, 1.0], [38.6, 1.0], [38.7, 1.0], [38.8, 1.0], [38.9, 1.0], [39.0, 1.0], [39.1, 1.0], [39.2, 1.0], [39.3, 1.0], [39.4, 1.0], [39.5, 1.0], [39.6, 1.0], [39.7, 1.0], [39.8, 1.0], [39.9, 1.0], [40.0, 1.0], [40.1, 1.0], [40.2, 1.0], [40.3, 1.0], [40.4, 1.0], [40.5, 1.0], [40.6, 1.0], [40.7, 1.0], [40.8, 1.0], [40.9, 1.0], [41.0, 1.0], [41.1, 1.0], [41.2, 1.0], [41.3, 1.0], [41.4, 1.0], [41.5, 1.0], [41.6, 1.0], [41.7, 1.0], [41.8, 1.0], [41.9, 1.0], [42.0, 1.0], [42.1, 1.0], [42.2, 1.0], [42.3, 1.0], [42.4, 1.0], [42.5, 1.0], [42.6, 1.0], [42.7, 1.0], [42.8, 1.0], [42.9, 1.0], [43.0, 1.0], [43.1, 1.0], [43.2, 1.0], [43.3, 1.0], [43.4, 1.0], [43.5, 1.0], [43.6, 1.0], [43.7, 1.0], [43.8, 1.0], [43.9, 1.0], [44.0, 1.0], [44.1, 1.0], [44.2, 1.0], [44.3, 1.0], [44.4, 1.0], [44.5, 1.0], [44.6, 1.0], [44.7, 1.0], [44.8, 1.0], [44.9, 1.0], [45.0, 1.0], [45.1, 1.0], [45.2, 1.0], [45.3, 1.0], [45.4, 1.0], [45.5, 1.0], [45.6, 1.0], [45.7, 1.0], [45.8, 1.0], [45.9, 1.0], [46.0, 1.0], [46.1, 1.0], [46.2, 1.0], [46.3, 1.0], [46.4, 1.0], [46.5, 1.0], [46.6, 1.0], [46.7, 1.0], [46.8, 1.0], [46.9, 1.0], [47.0, 1.0], [47.1, 1.0], [47.2, 1.0], [47.3, 1.0], [47.4, 1.0], [47.5, 1.0], [47.6, 1.0], [47.7, 1.0], [47.8, 1.0], [47.9, 1.0], [48.0, 1.0], [48.1, 1.0], [48.2, 1.0], [48.3, 1.0], [48.4, 1.0], [48.5, 1.0], [48.6, 1.0], [48.7, 1.0], [48.8, 1.0], [48.9, 1.0], [49.0, 1.0], [49.1, 1.0], [49.2, 1.0], [49.3, 1.0], [49.4, 1.0], [49.5, 1.0], [49.6, 1.0], [49.7, 1.0], [49.8, 1.0], [49.9, 1.0], [50.0, 1.0], [50.1, 1.0], [50.2, 1.0], [50.3, 1.0], [50.4, 1.0], [50.5, 1.0], [50.6, 1.0], [50.7, 1.0], [50.8, 1.0], [50.9, 1.0], [51.0, 1.0], [51.1, 1.0], [51.2, 1.0], [51.3, 1.0], [51.4, 1.0], [51.5, 1.0], [51.6, 1.0], [51.7, 1.0], [51.8, 1.0], [51.9, 1.0], [52.0, 1.0], [52.1, 1.0], [52.2, 1.0], [52.3, 1.0], [52.4, 1.0], [52.5, 1.0], [52.6, 1.0], [52.7, 1.0], [52.8, 1.0], [52.9, 1.0], [53.0, 1.0], [53.1, 1.0], [53.2, 1.0], [53.3, 1.0], [53.4, 1.0], [53.5, 1.0], [53.6, 1.0], [53.7, 1.0], [53.8, 1.0], [53.9, 1.0], [54.0, 1.0], [54.1, 1.0], [54.2, 1.0], [54.3, 1.0], [54.4, 1.0], [54.5, 1.0], [54.6, 1.0], [54.7, 1.0], [54.8, 1.0], [54.9, 1.0], [55.0, 1.0], [55.1, 1.0], [55.2, 1.0], [55.3, 1.0], [55.4, 1.0], [55.5, 1.0], [55.6, 1.0], [55.7, 1.0], [55.8, 1.0], [55.9, 1.0], [56.0, 1.0], [56.1, 1.0], [56.2, 1.0], [56.3, 1.0], [56.4, 1.0], [56.5, 1.0], [56.6, 1.0], [56.7, 1.0], [56.8, 1.0], [56.9, 1.0], [57.0, 1.0], [57.1, 1.0], [57.2, 1.0], [57.3, 1.0], [57.4, 1.0], [57.5, 1.0], [57.6, 1.0], [57.7, 1.0], [57.8, 1.0], [57.9, 1.0], [58.0, 1.0], [58.1, 1.0], [58.2, 1.0], [58.3, 1.0], [58.4, 1.0], [58.5, 1.0], [58.6, 1.0], [58.7, 1.0], [58.8, 1.0], [58.9, 1.0], [59.0, 1.0], [59.1, 1.0], [59.2, 1.0], [59.3, 1.0], [59.4, 1.0], [59.5, 1.0], [59.6, 1.0], [59.7, 1.0], [59.8, 1.0], [59.9, 1.0], [60.0, 1.0], [60.1, 1.0], [60.2, 1.0], [60.3, 1.0], [60.4, 1.0], [60.5, 1.0], [60.6, 1.0], [60.7, 1.0], [60.8, 1.0], [60.9, 1.0], [61.0, 1.0], [61.1, 1.0], [61.2, 1.0], [61.3, 1.0], [61.4, 1.0], [61.5, 1.0], [61.6, 1.0], [61.7, 1.0], [61.8, 1.0], [61.9, 1.0], [62.0, 1.0], [62.1, 1.0], [62.2, 1.0], [62.3, 1.0], [62.4, 1.0], [62.5, 1.0], [62.6, 1.0], [62.7, 1.0], [62.8, 1.0], [62.9, 1.0], [63.0, 1.0], [63.1, 1.0], [63.2, 1.0], [63.3, 1.0], [63.4, 1.0], [63.5, 1.0], [63.6, 1.0], [63.7, 1.0], [63.8, 1.0], [63.9, 1.0], [64.0, 1.0], [64.1, 1.0], [64.2, 1.0], [64.3, 1.0], [64.4, 1.0], [64.5, 1.0], [64.6, 1.0], [64.7, 1.0], [64.8, 1.0], [64.9, 1.0], [65.0, 1.0], [65.1, 1.0], [65.2, 1.0], [65.3, 1.0], [65.4, 1.0], [65.5, 1.0], [65.6, 1.0], [65.7, 1.0], [65.8, 1.0], [65.9, 2.0], [66.0, 2.0], [66.1, 2.0], [66.2, 2.0], [66.3, 2.0], [66.4, 2.0], [66.5, 2.0], [66.6, 2.0], [66.7, 2.0], [66.8, 2.0], [66.9, 2.0], [67.0, 2.0], [67.1, 2.0], [67.2, 2.0], [67.3, 2.0], [67.4, 2.0], [67.5, 2.0], [67.6, 2.0], [67.7, 2.0], [67.8, 2.0], [67.9, 2.0], [68.0, 2.0], [68.1, 2.0], [68.2, 2.0], [68.3, 2.0], [68.4, 2.0], [68.5, 2.0], [68.6, 2.0], [68.7, 2.0], [68.8, 2.0], [68.9, 2.0], [69.0, 2.0], [69.1, 2.0], [69.2, 2.0], [69.3, 2.0], [69.4, 2.0], [69.5, 2.0], [69.6, 2.0], [69.7, 2.0], [69.8, 2.0], [69.9, 2.0], [70.0, 2.0], [70.1, 2.0], [70.2, 2.0], [70.3, 2.0], [70.4, 2.0], [70.5, 2.0], [70.6, 2.0], [70.7, 2.0], [70.8, 2.0], [70.9, 2.0], [71.0, 2.0], [71.1, 2.0], [71.2, 2.0], [71.3, 2.0], [71.4, 2.0], [71.5, 2.0], [71.6, 2.0], [71.7, 2.0], [71.8, 2.0], [71.9, 2.0], [72.0, 2.0], [72.1, 2.0], [72.2, 2.0], [72.3, 2.0], [72.4, 2.0], [72.5, 2.0], [72.6, 2.0], [72.7, 2.0], [72.8, 2.0], [72.9, 2.0], [73.0, 2.0], [73.1, 2.0], [73.2, 2.0], [73.3, 2.0], [73.4, 2.0], [73.5, 2.0], [73.6, 2.0], [73.7, 2.0], [73.8, 2.0], [73.9, 2.0], [74.0, 2.0], [74.1, 2.0], [74.2, 2.0], [74.3, 2.0], [74.4, 2.0], [74.5, 2.0], [74.6, 2.0], [74.7, 2.0], [74.8, 2.0], [74.9, 2.0], [75.0, 2.0], [75.1, 2.0], [75.2, 2.0], [75.3, 2.0], [75.4, 2.0], [75.5, 2.0], [75.6, 2.0], [75.7, 2.0], [75.8, 2.0], [75.9, 2.0], [76.0, 2.0], [76.1, 2.0], [76.2, 2.0], [76.3, 2.0], [76.4, 2.0], [76.5, 2.0], [76.6, 2.0], [76.7, 2.0], [76.8, 2.0], [76.9, 2.0], [77.0, 2.0], [77.1, 2.0], [77.2, 2.0], [77.3, 2.0], [77.4, 2.0], [77.5, 2.0], [77.6, 2.0], [77.7, 2.0], [77.8, 2.0], [77.9, 2.0], [78.0, 2.0], [78.1, 2.0], [78.2, 2.0], [78.3, 2.0], [78.4, 2.0], [78.5, 2.0], [78.6, 2.0], [78.7, 2.0], [78.8, 2.0], [78.9, 2.0], [79.0, 2.0], [79.1, 2.0], [79.2, 2.0], [79.3, 2.0], [79.4, 2.0], [79.5, 2.0], [79.6, 2.0], [79.7, 2.0], [79.8, 2.0], [79.9, 2.0], [80.0, 2.0], [80.1, 2.0], [80.2, 2.0], [80.3, 2.0], [80.4, 2.0], [80.5, 2.0], [80.6, 2.0], [80.7, 2.0], [80.8, 2.0], [80.9, 2.0], [81.0, 2.0], [81.1, 2.0], [81.2, 2.0], [81.3, 2.0], [81.4, 2.0], [81.5, 2.0], [81.6, 2.0], [81.7, 2.0], [81.8, 2.0], [81.9, 2.0], [82.0, 2.0], [82.1, 2.0], [82.2, 2.0], [82.3, 2.0], [82.4, 2.0], [82.5, 2.0], [82.6, 2.0], [82.7, 2.0], [82.8, 2.0], [82.9, 2.0], [83.0, 2.0], [83.1, 2.0], [83.2, 2.0], [83.3, 2.0], [83.4, 2.0], [83.5, 2.0], [83.6, 2.0], [83.7, 2.0], [83.8, 2.0], [83.9, 2.0], [84.0, 2.0], [84.1, 2.0], [84.2, 2.0], [84.3, 2.0], [84.4, 2.0], [84.5, 2.0], [84.6, 2.0], [84.7, 2.0], [84.8, 2.0], [84.9, 2.0], [85.0, 2.0], [85.1, 2.0], [85.2, 2.0], [85.3, 2.0], [85.4, 2.0], [85.5, 2.0], [85.6, 2.0], [85.7, 2.0], [85.8, 2.0], [85.9, 2.0], [86.0, 3.0], [86.1, 3.0], [86.2, 3.0], [86.3, 3.0], [86.4, 3.0], [86.5, 3.0], [86.6, 3.0], [86.7, 3.0], [86.8, 3.0], [86.9, 3.0], [87.0, 3.0], [87.1, 3.0], [87.2, 3.0], [87.3, 3.0], [87.4, 3.0], [87.5, 3.0], [87.6, 3.0], [87.7, 3.0], [87.8, 3.0], [87.9, 3.0], [88.0, 3.0], [88.1, 3.0], [88.2, 3.0], [88.3, 3.0], [88.4, 3.0], [88.5, 3.0], [88.6, 3.0], [88.7, 3.0], [88.8, 3.0], [88.9, 3.0], [89.0, 3.0], [89.1, 3.0], [89.2, 3.0], [89.3, 3.0], [89.4, 3.0], [89.5, 3.0], [89.6, 3.0], [89.7, 3.0], [89.8, 3.0], [89.9, 3.0], [90.0, 3.0], [90.1, 3.0], [90.2, 3.0], [90.3, 3.0], [90.4, 3.0], [90.5, 3.0], [90.6, 3.0], [90.7, 3.0], [90.8, 3.0], [90.9, 3.0], [91.0, 3.0], [91.1, 3.0], [91.2, 3.0], [91.3, 3.0], [91.4, 3.0], [91.5, 3.0], [91.6, 3.0], [91.7, 3.0], [91.8, 3.0], [91.9, 3.0], [92.0, 4.0], [92.1, 4.0], [92.2, 4.0], [92.3, 4.0], [92.4, 4.0], [92.5, 4.0], [92.6, 4.0], [92.7, 4.0], [92.8, 4.0], [92.9, 4.0], [93.0, 4.0], [93.1, 4.0], [93.2, 4.0], [93.3, 4.0], [93.4, 4.0], [93.5, 4.0], [93.6, 4.0], [93.7, 4.0], [93.8, 4.0], [93.9, 4.0], [94.0, 4.0], [94.1, 4.0], [94.2, 4.0], [94.3, 4.0], [94.4, 4.0], [94.5, 4.0], [94.6, 4.0], [94.7, 5.0], [94.8, 5.0], [94.9, 5.0], [95.0, 5.0], [95.1, 5.0], [95.2, 5.0], [95.3, 5.0], [95.4, 5.0], [95.5, 5.0], [95.6, 5.0], [95.7, 5.0], [95.8, 5.0], [95.9, 5.0], [96.0, 5.0], [96.1, 5.0], [96.2, 5.0], [96.3, 5.0], [96.4, 5.0], [96.5, 6.0], [96.6, 6.0], [96.7, 6.0], [96.8, 6.0], [96.9, 6.0], [97.0, 6.0], [97.1, 6.0], [97.2, 6.0], [97.3, 7.0], [97.4, 7.0], [97.5, 7.0], [97.6, 7.0], [97.7, 7.0], [97.8, 7.0], [97.9, 8.0], [98.0, 8.0], [98.1, 8.0], [98.2, 8.0], [98.3, 9.0], [98.4, 9.0], [98.5, 9.0], [98.6, 10.0], [98.7, 10.0], [98.8, 11.0], [98.9, 12.0], [99.0, 12.0], [99.1, 13.0], [99.2, 15.0], [99.3, 17.0], [99.4, 19.0], [99.5, 25.0], [99.6, 31.0], [99.7, 78.0], [99.8, 113.0], [99.9, 144.0]], "isOverall": false, "label": "GET /team/get", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 9484.0, "series": [{"data": [[0.0, 9484.0], [100.0, 22.0], [200.0, 2.0]], "isOverall": false, "label": "GET /team/get", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9508.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 9508.0, "series": [{"data": [[0.0, 9508.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.794160362E12, "maxY": 30.0, "series": [{"data": [[1.794160385E12, 30.0], [1.794160428E12, 30.0], [1.794160387E12, 30.0], [1.79416043E12, 30.0], [1.794160389E12, 30.0], [1.794160432E12, 20.23255813953489], [1.794160391E12, 30.0], [1.794160393E12, 30.0], [1.794160395E12, 30.0], [1.794160397E12, 30.0], [1.794160399E12, 30.0], [1.794160401E12, 30.0], [1.794160403E12, 30.0], [1.794160405E12, 30.0], [1.794160362E12, 1.5], [1.794160364E12, 7.333333333333332], [1.794160407E12, 30.0], [1.794160409E12, 30.0], [1.794160366E12, 13.2741935483871], [1.794160368E12, 19.164835164835168], [1.794160411E12, 30.0], [1.794160413E12, 30.0], [1.79416037E12, 25.1967213114754], [1.794160372E12, 30.0], [1.794160415E12, 30.0], [1.794160417E12, 30.0], [1.794160374E12, 30.0], [1.794160376E12, 30.0], [1.794160419E12, 30.0], [1.794160421E12, 30.0], [1.794160378E12, 30.0], [1.79416038E12, 30.0], [1.794160423E12, 30.0], [1.794160425E12, 30.0], [1.794160382E12, 30.0], [1.794160384E12, 30.0], [1.794160427E12, 30.0], [1.794160429E12, 30.0], [1.794160386E12, 30.0], [1.794160388E12, 30.0], [1.794160431E12, 30.0], [1.79416039E12, 30.0], [1.794160392E12, 30.0], [1.794160394E12, 30.0], [1.794160396E12, 30.0], [1.794160398E12, 30.0], [1.7941604E12, 30.0], [1.794160402E12, 30.0], [1.794160404E12, 30.0], [1.794160363E12, 4.263157894736842], [1.794160406E12, 30.0], [1.794160365E12, 10.285714285714285], [1.794160408E12, 30.0], [1.794160367E12, 16.21052631578948], [1.79416041E12, 30.0], [1.794160369E12, 22.194444444444454], [1.794160412E12, 30.0], [1.794160371E12, 28.180451127819552], [1.794160414E12, 30.0], [1.794160373E12, 30.0], [1.794160416E12, 30.0], [1.794160375E12, 30.0], [1.794160418E12, 30.0], [1.794160377E12, 30.0], [1.79416042E12, 30.0], [1.794160379E12, 30.0], [1.794160422E12, 30.0], [1.794160381E12, 30.0], [1.794160424E12, 30.0], [1.794160383E12, 30.0], [1.794160426E12, 30.0]], "isOverall": false, "label": "Read teams", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.794160432E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1.1860465116279069, "minX": 1.0, "maxY": 10.4, "series": [{"data": [[2.0, 1.5], [3.0, 3.666666666666667], [4.0, 3.6], [5.0, 10.4], [6.0, 4.428571428571429], [7.0, 2.0], [8.0, 1.8124999999999998], [9.0, 2.8461538461538463], [10.0, 2.0000000000000004], [11.0, 1.588235294117647], [12.0, 2.3684210526315788], [13.0, 2.2500000000000004], [14.0, 1.952380952380952], [15.0, 1.538461538461538], [1.0, 7.0], [16.0, 1.5714285714285712], [17.0, 2.36], [18.0, 1.6562499999999998], [19.0, 1.4000000000000004], [20.0, 1.3235294117647058], [21.0, 2.0000000000000004], [22.0, 2.0], [23.0, 1.8], [24.0, 1.3414634146341466], [25.0, 2.0000000000000004], [26.0, 1.488888888888889], [27.0, 1.1860465116279069], [28.0, 1.276595744680851], [29.0, 4.083333333333333], [30.0, 2.170307167235493]], "isOverall": false, "label": "GET /team/get", "isController": false}, {"data": [[29.219394194362597, 2.1623895666806896]], "isOverall": false, "label": "GET /team/get-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 30.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 348.0, "minX": 1.794160362E12, "maxY": 56550.0, "series": [{"data": [[1.794160385E12, 54288.0], [1.794160428E12, 52026.0], [1.794160387E12, 56173.0], [1.79416043E12, 53534.0], [1.794160389E12, 53534.0], [1.794160432E12, 16211.0], [1.794160391E12, 56173.0], [1.794160393E12, 54288.0], [1.794160395E12, 56173.0], [1.794160397E12, 56550.0], [1.794160399E12, 55042.0], [1.794160401E12, 53911.0], [1.794160403E12, 55419.0], [1.794160405E12, 56173.0], [1.794160362E12, 754.0], [1.794160364E12, 12441.0], [1.794160407E12, 54665.0], [1.794160409E12, 54665.0], [1.794160366E12, 23374.0], [1.794160368E12, 34307.0], [1.794160411E12, 54288.0], [1.794160413E12, 56550.0], [1.79416037E12, 45994.0], [1.794160372E12, 56550.0], [1.794160415E12, 56550.0], [1.794160417E12, 56550.0], [1.794160374E12, 54288.0], [1.794160376E12, 55042.0], [1.794160419E12, 51649.0], [1.794160421E12, 55419.0], [1.794160378E12, 55796.0], [1.79416038E12, 55042.0], [1.794160423E12, 56550.0], [1.794160425E12, 56173.0], [1.794160382E12, 55796.0], [1.794160384E12, 55042.0], [1.794160427E12, 55042.0], [1.794160429E12, 54665.0], [1.794160386E12, 55419.0], [1.794160388E12, 56173.0], [1.794160431E12, 56550.0], [1.79416039E12, 55796.0], [1.794160392E12, 53911.0], [1.794160394E12, 55042.0], [1.794160396E12, 56550.0], [1.794160398E12, 53534.0], [1.7941604E12, 55796.0], [1.794160402E12, 54288.0], [1.794160404E12, 56550.0], [1.794160363E12, 7163.0], [1.794160406E12, 53911.0], [1.794160365E12, 18473.0], [1.794160408E12, 54665.0], [1.794160367E12, 28652.0], [1.79416041E12, 56173.0], [1.794160369E12, 40716.0], [1.794160412E12, 56550.0], [1.794160371E12, 50141.0], [1.794160414E12, 45617.0], [1.794160373E12, 55796.0], [1.794160416E12, 56173.0], [1.794160375E12, 55796.0], [1.794160418E12, 54665.0], [1.794160377E12, 54665.0], [1.79416042E12, 55419.0], [1.794160379E12, 54665.0], [1.794160422E12, 54665.0], [1.794160381E12, 56173.0], [1.794160424E12, 56550.0], [1.794160383E12, 55042.0], [1.794160426E12, 56550.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.794160385E12, 25056.0], [1.794160428E12, 24012.0], [1.794160387E12, 25926.0], [1.79416043E12, 24708.0], [1.794160389E12, 24708.0], [1.794160432E12, 7482.0], [1.794160391E12, 25926.0], [1.794160393E12, 25056.0], [1.794160395E12, 25926.0], [1.794160397E12, 26100.0], [1.794160399E12, 25404.0], [1.794160401E12, 24882.0], [1.794160403E12, 25578.0], [1.794160405E12, 25926.0], [1.794160362E12, 348.0], [1.794160364E12, 5742.0], [1.794160407E12, 25230.0], [1.794160409E12, 25230.0], [1.794160366E12, 10788.0], [1.794160368E12, 15834.0], [1.794160411E12, 25056.0], [1.794160413E12, 26100.0], [1.79416037E12, 21228.0], [1.794160372E12, 26100.0], [1.794160415E12, 26100.0], [1.794160417E12, 26100.0], [1.794160374E12, 25056.0], [1.794160376E12, 25404.0], [1.794160419E12, 23838.0], [1.794160421E12, 25578.0], [1.794160378E12, 25752.0], [1.79416038E12, 25404.0], [1.794160423E12, 26100.0], [1.794160425E12, 25926.0], [1.794160382E12, 25752.0], [1.794160384E12, 25404.0], [1.794160427E12, 25404.0], [1.794160429E12, 25230.0], [1.794160386E12, 25578.0], [1.794160388E12, 25926.0], [1.794160431E12, 26100.0], [1.79416039E12, 25752.0], [1.794160392E12, 24882.0], [1.794160394E12, 25404.0], [1.794160396E12, 26100.0], [1.794160398E12, 24708.0], [1.7941604E12, 25752.0], [1.794160402E12, 25056.0], [1.794160404E12, 26100.0], [1.794160363E12, 3306.0], [1.794160406E12, 24882.0], [1.794160365E12, 8526.0], [1.794160408E12, 25230.0], [1.794160367E12, 13224.0], [1.79416041E12, 25926.0], [1.794160369E12, 18792.0], [1.794160412E12, 26100.0], [1.794160371E12, 23142.0], [1.794160414E12, 21054.0], [1.794160373E12, 25752.0], [1.794160416E12, 25926.0], [1.794160375E12, 25752.0], [1.794160418E12, 25230.0], [1.794160377E12, 25230.0], [1.79416042E12, 25578.0], [1.794160379E12, 25230.0], [1.794160422E12, 25230.0], [1.794160381E12, 25926.0], [1.794160424E12, 26100.0], [1.794160383E12, 25404.0], [1.794160426E12, 26100.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.794160432E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1.0805369127516782, "minX": 1.794160362E12, "maxY": 36.13223140495868, "series": [{"data": [[1.794160385E12, 2.576388888888889], [1.794160428E12, 2.81159420289855], [1.794160387E12, 1.5033557046979864], [1.79416043E12, 1.570422535211267], [1.794160389E12, 1.866197183098592], [1.794160432E12, 2.1627906976744193], [1.794160391E12, 1.7583892617449672], [1.794160393E12, 1.7361111111111114], [1.794160395E12, 1.1879194630872483], [1.794160397E12, 1.8866666666666674], [1.794160399E12, 1.3972602739726028], [1.794160401E12, 1.5874125874125875], [1.794160403E12, 2.3469387755102056], [1.794160405E12, 1.6040268456375848], [1.794160362E12, 7.0], [1.794160364E12, 2.1212121212121207], [1.794160407E12, 1.337931034482759], [1.794160409E12, 1.2758620689655178], [1.794160366E12, 2.1612903225806455], [1.794160368E12, 1.406593406593407], [1.794160411E12, 1.6041666666666667], [1.794160413E12, 1.1133333333333335], [1.79416037E12, 1.5901639344262295], [1.794160372E12, 2.286666666666668], [1.794160415E12, 1.7466666666666666], [1.794160417E12, 1.3733333333333335], [1.794160374E12, 1.5902777777777772], [1.794160376E12, 1.36986301369863], [1.794160419E12, 1.2919708029197077], [1.794160421E12, 1.4965986394557822], [1.794160378E12, 1.6013513513513513], [1.79416038E12, 1.6575342465753418], [1.794160423E12, 1.46], [1.794160425E12, 2.1879194630872494], [1.794160382E12, 1.371621621621622], [1.794160384E12, 1.410958904109588], [1.794160427E12, 1.445205479452055], [1.794160429E12, 4.544827586206898], [1.794160386E12, 1.8639455782312924], [1.794160388E12, 1.7718120805369122], [1.794160431E12, 1.113333333333333], [1.79416039E12, 1.4662162162162156], [1.794160392E12, 1.6783216783216781], [1.794160394E12, 1.5958904109589043], [1.794160396E12, 1.4266666666666676], [1.794160398E12, 1.8309859154929577], [1.7941604E12, 1.8986486486486471], [1.794160402E12, 1.2083333333333337], [1.794160404E12, 3.9200000000000004], [1.794160363E12, 7.736842105263158], [1.794160406E12, 1.9650349650349663], [1.794160365E12, 1.9999999999999998], [1.794160408E12, 1.4206896551724135], [1.794160367E12, 1.8289473684210527], [1.79416041E12, 1.3288590604026844], [1.794160369E12, 1.7777777777777792], [1.794160412E12, 1.7266666666666663], [1.794160371E12, 2.3834586466165413], [1.794160414E12, 36.13223140495868], [1.794160373E12, 1.5135135135135127], [1.794160416E12, 1.0805369127516782], [1.794160375E12, 1.3243243243243248], [1.794160418E12, 1.5241379310344823], [1.794160377E12, 1.5862068965517242], [1.79416042E12, 1.2517006802721091], [1.794160379E12, 1.448275862068966], [1.794160422E12, 1.7379310344827583], [1.794160381E12, 1.6241610738255023], [1.794160424E12, 1.3800000000000001], [1.794160383E12, 1.2808219178082192], [1.794160426E12, 2.1133333333333333]], "isOverall": false, "label": "GET /team/get", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.794160432E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1.0805369127516782, "minX": 1.794160362E12, "maxY": 36.13223140495868, "series": [{"data": [[1.794160385E12, 2.5694444444444438], [1.794160428E12, 2.81159420289855], [1.794160387E12, 1.5033557046979864], [1.79416043E12, 1.570422535211267], [1.794160389E12, 1.859154929577465], [1.794160432E12, 2.1627906976744193], [1.794160391E12, 1.7583892617449672], [1.794160393E12, 1.729166666666667], [1.794160395E12, 1.1879194630872483], [1.794160397E12, 1.8866666666666674], [1.794160399E12, 1.3904109589041096], [1.794160401E12, 1.5874125874125875], [1.794160403E12, 2.3469387755102056], [1.794160405E12, 1.6040268456375848], [1.794160362E12, 7.0], [1.794160364E12, 2.0606060606060597], [1.794160407E12, 1.337931034482759], [1.794160409E12, 1.2758620689655178], [1.794160366E12, 2.1612903225806455], [1.794160368E12, 1.3956043956043958], [1.794160411E12, 1.6041666666666667], [1.794160413E12, 1.1133333333333335], [1.79416037E12, 1.573770491803279], [1.794160372E12, 2.280000000000001], [1.794160415E12, 1.7466666666666666], [1.794160417E12, 1.3733333333333335], [1.794160374E12, 1.5902777777777772], [1.794160376E12, 1.363013698630137], [1.794160419E12, 1.2919708029197077], [1.794160421E12, 1.4965986394557822], [1.794160378E12, 1.587837837837838], [1.79416038E12, 1.6575342465753418], [1.794160423E12, 1.453333333333334], [1.794160425E12, 2.1879194630872494], [1.794160382E12, 1.358108108108109], [1.794160384E12, 1.3972602739726014], [1.794160427E12, 1.445205479452055], [1.794160429E12, 4.544827586206898], [1.794160386E12, 1.857142857142857], [1.794160388E12, 1.7718120805369122], [1.794160431E12, 1.1066666666666662], [1.79416039E12, 1.4594594594594594], [1.794160392E12, 1.6783216783216781], [1.794160394E12, 1.5958904109589043], [1.794160396E12, 1.4200000000000006], [1.794160398E12, 1.8239436619718308], [1.7941604E12, 1.8918918918918926], [1.794160402E12, 1.2013888888888893], [1.794160404E12, 3.9200000000000004], [1.794160363E12, 7.578947368421053], [1.794160406E12, 1.9650349650349663], [1.794160365E12, 1.9591836734693875], [1.794160408E12, 1.4137931034482758], [1.794160367E12, 1.8157894736842106], [1.79416041E12, 1.3288590604026844], [1.794160369E12, 1.7407407407407414], [1.794160412E12, 1.72], [1.794160371E12, 2.3834586466165413], [1.794160414E12, 36.13223140495868], [1.794160373E12, 1.5135135135135127], [1.794160416E12, 1.0805369127516782], [1.794160375E12, 1.3040540540540544], [1.794160418E12, 1.5241379310344823], [1.794160377E12, 1.5793103448275865], [1.79416042E12, 1.2517006802721091], [1.794160379E12, 1.448275862068966], [1.794160422E12, 1.7379310344827583], [1.794160381E12, 1.6174496644295293], [1.794160424E12, 1.3800000000000001], [1.794160383E12, 1.2808219178082192], [1.794160426E12, 2.106666666666667]], "isOverall": false, "label": "GET /team/get", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.794160432E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.794160362E12, "maxY": 4.0, "series": [{"data": [[1.794160385E12, 0.0], [1.794160428E12, 0.0], [1.794160387E12, 0.0], [1.79416043E12, 0.007042253521126762], [1.794160389E12, 0.0], [1.794160432E12, 0.0], [1.794160391E12, 0.0], [1.794160393E12, 0.0], [1.794160395E12, 0.0], [1.794160397E12, 0.0], [1.794160399E12, 0.0], [1.794160401E12, 0.0], [1.794160403E12, 0.0], [1.794160405E12, 0.0], [1.794160362E12, 4.0], [1.794160364E12, 0.060606060606060635], [1.794160407E12, 0.0], [1.794160409E12, 0.0], [1.794160366E12, 0.0], [1.794160368E12, 0.010989010989010992], [1.794160411E12, 0.0], [1.794160413E12, 0.0], [1.79416037E12, 0.008196721311475409], [1.794160372E12, 0.0], [1.794160415E12, 0.0], [1.794160417E12, 0.0], [1.794160374E12, 0.0], [1.794160376E12, 0.0], [1.794160419E12, 0.0], [1.794160421E12, 0.0], [1.794160378E12, 0.0], [1.79416038E12, 0.0], [1.794160423E12, 0.013333333333333336], [1.794160425E12, 0.02684563758389262], [1.794160382E12, 0.0], [1.794160384E12, 0.0], [1.794160427E12, 0.0], [1.794160429E12, 0.013793103448275869], [1.794160386E12, 0.0], [1.794160388E12, 0.0], [1.794160431E12, 0.0], [1.79416039E12, 0.0], [1.794160392E12, 0.0], [1.794160394E12, 0.0], [1.794160396E12, 0.0], [1.794160398E12, 0.0], [1.7941604E12, 0.0], [1.794160402E12, 0.0], [1.794160404E12, 0.0], [1.794160363E12, 0.31578947368421056], [1.794160406E12, 0.0], [1.794160365E12, 0.0], [1.794160408E12, 0.0], [1.794160367E12, 0.026315789473684213], [1.79416041E12, 0.0], [1.794160369E12, 0.00925925925925926], [1.794160412E12, 0.0], [1.794160371E12, 0.015037593984962409], [1.794160414E12, 0.0], [1.794160373E12, 0.0], [1.794160416E12, 0.0], [1.794160375E12, 0.0], [1.794160418E12, 0.0], [1.794160377E12, 0.0], [1.79416042E12, 0.0], [1.794160379E12, 0.0], [1.794160422E12, 0.013793103448275869], [1.794160381E12, 0.0], [1.794160424E12, 0.0], [1.794160383E12, 0.0], [1.794160426E12, 0.0]], "isOverall": false, "label": "GET /team/get", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.794160432E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.794160362E12, "maxY": 211.0, "series": [{"data": [[1.794160385E12, 24.0], [1.794160428E12, 19.0], [1.794160387E12, 6.0], [1.79416043E12, 7.0], [1.794160389E12, 10.0], [1.794160432E12, 8.0], [1.794160391E12, 8.0], [1.794160393E12, 13.0], [1.794160395E12, 4.0], [1.794160397E12, 13.0], [1.794160399E12, 12.0], [1.794160401E12, 8.0], [1.794160403E12, 20.0], [1.794160405E12, 9.0], [1.794160362E12, 12.0], [1.794160364E12, 11.0], [1.794160407E12, 7.0], [1.794160409E12, 9.0], [1.794160366E12, 7.0], [1.794160368E12, 5.0], [1.794160411E12, 8.0], [1.794160413E12, 6.0], [1.79416037E12, 5.0], [1.794160372E12, 19.0], [1.794160415E12, 15.0], [1.794160417E12, 10.0], [1.794160374E12, 4.0], [1.794160376E12, 4.0], [1.794160419E12, 5.0], [1.794160421E12, 11.0], [1.794160378E12, 8.0], [1.79416038E12, 8.0], [1.794160423E12, 7.0], [1.794160425E12, 17.0], [1.794160382E12, 5.0], [1.794160384E12, 6.0], [1.794160427E12, 8.0], [1.794160429E12, 63.0], [1.794160386E12, 10.0], [1.794160388E12, 12.0], [1.794160431E12, 6.0], [1.79416039E12, 10.0], [1.794160392E12, 9.0], [1.794160394E12, 8.0], [1.794160396E12, 5.0], [1.794160398E12, 13.0], [1.7941604E12, 10.0], [1.794160402E12, 5.0], [1.794160404E12, 46.0], [1.794160363E12, 32.0], [1.794160406E12, 13.0], [1.794160365E12, 4.0], [1.794160408E12, 5.0], [1.794160367E12, 7.0], [1.79416041E12, 6.0], [1.794160369E12, 6.0], [1.794160412E12, 10.0], [1.794160371E12, 27.0], [1.794160414E12, 211.0], [1.794160373E12, 11.0], [1.794160416E12, 6.0], [1.794160375E12, 4.0], [1.794160418E12, 9.0], [1.794160377E12, 8.0], [1.79416042E12, 6.0], [1.794160379E12, 9.0], [1.794160422E12, 10.0], [1.794160381E12, 13.0], [1.794160424E12, 6.0], [1.794160383E12, 6.0], [1.794160426E12, 12.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.794160385E12, 4.0], [1.794160428E12, 7.0], [1.794160387E12, 4.0], [1.79416043E12, 3.0], [1.794160389E12, 3.700000000000017], [1.794160432E12, 3.0], [1.794160391E12, 4.0], [1.794160393E12, 3.0], [1.794160395E12, 2.0], [1.794160397E12, 3.0], [1.794160399E12, 2.0], [1.794160401E12, 3.0], [1.794160403E12, 4.0], [1.794160405E12, 3.0], [1.794160362E12, 12.0], [1.794160364E12, 3.6000000000000014], [1.794160407E12, 2.0], [1.794160409E12, 2.0], [1.794160366E12, 4.0], [1.794160368E12, 2.0], [1.794160411E12, 3.0], [1.794160413E12, 2.0], [1.79416037E12, 3.0], [1.794160372E12, 4.0], [1.794160415E12, 3.9000000000000057], [1.794160417E12, 2.0], [1.794160374E12, 3.0], [1.794160376E12, 2.0], [1.794160419E12, 2.0], [1.794160421E12, 3.200000000000017], [1.794160378E12, 3.0], [1.79416038E12, 3.0], [1.794160423E12, 3.0], [1.794160425E12, 4.0], [1.794160382E12, 2.0], [1.794160384E12, 2.0], [1.794160427E12, 3.0], [1.794160429E12, 10.0], [1.794160386E12, 3.200000000000017], [1.794160388E12, 3.0], [1.794160431E12, 2.0], [1.79416039E12, 3.0], [1.794160392E12, 4.0], [1.794160394E12, 3.0], [1.794160396E12, 3.0], [1.794160398E12, 3.700000000000017], [1.7941604E12, 3.0], [1.794160402E12, 2.0], [1.794160404E12, 9.0], [1.794160363E12, 27.0], [1.794160406E12, 4.0], [1.794160365E12, 3.0], [1.794160408E12, 3.0], [1.794160367E12, 3.0], [1.79416041E12, 2.0], [1.794160369E12, 3.0], [1.794160412E12, 3.0], [1.794160371E12, 5.0], [1.794160414E12, 142.39999999999998], [1.794160373E12, 3.0], [1.794160416E12, 2.0], [1.794160375E12, 2.0], [1.794160418E12, 3.0], [1.794160377E12, 3.0], [1.79416042E12, 2.0], [1.794160379E12, 2.0], [1.794160422E12, 3.0], [1.794160381E12, 3.0], [1.794160424E12, 2.0], [1.794160383E12, 2.0], [1.794160426E12, 5.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.794160385E12, 23.55000000000001], [1.794160428E12, 18.609999999999985], [1.794160387E12, 6.0], [1.79416043E12, 6.569999999999993], [1.794160389E12, 10.0], [1.794160432E12, 8.0], [1.794160391E12, 8.0], [1.794160393E12, 12.550000000000011], [1.794160395E12, 4.0], [1.794160397E12, 11.980000000000018], [1.794160399E12, 9.180000000000007], [1.794160401E12, 7.1200000000000045], [1.794160403E12, 19.52000000000001], [1.794160405E12, 8.0], [1.794160362E12, 12.0], [1.794160364E12, 11.0], [1.794160407E12, 6.079999999999984], [1.794160409E12, 7.619999999999976], [1.794160366E12, 7.0], [1.794160368E12, 5.0], [1.794160411E12, 7.100000000000023], [1.794160413E12, 4.980000000000018], [1.79416037E12, 5.0], [1.794160372E12, 17.470000000000027], [1.794160415E12, 15.0], [1.794160417E12, 7.4500000000000455], [1.794160374E12, 4.0], [1.794160376E12, 4.0], [1.794160419E12, 5.0], [1.794160421E12, 10.04000000000002], [1.794160378E12, 8.0], [1.79416038E12, 8.0], [1.794160423E12, 6.490000000000009], [1.794160425E12, 15.0], [1.794160382E12, 4.509999999999991], [1.794160384E12, 5.530000000000001], [1.794160427E12, 7.530000000000001], [1.794160429E12, 54.71999999999986], [1.794160386E12, 10.0], [1.794160388E12, 9.5], [1.794160431E12, 4.980000000000018], [1.79416039E12, 8.529999999999973], [1.794160392E12, 9.0], [1.794160394E12, 7.530000000000001], [1.794160396E12, 5.0], [1.794160398E12, 11.279999999999973], [1.7941604E12, 9.509999999999991], [1.794160402E12, 5.0], [1.794160404E12, 38.350000000000136], [1.794160363E12, 32.0], [1.794160406E12, 12.560000000000002], [1.794160365E12, 4.0], [1.794160408E12, 4.539999999999992], [1.794160367E12, 7.0], [1.79416041E12, 5.5], [1.794160369E12, 5.909999999999997], [1.794160412E12, 8.980000000000018], [1.794160371E12, 25.299999999999983], [1.794160414E12, 210.34], [1.794160373E12, 8.549999999999955], [1.794160416E12, 5.0], [1.794160375E12, 4.0], [1.794160418E12, 9.0], [1.794160377E12, 8.0], [1.79416042E12, 6.0], [1.794160379E12, 9.0], [1.794160422E12, 9.539999999999992], [1.794160381E12, 10.0], [1.794160424E12, 6.0], [1.794160383E12, 5.530000000000001], [1.794160426E12, 10.470000000000027]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.794160385E12, 14.75], [1.794160428E12, 11.049999999999983], [1.794160387E12, 5.0], [1.79416043E12, 3.0], [1.794160389E12, 5.849999999999994], [1.794160432E12, 6.599999999999994], [1.794160391E12, 5.5], [1.794160393E12, 5.75], [1.794160395E12, 3.0], [1.794160397E12, 5.449999999999989], [1.794160399E12, 4.0], [1.794160401E12, 3.0], [1.794160403E12, 7.599999999999994], [1.794160405E12, 4.0], [1.794160362E12, 12.0], [1.794160364E12, 6.09999999999998], [1.794160407E12, 4.0], [1.794160409E12, 2.6999999999999886], [1.794160366E12, 4.849999999999994], [1.794160368E12, 2.0], [1.794160411E12, 4.75], [1.794160413E12, 2.0], [1.79416037E12, 4.0], [1.794160372E12, 7.0], [1.794160415E12, 4.449999999999989], [1.794160417E12, 3.0], [1.794160374E12, 3.0], [1.794160376E12, 3.0], [1.794160419E12, 4.0], [1.794160421E12, 4.0], [1.794160378E12, 4.0], [1.79416038E12, 4.650000000000006], [1.794160423E12, 4.0], [1.794160425E12, 6.0], [1.794160382E12, 3.0], [1.794160384E12, 3.0], [1.794160427E12, 4.0], [1.794160429E12, 26.399999999999977], [1.794160386E12, 5.599999999999994], [1.794160388E12, 5.5], [1.794160431E12, 2.0], [1.79416039E12, 4.549999999999983], [1.794160392E12, 5.0], [1.794160394E12, 5.0], [1.794160396E12, 4.0], [1.794160398E12, 5.0], [1.7941604E12, 5.0], [1.794160402E12, 2.75], [1.794160404E12, 15.899999999999977], [1.794160363E12, 32.0], [1.794160406E12, 5.0], [1.794160365E12, 4.0], [1.794160408E12, 3.0], [1.794160367E12, 3.1499999999999915], [1.79416041E12, 3.5], [1.794160369E12, 4.0], [1.794160412E12, 5.0], [1.794160371E12, 7.0], [1.794160414E12, 166.89999999999998], [1.794160373E12, 3.549999999999983], [1.794160416E12, 2.0], [1.794160375E12, 2.0], [1.794160418E12, 4.0], [1.794160377E12, 4.0], [1.79416042E12, 4.0], [1.794160379E12, 3.6999999999999886], [1.794160422E12, 6.399999999999977], [1.794160381E12, 4.5], [1.794160424E12, 4.0], [1.794160383E12, 3.0], [1.794160426E12, 6.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.794160385E12, 0.0], [1.794160428E12, 0.0], [1.794160387E12, 0.0], [1.79416043E12, 0.0], [1.794160389E12, 0.0], [1.794160432E12, 1.0], [1.794160391E12, 0.0], [1.794160393E12, 0.0], [1.794160395E12, 0.0], [1.794160397E12, 0.0], [1.794160399E12, 0.0], [1.794160401E12, 0.0], [1.794160403E12, 0.0], [1.794160405E12, 0.0], [1.794160362E12, 2.0], [1.794160364E12, 1.0], [1.794160407E12, 0.0], [1.794160409E12, 0.0], [1.794160366E12, 1.0], [1.794160368E12, 0.0], [1.794160411E12, 0.0], [1.794160413E12, 0.0], [1.79416037E12, 0.0], [1.794160372E12, 0.0], [1.794160415E12, 0.0], [1.794160417E12, 0.0], [1.794160374E12, 0.0], [1.794160376E12, 0.0], [1.794160419E12, 0.0], [1.794160421E12, 0.0], [1.794160378E12, 0.0], [1.79416038E12, 0.0], [1.794160423E12, 0.0], [1.794160425E12, 0.0], [1.794160382E12, 0.0], [1.794160384E12, 0.0], [1.794160427E12, 0.0], [1.794160429E12, 0.0], [1.794160386E12, 0.0], [1.794160388E12, 0.0], [1.794160431E12, 0.0], [1.79416039E12, 0.0], [1.794160392E12, 0.0], [1.794160394E12, 0.0], [1.794160396E12, 0.0], [1.794160398E12, 0.0], [1.7941604E12, 0.0], [1.794160402E12, 0.0], [1.794160404E12, 0.0], [1.794160363E12, 1.0], [1.794160406E12, 0.0], [1.794160365E12, 1.0], [1.794160408E12, 0.0], [1.794160367E12, 1.0], [1.79416041E12, 0.0], [1.794160369E12, 0.0], [1.794160412E12, 0.0], [1.794160371E12, 0.0], [1.794160414E12, 0.0], [1.794160373E12, 0.0], [1.794160416E12, 0.0], [1.794160375E12, 0.0], [1.794160418E12, 0.0], [1.794160377E12, 0.0], [1.79416042E12, 0.0], [1.794160379E12, 0.0], [1.794160422E12, 0.0], [1.794160381E12, 0.0], [1.794160424E12, 0.0], [1.794160383E12, 0.0], [1.794160426E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.794160385E12, 1.0], [1.794160428E12, 2.0], [1.794160387E12, 1.0], [1.79416043E12, 1.0], [1.794160389E12, 1.0], [1.794160432E12, 2.0], [1.794160391E12, 1.0], [1.794160393E12, 1.0], [1.794160395E12, 1.0], [1.794160397E12, 1.0], [1.794160399E12, 1.0], [1.794160401E12, 1.0], [1.794160403E12, 1.0], [1.794160405E12, 1.0], [1.794160362E12, 7.0], [1.794160364E12, 2.0], [1.794160407E12, 1.0], [1.794160409E12, 1.0], [1.794160366E12, 2.0], [1.794160368E12, 1.0], [1.794160411E12, 1.0], [1.794160413E12, 1.0], [1.79416037E12, 1.0], [1.794160372E12, 2.0], [1.794160415E12, 1.0], [1.794160417E12, 1.0], [1.794160374E12, 1.0], [1.794160376E12, 1.0], [1.794160419E12, 1.0], [1.794160421E12, 1.0], [1.794160378E12, 1.0], [1.79416038E12, 1.0], [1.794160423E12, 1.0], [1.794160425E12, 1.0], [1.794160382E12, 1.0], [1.794160384E12, 1.0], [1.794160427E12, 1.0], [1.794160429E12, 1.0], [1.794160386E12, 1.0], [1.794160388E12, 1.0], [1.794160431E12, 1.0], [1.79416039E12, 1.0], [1.794160392E12, 1.0], [1.794160394E12, 1.0], [1.794160396E12, 1.0], [1.794160398E12, 1.0], [1.7941604E12, 1.0], [1.794160402E12, 1.0], [1.794160404E12, 2.0], [1.794160363E12, 4.0], [1.794160406E12, 1.0], [1.794160365E12, 2.0], [1.794160408E12, 1.0], [1.794160367E12, 2.0], [1.79416041E12, 1.0], [1.794160369E12, 2.0], [1.794160412E12, 1.0], [1.794160371E12, 1.0], [1.794160414E12, 2.0], [1.794160373E12, 1.0], [1.794160416E12, 1.0], [1.794160375E12, 1.0], [1.794160418E12, 1.0], [1.794160377E12, 1.0], [1.79416042E12, 1.0], [1.794160379E12, 1.0], [1.794160422E12, 1.0], [1.794160381E12, 1.0], [1.794160424E12, 1.0], [1.794160383E12, 1.0], [1.794160426E12, 1.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.794160432E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 2.0, "maxY": 7.0, "series": [{"data": [[2.0, 7.0], [33.0, 2.0], [133.0, 1.0], [142.0, 1.0], [143.0, 1.0], [137.0, 1.0], [138.0, 2.0], [150.0, 1.0], [148.0, 1.0], [144.0, 1.0], [146.0, 1.0], [145.0, 1.0], [149.0, 1.0], [147.0, 1.0], [43.0, 2.0], [49.0, 2.0], [62.0, 2.0], [19.0, 4.0], [76.0, 2.0], [91.0, 1.0], [108.0, 2.0], [122.0, 1.0], [121.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 150.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1.0, "minX": 2.0, "maxY": 7.0, "series": [{"data": [[2.0, 7.0], [33.0, 2.0], [133.0, 1.0], [142.0, 1.0], [143.0, 1.0], [137.0, 1.0], [138.0, 2.0], [150.0, 1.0], [148.0, 1.0], [144.0, 1.0], [146.0, 1.0], [145.0, 1.0], [149.0, 1.0], [147.0, 1.0], [43.0, 2.0], [49.0, 2.0], [62.0, 2.0], [19.0, 3.0], [76.0, 2.0], [91.0, 1.0], [108.0, 2.0], [122.0, 1.0], [121.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 150.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.794160362E12, "maxY": 150.0, "series": [{"data": [[1.794160385E12, 143.0], [1.794160428E12, 138.0], [1.794160387E12, 149.0], [1.79416043E12, 142.0], [1.794160389E12, 142.0], [1.794160432E12, 43.0], [1.794160391E12, 149.0], [1.794160393E12, 143.0], [1.794160395E12, 149.0], [1.794160397E12, 150.0], [1.794160399E12, 146.0], [1.794160401E12, 144.0], [1.794160403E12, 147.0], [1.794160405E12, 150.0], [1.794160362E12, 2.0], [1.794160364E12, 33.0], [1.794160407E12, 145.0], [1.794160409E12, 144.0], [1.794160366E12, 62.0], [1.794160368E12, 91.0], [1.794160411E12, 144.0], [1.794160413E12, 150.0], [1.79416037E12, 122.0], [1.794160372E12, 146.0], [1.794160415E12, 150.0], [1.794160417E12, 150.0], [1.794160374E12, 144.0], [1.794160376E12, 146.0], [1.794160419E12, 138.0], [1.794160421E12, 148.0], [1.794160378E12, 148.0], [1.79416038E12, 146.0], [1.794160423E12, 150.0], [1.794160425E12, 149.0], [1.794160382E12, 148.0], [1.794160384E12, 147.0], [1.794160427E12, 146.0], [1.794160429E12, 145.0], [1.794160386E12, 147.0], [1.794160388E12, 149.0], [1.794160431E12, 150.0], [1.79416039E12, 148.0], [1.794160392E12, 144.0], [1.794160394E12, 146.0], [1.794160396E12, 150.0], [1.794160398E12, 142.0], [1.7941604E12, 148.0], [1.794160402E12, 143.0], [1.794160404E12, 150.0], [1.794160363E12, 19.0], [1.794160406E12, 142.0], [1.794160365E12, 49.0], [1.794160408E12, 146.0], [1.794160367E12, 76.0], [1.79416041E12, 149.0], [1.794160369E12, 108.0], [1.794160412E12, 150.0], [1.794160371E12, 137.0], [1.794160414E12, 121.0], [1.794160373E12, 148.0], [1.794160416E12, 149.0], [1.794160375E12, 148.0], [1.794160418E12, 145.0], [1.794160377E12, 145.0], [1.79416042E12, 146.0], [1.794160379E12, 145.0], [1.794160422E12, 144.0], [1.794160381E12, 149.0], [1.794160424E12, 150.0], [1.794160383E12, 146.0], [1.794160426E12, 150.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.794160432E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.794160362E12, "maxY": 150.0, "series": [{"data": [[1.794160385E12, 144.0], [1.794160428E12, 138.0], [1.794160387E12, 149.0], [1.79416043E12, 142.0], [1.794160389E12, 142.0], [1.794160432E12, 43.0], [1.794160391E12, 149.0], [1.794160393E12, 144.0], [1.794160395E12, 149.0], [1.794160397E12, 150.0], [1.794160399E12, 146.0], [1.794160401E12, 143.0], [1.794160403E12, 147.0], [1.794160405E12, 149.0], [1.794160362E12, 2.0], [1.794160364E12, 33.0], [1.794160407E12, 145.0], [1.794160409E12, 145.0], [1.794160366E12, 62.0], [1.794160368E12, 91.0], [1.794160411E12, 144.0], [1.794160413E12, 150.0], [1.79416037E12, 122.0], [1.794160372E12, 150.0], [1.794160415E12, 150.0], [1.794160417E12, 150.0], [1.794160374E12, 144.0], [1.794160376E12, 146.0], [1.794160419E12, 137.0], [1.794160421E12, 147.0], [1.794160378E12, 148.0], [1.79416038E12, 146.0], [1.794160423E12, 150.0], [1.794160425E12, 149.0], [1.794160382E12, 148.0], [1.794160384E12, 146.0], [1.794160427E12, 146.0], [1.794160429E12, 145.0], [1.794160386E12, 147.0], [1.794160388E12, 149.0], [1.794160431E12, 150.0], [1.79416039E12, 148.0], [1.794160392E12, 143.0], [1.794160394E12, 146.0], [1.794160396E12, 150.0], [1.794160398E12, 142.0], [1.7941604E12, 148.0], [1.794160402E12, 144.0], [1.794160404E12, 150.0], [1.794160363E12, 19.0], [1.794160406E12, 143.0], [1.794160365E12, 49.0], [1.794160408E12, 145.0], [1.794160367E12, 76.0], [1.79416041E12, 149.0], [1.794160369E12, 108.0], [1.794160412E12, 150.0], [1.794160371E12, 133.0], [1.794160414E12, 121.0], [1.794160373E12, 148.0], [1.794160416E12, 149.0], [1.794160375E12, 148.0], [1.794160418E12, 145.0], [1.794160377E12, 145.0], [1.79416042E12, 147.0], [1.794160379E12, 145.0], [1.794160422E12, 145.0], [1.794160381E12, 149.0], [1.794160424E12, 150.0], [1.794160383E12, 146.0], [1.794160426E12, 150.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.794160432E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.794160362E12, "maxY": 150.0, "series": [{"data": [[1.794160385E12, 144.0], [1.794160428E12, 138.0], [1.794160387E12, 149.0], [1.79416043E12, 142.0], [1.794160389E12, 142.0], [1.794160432E12, 43.0], [1.794160391E12, 149.0], [1.794160393E12, 144.0], [1.794160395E12, 149.0], [1.794160397E12, 150.0], [1.794160399E12, 146.0], [1.794160401E12, 143.0], [1.794160403E12, 147.0], [1.794160405E12, 149.0], [1.794160362E12, 2.0], [1.794160364E12, 33.0], [1.794160407E12, 145.0], [1.794160409E12, 145.0], [1.794160366E12, 62.0], [1.794160368E12, 91.0], [1.794160411E12, 144.0], [1.794160413E12, 150.0], [1.79416037E12, 122.0], [1.794160372E12, 150.0], [1.794160415E12, 150.0], [1.794160417E12, 150.0], [1.794160374E12, 144.0], [1.794160376E12, 146.0], [1.794160419E12, 137.0], [1.794160421E12, 147.0], [1.794160378E12, 148.0], [1.79416038E12, 146.0], [1.794160423E12, 150.0], [1.794160425E12, 149.0], [1.794160382E12, 148.0], [1.794160384E12, 146.0], [1.794160427E12, 146.0], [1.794160429E12, 145.0], [1.794160386E12, 147.0], [1.794160388E12, 149.0], [1.794160431E12, 150.0], [1.79416039E12, 148.0], [1.794160392E12, 143.0], [1.794160394E12, 146.0], [1.794160396E12, 150.0], [1.794160398E12, 142.0], [1.7941604E12, 148.0], [1.794160402E12, 144.0], [1.794160404E12, 150.0], [1.794160363E12, 19.0], [1.794160406E12, 143.0], [1.794160365E12, 49.0], [1.794160408E12, 145.0], [1.794160367E12, 76.0], [1.79416041E12, 149.0], [1.794160369E12, 108.0], [1.794160412E12, 150.0], [1.794160371E12, 133.0], [1.794160414E12, 121.0], [1.794160373E12, 148.0], [1.794160416E12, 149.0], [1.794160375E12, 148.0], [1.794160418E12, 145.0], [1.794160377E12, 145.0], [1.79416042E12, 147.0], [1.794160379E12, 145.0], [1.794160422E12, 145.0], [1.794160381E12, 149.0], [1.794160424E12, 150.0], [1.794160383E12, 146.0], [1.794160426E12, 150.0]], "isOverall": false, "label": "GET /team/get-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.794160432E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.794160362E12, "maxY": 150.0, "series": [{"data": [[1.794160385E12, 144.0], [1.794160428E12, 138.0], [1.794160387E12, 149.0], [1.79416043E12, 142.0], [1.794160389E12, 142.0], [1.794160432E12, 43.0], [1.794160391E12, 149.0], [1.794160393E12, 144.0], [1.794160395E12, 149.0], [1.794160397E12, 150.0], [1.794160399E12, 146.0], [1.794160401E12, 143.0], [1.794160403E12, 147.0], [1.794160405E12, 149.0], [1.794160362E12, 2.0], [1.794160364E12, 33.0], [1.794160407E12, 145.0], [1.794160409E12, 145.0], [1.794160366E12, 62.0], [1.794160368E12, 91.0], [1.794160411E12, 144.0], [1.794160413E12, 150.0], [1.79416037E12, 122.0], [1.794160372E12, 150.0], [1.794160415E12, 150.0], [1.794160417E12, 150.0], [1.794160374E12, 144.0], [1.794160376E12, 146.0], [1.794160419E12, 137.0], [1.794160421E12, 147.0], [1.794160378E12, 148.0], [1.79416038E12, 146.0], [1.794160423E12, 150.0], [1.794160425E12, 149.0], [1.794160382E12, 148.0], [1.794160384E12, 146.0], [1.794160427E12, 146.0], [1.794160429E12, 145.0], [1.794160386E12, 147.0], [1.794160388E12, 149.0], [1.794160431E12, 150.0], [1.79416039E12, 148.0], [1.794160392E12, 143.0], [1.794160394E12, 146.0], [1.794160396E12, 150.0], [1.794160398E12, 142.0], [1.7941604E12, 148.0], [1.794160402E12, 144.0], [1.794160404E12, 150.0], [1.794160363E12, 19.0], [1.794160406E12, 143.0], [1.794160365E12, 49.0], [1.794160408E12, 145.0], [1.794160367E12, 76.0], [1.79416041E12, 149.0], [1.794160369E12, 108.0], [1.794160412E12, 150.0], [1.794160371E12, 133.0], [1.794160414E12, 121.0], [1.794160373E12, 148.0], [1.794160416E12, 149.0], [1.794160375E12, 148.0], [1.794160418E12, 145.0], [1.794160377E12, 145.0], [1.79416042E12, 147.0], [1.794160379E12, 145.0], [1.794160422E12, 145.0], [1.794160381E12, 149.0], [1.794160424E12, 150.0], [1.794160383E12, 146.0], [1.794160426E12, 150.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.794160432E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

