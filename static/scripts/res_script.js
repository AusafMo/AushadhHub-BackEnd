// var options = {
//   series: [confidence_level],
//   chart: {
//       height: 350,
//       type: 'radialBar',
//       offsetY: -40,
//   },
//   plotOptions: {
//       radialBar: {
//           startAngle: -135,
//           endAngle: 135,
//           dataLabels: {
//               name: {
//                   fontSize: '22px',
//                   color: '#148506',
//                   offsetY: 120
//               },
//               value: {
//                   offsetY: -10,
//                   fontSize: '30px',
//                   color: '#148506',
//                   formatter: function (val) {
//                       return val + "%";
//                   }
//               }
//           }
//       }
//   },
//   fill: {
//       type: 'solid', // Change type to 'solid'
//       colors: '#148506', // Change the color here
//   },
//   stroke: {
//       dashArray: 2
//   },
//   labels: ['Confidence Level'],
// };

// var chart = new ApexCharts(document.querySelector("#chartDiv"), options);
// chart.render();



var options = {
    series: [confidence_level],
    chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
       hollow: {
        margin: 0,
        size: '70%',
        background: '#fff',
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: 'front',
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24
        }
      },
      track: {
        background: '#fff',
        strokeWidth: '67%',
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35
        }
      },
  
      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: '#888',
          fontSize: '20px'
        },
        value: {
          formatter: function(val) {
            return parseInt(confidence_level);
          },
          color: '#111',
          fontSize: '36px',
          show: true,
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 0.4,
      gradientToColors: ['#ABE5A1'],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  stroke: {
    lineCap: 'round'
  },
  labels: ['Confidence Level '],
  };

  var chart = new ApexCharts(document.querySelector("#chartDiv"), options);
  chart.render();
