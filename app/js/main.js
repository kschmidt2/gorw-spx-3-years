// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

// bolds the subhead if there is no headline
let subhead = document.getElementsByClassName("chart-subhead"),
    headline = document.getElementById("chart-head");
    if (!headline) {
        for(var i = 0; i < subhead.length; i++) {
            subhead[i].style.fontWeight = "600";
        }       
     }

     Highcharts.setOptions({
        lang: {
          thousandsSep: ''
        }
    });


document.addEventListener('DOMContentLoaded', function () {

    setTimeout(function(){

    let chartId = document.getElementById("chart-container");

    // checks for the chart ID and displays a backup image if the browser can't find it
    if (!chartId) {
        console.log('noId');
        let chartArea = document.getElementsByClassName("chart-area");
        for(var i = 0; i < chartArea.length; i++) {
            chartArea[i].style.display = "none";
        } 
        // insert chart screenshot here
        document.getElementById("chart-fallback").innerHTML += '<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/28/sp500-three-year-chart.1572292140075.png" style="width: 100%;max-width:660px">';
    } else {
        console.log('yesId')
    }


    const myChart =  

        Highcharts.chart(chartId, {
            chart: {
                type: 'line',
                styledMode: true,
                spacingBottom: 25,
                spacingRight: 100
            }, 
            title: {
                text: null
            },
            data: {
                googleSpreadsheetKey: '1HMRyj3Xg0PeEqyMCSpcd-gJmMvILgUorWp6Pn8-10aU',
                endColumn: 1
            },
            // for line charts only
            plotOptions: {
                series: {
                    lineWidth: 1,
                    // clip: false,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        fillColor: '#ffffff',
                        states: {
                            hover: {
                                fillColor: '#ffffff'
                            }
                        }
                    }
                }
            },
            legend: {
                enabled: false
            },
            xAxis: {
                labels: {
                    style: {
                        whiteSpace: 'nowrap'
                    }
                },
                tickLength: 5
            },
            yAxis: {
                title: false,
                labels: {
                    useHTML: true,
                    overflow: 'allow'
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                shadow: false,
                padding: 10,
                valueDecimals: 2,
            },
            annotations: [{
                shapes: [{
                    point: {
                        x: 1516994669000, // timestamp
                        y: 2872.86783924313, // value
                        xAxis: 0, // yAxis INDEX
                        yAxis: 0 // xAxis INDEX
                      },
                    type: 'circle',
                    r: 5
                }, {
                    point: {
                        x: 1537385069000, // timestamp
                        y: 2930.74615209949, // value
                        xAxis: 0, // yAxis INDEX
                        yAxis: 0 // xAxis INDEX
                      },
                    type: 'circle',
                    r: 5
                }, {
                    point: {
                        x: 1556652269000, // timestamp
                        y: 2945.83088684581, // value
                        xAxis: 0, // yAxis INDEX
                        yAxis: 0 // xAxis INDEX
                      },
                    type: 'circle',
                    r: 5
                }, {
                    point: {
                        x: 1564169069000, // timestamp
                        y: 3025.85914811883, // value
                        xAxis: 0, // yAxis INDEX
                        yAxis: 0 // xAxis INDEX
                      },
                    type: 'circle',
                    r: 5
                }],
            }],
            responsive: {
                rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                    spacingRight: 10
                    },
                    legend: {
                        align: 'left',
                        x: -18
                    },
                    tooltip: {
                        enabled: false
                    }
                }
                }]
            }
        });
    },1000);
    });