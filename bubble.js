function drawBubbles(div,data){
    var height = data.heigh+'%';
   var chart= Highcharts.chart(div, {


    chart: {
        type: 'packedbubble',
        height: data.height+'%'
    },
    title: {
        text: data.name
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.code}</b> - <b> {point.name}<br></b> {point.value} Headcount'
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                            $("#dummy-modal").trigger("click");
                            $("bigModalTitle").html(this.name);
                            var route='production-plan/line/'+this.id+'/show';
                            var cap_route='production-plan/line/'+this.id+'/cap';
                            modalLoader('get', route, 'bigModal', '', '', '', 'chosen-select', '');
                    }
                }
            }
        },
        packedbubble: {
            minSize: 25,
            maxSize: 60,
            zMin: 0,
            zMax: 22,
            layoutAlgorithm: {
                gravitationalConstant: 0.05,
                splitSeries: true,
                seriesInteraction: false,
                dragBetweenSeries: true,
                parentNodeLimit: true
            },
            dataLabels: {
                enabled: true,
                format: '{point.code}',
                filter: {
                    property: 'y',
                    operator: '>=',
                    value: 0
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: data.data


});

}
