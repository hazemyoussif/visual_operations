function drawPareto(div,data){
   var chart= Highcharts.chart(div, {
    chart: {
        renderTo: 'container',
        type: 'column'
    },
    title: {
        text: data.name
    },
    credits: {
            enabled: false
        },
        
        plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                            plotter('stack','stackchart','topics/'+this.category, {}, method = 'get');
                            plotter('pie','piechart','topicspie/'+this.category, {}, method = 'get');
                        //alert(this.category )
                    }
                }
            }
        },
        pareto:{
            dataLabels: {
                enabled: false
            }
        }
    },
    tooltip: {
        shared: true
    },
    xAxis: {
        categories: data.xaxis,
        crosshair: true
    },
    yAxis: [{
        title: {
            text: ''
        }
    }, {
        title: {
            text: ''
        },
        minPadding: 0,
        maxPadding: 0,
        max: 100,
        min: 0,
        opposite: true,
        labels: {
            format: "{value}%"
        }
    }],
    series: [{
        type: 'pareto',
        name: 'Pareto',
        yAxis: 1,
        zIndex: 20,
        baseSeries: 1
    }, {
        name: data.name,
        type: 'column',
        zIndex: 2,
        data: data.yaxis
    }, {
        name: 'Actual Budget',
        type: 'line',
        color: '#7CCD7C',
        zIndex: 2,
        data: data.s
    }
, {
        name: 'Target Budget',
        type: 'line',
        zIndex: 2,
        data: data.m,
        color: '#EE2C2C'
    }]
});
}
