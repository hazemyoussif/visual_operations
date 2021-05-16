function drawStack(div,data){

var chart =Highcharts.chart(div, {
  chart: {
    type: 'column'
  },
  title: {
    text: data.title
  },
  xAxis: {
    categories: data.xaxis
  },
  yAxis: {
    min: 0,
    title: {
      text: data.ytitle
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: ( // theme
          Highcharts.defaultOptions.title.style &&
          Highcharts.defaultOptions.title.style.color
        ) || 'gray'
      }
    }
  },
  legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true
      }
    }
  },
  series: data.series
});    
    
/*var chart= Highcharts.chart(div, {

    chart: {
        type: 'column'
    },

    title: {
        text: data.title
    },
    xAxis: {
        categories: data.xaxis
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: data.ytitle
        }
    },

    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
                this.series.name + ': ' + this.y + '<br/>' +
                'Total: ' + this.point.stackTotal;
        }
    },

    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        //$("#showtable").show();
                    }
                }
            }
        },
        column: {
            stacking: 'normal'
        }
    },

    series: data.yaxis
});*/
}
