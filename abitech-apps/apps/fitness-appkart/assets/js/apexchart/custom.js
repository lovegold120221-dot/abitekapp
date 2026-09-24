var options = {
    series: [60],
    chart: {
        height: 300,
        type: 'radialBar',
        background: 'transparent'
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
                background: '#2e2e2e'
            },
            track: {
                background: '#313131',
                strokeWidth: '100%',
                margin: -6
            },
            dataLabels: {
                show: true,
                value: {
                    color: '#fff',
                    fontSize: '28px',
                    fontWeight: 600,
                    offsetY: 5,
                    formatter: function (val) {
                        return val + "%";
                    }
                },
                name: {
                    show: false
                }
            }
        }
    },
    fill: {
        colors: ['#50e3c2']
    },
    stroke: {
        lineCap: 'butt'
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();




/* ===============
column chart
===============*/

var options = {
    series: [
        {
            name: 'series2',
            data: [32, 26, 40, 32, 68, 43, 37, 60],
        },
    ],
    colors: ["#6CDFC31A", "#6CDFC31A", "#6CDFC31A", "#6CDFC31A", "#6CDFC31A", "#6CDFC31A", "#6CDFC31A", "#6CDFC3"],
    chart: {
        height: 95,
        type: 'bar',
        offsetY: 30,
        sparkline: {
            enabled: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            vartical: true,
            distributed: true,
            barHeight: '100%',
            dataLabels: {
                position: 'top',
            },
        }
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
            fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
        },
        y: {
            formatter: function (val) {
                return val + " units";
            },
            title: {
                formatter: function () {
                    return "";
                }
            }
        },
        marker: {
            show: true,
            fillColors: ["#6CDFC3"],
        },
    },
    responsive: [
        {
            breakpoint: 450,
            options: {
                chart: {
                    height: 80,
                    width: 180,
                },
            },
        },
        {
            breakpoint: 417,
            options: {
                chart: {
                    height: 80,
                    width: 150,
                },
            },
        },
    ],
};
var chart = new ApexCharts(document.querySelector("#expensesChart"), options);
chart.render();


/* ==============
month chart 
=================*/
var optionChart = {
    chart: {
        toolbar: {
            show: false,
        },
        height: 153,
        type: "area",
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 2,
        curve: "smooth",
        colors: ['#6CDFC3'],
    },
    xaxis: {
        categories: ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun"],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: '#cccccc',
                fontSize: '12px',
            }
        }
    },
    yaxis: {
        min: 40,
        max: 60,
        tickAmount: 4, // 5 steps: 40, 45, 50, 55, 60
        labels: {
            style: {
                colors: '#cccccc',
                fontSize: '12px',
            }
        }
    },
    grid: {
        borderColor: "rgba(255,255,255,0.1)",
        strokeDashArray: 4,
        padding: {
            top: -20,
            right: 0,
            bottom: 0,
            left: 20,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.05,
            stops: [0, 90, 100],
            colorStops: [
                {
                    offset: 0,
                    color: "#FFFFFF",
                    opacity: 0.3
                },
                {
                    offset: 100,
                    color: "#FFFFFF",
                    opacity: 0
                }
            ]
        },
    },
    colors: ['#6CDFC3'],
    series: [{
        data: [41, 47, 54, 46, 47, 45, 48, 53, 51, 60, 39],
    }],
    tooltip: {
        theme: "dark",
        x: {
            show: false
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chart-widget"), optionChart);
chart.render();


/* ===========
radial chart 
============*/
var options = {
    chart: {
        width: 100,
        height: 100,
        type: "radialBar"
    },
    series: [75],
    colors: ['#6CDFC3'],
    plotOptions: {
        radialBar: {
            hollow: {
                size: "50%"
            },
            track: {
                background: '#272835'
            },
            dataLabels: {
                showOn: "always",
                name: {
                    show: true,
                    color: "#ffff",
                    fontSize: "14px",
                    fontWeight: "500",
                    offsetY: 3
                },
                value: {
                    show: false,
                }
            }
        }
    },
    stroke: {
        lineCap: "round",
    },
    responsive: [{
        breakpoint: 360,
        options: {
            chart: {
                height: 250,
            }
        }
    }],
    labels: ["15/20"],

    responsive: [
        {
            breakpoint: 376,
            options: {
                chart: {
                    width: 80,
                    height: 80,
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: "12px",
                            },
                        }
                    }
                },
            },
        },
    ],
};
var chart = new ApexCharts(document.querySelector("#UserActivity"), options);
chart.render();

