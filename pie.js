function drawPie(div,data){
    
  var chart= Highcharts.chart(div, {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: data.title
  },
  tooltip: {
    pointFormat: '{series.name}: <br><b>{point.percentage:.1f}%</b> \n\ <b>{point.y}</b>'
  },
  accessibility: {
    point: {
      valueSuffix: '%'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} % \n\ <b>{point.y}</b>'
      }
    }
  },
  series: [{
          name: data.seriesname,
          colorByPoint: true,
          data: data.series
      }]
});
/*var chart=Highcharts.chart(div, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: data.name
    },
    credits: {
            enabled: false
        },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true
            },
            showInLegend: true
        }
    },
    series: [{
        name: data.name,
        colorByPoint: true,
        data: data.series
    }]
});*/

}
