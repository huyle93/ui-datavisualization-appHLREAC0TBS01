//
// //
// // // // For dashboard's charts
// //
//
// Data for Radar Chart
var dataRadar = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
        {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
}
var radarOptions = {
    animation: { animateRotate: true, animateScale: true },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend: {
        display: true
    }
}
// Data for Pie Chart Doughnut
var dataPie = {
    labels: [
		'Lose',
		'Win'
	],
	datasets: [{
		data: [30, 70],
		backgroundColor: [
		'#FF6384',
		'#36A2EB'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB'
        ]
	}]
};
// Options for Pie Chart Doughnut
var pieOptions = {
    animation: { animateRotate: true, animateScale: true },
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: true
    }
}

// Data and listener animation for Line Chart
var dataSales = {
  labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
  series: [
     [287, 385, 490, 492, 554, 586, 698, 695]
    // [67, 152, 143, 240, 287, 335, 435, 437],
    // [23, 113, 67, 108, 190, 239, 307, 308]
  ]
};
var optionsSales = {
  low: 0,
  high: 800,
  showArea: true,
  height: "245px",
  axisX: {
    showGrid: false,
  },
  lineSmooth: true,
  showLine: true,
  showPoint: true,
  fullWidth: true,
  chartPadding: {
    right: 50
  }
};
var listener = {
    draw: function (data) {
        if (data.type === 'line' || data.type === 'area') {
            data.element.animate({
                d: {
                    begin: 2000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: [.17,.67,.83,.67]//Chartist.Svg.Easing.easeOutQuint
                }
            });
        }
    }
}
var responsiveSales = [
  ['screen and (max-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];
var legendSales = {
    names: ["Open","Click","Click Second Time"],
    types: ["info","danger","warning"]
};

// Data for Bar Chart
var dataBar = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
    seriesBarDistance: 10,
    axisX: {
        showGrid: false
    },
    height: "245px"
};
var responsiveBar = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];
var legendBar = {
    names: ["Tesla Model S","BMW 5 Series"],
    types: ["info","danger"]
};

module.exports = {
    dataRadar, radarOptions, dataPie, pieOptions, dataSales, optionsSales, listener, responsiveSales, legendSales, dataBar, optionsBar, responsiveBar, legendBar // For charts (Dashboard view)
};
