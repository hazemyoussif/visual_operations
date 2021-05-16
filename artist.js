


$('body').on("click", ".btn-portal", function() {
    var pane = $(this).data('pane');
    var view = $(this).data('view');
    var company = $(this).data('company');
    $("#" + pane).html('');
    $("#" + pane).append(portalblocker(pane, view, company, 'pane'));
    var start = 1;
    var end = 15; //{{date('W')}};
    var start_year = 2018; //{{date('Y')}} ;
    var end_year = 2018;//{{date('Y')}} ;
    var pformat = $(this).data('pformat');
    var sformat = $(this).data('sformat');
    var ptitle = $(this).data('ptitle');
    var stitle = $(this).data('stitle');
    var route = view + '/chart';
    var option = {
        "yaxisP": {"format": pformat, "title": ptitle, "color": "#ffff"},
        "yaxisS": {"format": sformat, "title": stitle, "color": "#ffff"},
        "type": "column",
        "title": pane,
        "subtitle": "",
        "xtitle": ""
    };
    var report = "normal";
    data = {company_id: company, report: report, start: start, end: end, start_year: start_year, end_year: end_year};
    plotter('container-' + pane, option, route, data);
    modalLoader('GET', 'oids/' + pane, pane + '-table', '', '', '', '', '');

});

$('body').on("click", ".btn-range", function() {
    var pane = $(this).data('pane');
    var view = $(this).data('view');
    var company = $("#" + pane + "-range input[name='company']").val();
    var start = $("#" + pane + "-range input[name='start']").val();
    var end = $("#" + pane + "-range input[name='end']").val();
    var start_year = $("#" + pane + "-range input[name='start_year']").val();
    var end_year = $("#" + pane + "-range input[name='end_year']").val();
    var report = "range";
    var route = view + '/chart';
    var option = {
        "yaxisP": {"format": "€", "title": "Values in Euro", "color": "#ffff"},
        "yaxisS": {"format": "%", "title": "% of Target", "color": "#ffff"},
        "type": "column",
        "title": pane,
        "subtitle": "",
        "xtitle": ""
    };
    var report = "range";
    data = {company_id: company, report: report, start: start, end: end, start_year: start_year, end_year: end_year};
    plotter('container-' + pane, option, route, data);

});

$('body').on("click", ".btn-compare", function() {
    var pane = $(this).data('pane');
    var view = $(this).data('view');
    var pCompany = $("#" + pane + "-compare select[name='pcompany']").val();
    var cCompany = $("#" + pane + "-compare select[name='ccompany']").val();
    var start = $("#" + pane + "-compare input[name='start']").val();
    var end = $("#" + pane + "-compare input[name='end']").val();
    var start_year = $("#" + pane + "-compare input[name='start_year']").val();
    var end_year = $("#" + pane + "-compare input[name='end_year']").val();
    var report = "compare";
    var route = view + '/chart';
    var option = {
        "yaxisP": {"format": "€", "title": "Values in Euro", "color": "#ffff"},
        "yaxisS": {"format": "%", "title": "% of Target", "color": "#ffff"},
        "type": "column",
        "title": pane,
        "subtitle": "",
        "xtitle": ""
    };
    data = {pcompany: pCompany, ccompany: cCompany, report: report, start: start, end: end, start_year: start_year, end_year: end_year};
    plotter('container-' + pane, option, route, data);

});

$('body').on("click", ".updateform", function() {
    var view = $(this).data('view');
    var rout = view + '/week/' + $(this).data('company');
    var targetDiv = $(this).data('targetdiv');
    $("#" + targetDiv).empty();
    modalLoader('GET', rout, targetDiv, '', '', '', '', {})
});

$('body').on("click", ".linechart", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    for (var i = 0; i < chart.series.length; i++)
    {
        chart.series[i].update({
            type: "line"
        });
    }
});

$('body').on("click", ".areachart", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    for (var i = 0; i < chart.series.length; i++)
    {
        chart.series[i].update({
            type: "area"
        });
    }
});

$('body').on("click", ".columnchart", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    for (var i = 0; i < chart.series.length; i++)
    {
        chart.series[i].update({
            type: "column"
        });
    }
});

$('body').on("click", ".showdata", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    chart.update({
    plotOptions: {
        column: {
            dataLabels: {
                enabled: true
            }
        },
        line: {
            dataLabels: {
                enabled: true
            }
        }
    }
    });
});

$('body').on("click", ".showstackeddata", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    chart.update({
        yAxis: {
        stackLabels: {
            style: {
                color: 'black'
            },
            enabled: true
        }
    }
    });
});

$('body').on("click", ".noshowdata", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    chart.update({
    plotOptions: {
        column: {
            dataLabels: {
                enabled: false
            }
        }
    }
    });
});

$('body').on("click", ".noshowstackeddata", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    chart.update({
        yAxis: {
        stackLabels: {
            style: {
                color: 'black'
            },
            enabled: false
        }
    }
    });
});

$('body').on("click", ".sharedlabel", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    chart.update({

        tooltip: {
            shared: true
        }
    });
});

$('body').on("click", ".stacked", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    chart.update({
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
    });
});

$('body').on("click", ".solo", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    chart.update({
        plotOptions: {
            column: {
                stacking: ''
            }
        },
    });
});

$('body').on("click", ".singlelabel", function() {
    //alert('hi');
    var chart = $("#" + $(this).data('value')).highcharts();
    chart.update({

        tooltip: {
            shared: false
        }
    });
});



$('body').on("click", ".portaloid", function() {
    //alert('hi');
    var pane =$(this).data('value');
    modalLoader('GET', 'dboid/'+pane, 'bigModal', '', '', pane+'-table', '', {});

});

$('body').on("click", ".explode", function() {
    $('#' + $(this).data('value')).html('');
    var route = $(this).data('view') + '/chart';
    var maindiv = 'bigModal';
    $('#bigModal').html('');
    var maindivfull = "#" + $(this).data('original');
    var company_id = $(this).data('company');
    var report = "normal";
    var start = $(maindivfull + " input[name='start']").val();
    var end = $(maindivfull + " input[name='end']").val();
    var start_year = $(maindivfull + " input[name='start_year']").val();
    var end_year = $(maindivfull + " input[name='end_year']").val();
    var report = "normal";

    //alert(start +' ' + start_year+ ' ' +end+ ' '+end_year);
    data = {company_id: company_id, report: report, start: start, end: end, start_year: start_year, end_year: end_year};
    $.ajax
            ({
                url: 'http://vop.eg.methode-emea.local/beta/public/' + route, //'{{ url('') }}/'+route,
                type: 'POST',
                data: data,
                dataType: 'json',
                success: function(data)
                {
                    var count = 0;
                    for (i in data.yaxis) {
                        var seriesName = Object.keys(data.yaxis)[count];
                        var div = 'bigModal-' + seriesName;
                        if (seriesName != 'target') {
                            $('#' + maindiv).prepend($('<div id="' + div + '" class="col-md-6"></div>'));
                            var miniData = {
                                "xaxis": data.xaxis,
                                "yaxis": [data.yaxis[i]]
                            };

                            var option = {
                                "yaxisP": {"format": "€", "title": "Values in Euro", "color": "#ffff"},
                                "yaxisS": {"format": "%", "title": "% of Target", "color": "#ffff"},
                                "type": "column",
                                "title": data.yaxis[i].name,
                                "subtitle": "",
                                "xtitle": ""
                            };
                            artist(div, miniData, option)
                        }
                        count++;
                    }

                }
            });

});

$('body').on("click", ".showrange", function() {
    var targetDiv = $(this).data('value') + '-range';
    var itargetDiv = $(this).data('value') + '-compare';
    $('#' + targetDiv).fadeToggle();
    $('#' + itargetDiv).hide();
});

$('body').on("click", ".showcompare", function() {
    var itargetDiv = $(this).data('value') + '-range';
    var targetDiv = $(this).data('value') + '-compare';
    $('#' + targetDiv).fadeToggle();
    $('#' + itargetDiv).hide();
});



function portalblocker(pane, view, company, power = 'operation') {
    //alert(pane+' '+view+' '+company);
    $('#'+pane).html('');
    var operationmaster="";
    var editpower="";
    if (power != 'secret') {
        operationmaster = "<button style='padding-left:5px; data-original-title='Change Range' class='tooltip-button btn btn-blue-alt showrange' data-value='" + pane + "'>\n\
                        <i class='glyph-icon icon-calendar'></i>\n\
                    </button>\n\
                    <button data-original-title='Compare' class='tooltip-button btn btn-blue-alt showcompare' data-value='" + pane + "'>\n\
                        <i class='glyph-icon icon-flash'></i>\n\
                    </button>\n\
                    <button data-original-title='Explode' class='tooltip-button btn btn-blue-alt explode' data-toggle='modal' data-target='.bs-example-modal-lg' data-company='" + company + "' data-view='" + view + "' data-value='container-" + pane + "-explode' data-original='" + pane + "-range'><i class='glyph-icon icon-th'></i></button>";

        editpower = "";
    }
    if(power == 'operation'){
                editpower = "<div class='example-box-wrapper'>\n\
                    <div class='panel-group' id='accordion'>\n\
                        <div class='panel'>\n\
                            <div class='panel-heading'>\n\
                                <h4 class='panel-title'>\n\
                                    <a data-toggle='collapse' data-parent='#accordion' href='#collapse" + pane + "' class='updateform' data-company='" + company + "' data-view='" + view + "' data-targetdiv='collapsbody" + pane + "'>\n\
                                        Update " + pane + "\n\
                                    </a>\n\
                                </h4>\n\
                            </div>\n\
                            <div id='collapse" + pane + "' class='panel-collapse collapse'>\n\
                                <div class='panel-body' id='collapsbody" + pane + "'></div></div></div></div></div>";
    }
    
    var portalblock = "<div class='example-box-wrapper'>\n\
                    <button data-original-title='Line Chart' class='tooltip-button btn btn-default linechart' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-line-chart'></i>\n\
                    </button>\n\
                    <button data-original-title='Area Chart' class='tooltip-button btn btn-default areachart' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-area-chart'></i>\n\
                    </button>\n\
                    <button data-original-title='Bar Chart' class='tooltip-button btn btn-default columnchart' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-bar-chart'></i>\n\
                    </button>\n\
                    <button data-original-title='Stack Columns' class='tooltip-button btn btn-default stacked' data-company='" + company + "' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-compress'></i>\n\
                    </button>\n\
                    <button data-original-title='Remove Stacking' class='tooltip-button btn btn-default solo' data-company='" + company + "' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-expand'></i>\n\
                    </button>\n\
                    <button data-original-title='Combined data label' class='tooltip-button btn btn-default sharedlabel' data-company='" + company + "' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-chain'></i>\n\
                    </button>\n\
                    <button data-original-title='Single data label' class='tooltip-button btn btn-default singlelabel' data-company='" + company + "' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-chain-broken'></i>\n\
                    </button>\n\
                    <button data-original-title='Show data values' class='tooltip-button btn btn-default showdata' data-company='" + company + "' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-info-circle'></i>\n\
                    </button>\n\
                    <button data-original-title='Hide data values' class='tooltip-button btn btn-default noshowdata' data-company='" + company + "' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-info'></i>\n\
                    </button>\n\
<button data-original-title='Show Stacked data values' class='tooltip-button btn btn-default showstackeddata' data-company='" + company + "' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-exclamation-circle'></i>\n\
                    </button>\n\
<button data-original-title='Hide Stacked data values' class='tooltip-button btn btn-default noshowstackeddata' data-company='" + company + "' data-value='container-" + pane + "'>\n\
                        <i class='glyph-icon icon-exclamation'></i>\n\
                    </button><button data-original-title='Show Matrix' class='tooltip-button btn btn-default portaloid' data-toggle='modal' data-target='.bs-example-modal-lg' data-company='" + company + "' data-value='" + pane + "'>\n\
                        <i class='glyph-icon icon-newspaper-o'></i>\n\
                    </button>"
            + operationmaster + "\n\
                    \n\
                </div>\n\
        <div style='display:none;' id='" + pane + "-range'>\n\
                                <div class='row'>\n\
         <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>Start WK</label>\n\
                <input type='hidden' class='form-control' id='company' name='company' value='" + company + "'>\n\
                <input type='hidden' class='form-control' id='report' name='report' value='range'>\n\
                <input type='number' class='form-control' id='start' name='start' min='1' max='52' required value='1'>\n\
              </div>\n\
    </div>\n\
         <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>Year</label>\n\
                <input type='number' class='form-control' id='start_year' name='start_year' min='2017' max='2018' required value='2018'>\n\
              </div>\n\
    </div>\n\
         <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>End WK</label>\n\
                <input type='number' class='form-control' id='end' name='end' min='1' max='52' required value='12'>\n\
              </div>\n\
    </div>\n\
         <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>Year</label>\n\
                <input type='number' class='form-control' id='end_year' name='end_year' min='2017' max='2018' required value='2018'>\n\
              </div>\n\
    </div>\n\
         <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                    <label>&nbsp;</label>\n\
                    <button class='btn btn-azure btn-range form-control' data-pane='" + pane + "' data-view='" + view + "'>\n\
                        <i class='glyph-icon icon-search '></i>\n\
                    </button>\n\
              </div>\n\
    </div>\n\
                                </div>\n\
                            </div>\n\
                            <div style='display:none;' id='" + pane + "-compare'>\n\
                                <div class='row'>\n\
    <div class='col-md-1 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>Start WK</label>\n\
                <input type='hidden' class='form-control' id='report' name='report' value='compare'>\n\
                <input type='number' class='form-control' id='start' name='start' min='1' max='52' required value='1'>\n\
              </div>\n\
    </div>\n\
    <div class='col-md-1 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>End WK</label>\n\
                <input type='number' class='form-control' id='end' name='end' min='1' max='52' required value='12'>\n\
              </div>\n\
    </div>\n\
    <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>Primary Year</label>\n\
                <input type='number' class='form-control' id='start_year' name='start_year' min='2017' max='2018' required value='2018'>\n\
              </div>\n\
    </div>\n\
    <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>Primary Company</label>\n\
                <select id='pcompany' name='pcompany' class='form-control'>\n\
                        <option value='3' select='selected'>Auto</option>\n\
                        <option value='2'>Hetronic</option>\n\
                </select>\n\
              </div>\n\
    </div>\n\
    <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>Compare to Year</label>\n\
                <input type='number' class='form-control' id='end_year' name='end_year' min='2017' max='2018' required value='2018'>\n\
               </div>\n\
    </div>\n\
    <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                <label for='inputPassword6'>Compare to Company</label>\n\
                <select id='ccompany' name='ccompany' class='form-control'>\n\
                        <option value='3' select='selected'>Auto</option>\n\
                        <option value='2'>Hetronic</option>\n\
                </select>\n\
              </div>\n\
    </div>\n\
         <div class='col-md-2 order-md-2 mb-4'>\n\
               <div class='form-group'>\n\
                    <label>&nbsp;</label>\n\
                    <button class='btn btn-azure btn-compare form-control' data-pane='" + pane + "' data-view='" + view + "'>\n\
                        <i class='glyph-icon icon-search '></i>\n\
                    </button>\n\
              </div>\n\
    </div>\n\
                                </div></div>" + editpower + "\n\
                            <div id='container-" + pane + "' class='active' width='100%'></div>\n\
\n\                         <div class=''><div id='" + pane + "-table' class='active' width='100%'></div></div>\n\
                            <div id='container-" + pane + "-explode' class='row'></div>";
    return portalblock;
    //alert('portalblock');
}


function plotter(div, option, route, data, method = 'POST') {
    $('#'+div).html("<div class='loading-spinner'>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
</div>");
    $.ajax
            ({
                url: 'http://vop.eg.methode-emea.local/beta/public/' + route,
                type: method,
                data: data,
                dataType: 'json',
                success: function(data)
                {
                    artist(div, data, option);
                }
            });
}

function pie_artist(title,route,target,method){
        $('#'+target).html("<div class='loading-spinner'>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
</div>");
    $.ajax
            ({
                url: 'http://vop.eg.methode-emea.local/beta/public/' + route,
                type: method,
                dataType: 'json',
                success: function(data)
                {
                    var chart=Highcharts.chart(target, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        height: 270
    },
    title: {
        text: title
    },
    tooltip: {
        pointFormat: '{series.name}:{point.y}<br> <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            cursor: 'pointer',
            point: {
                events: {
                    click: function () {
                        $("#dummy-modal").trigger("click");
                        var route=this.options.url +'/'+this.options.key;
                        var target=this.options.target;
                        
        modalLoader('get', route, target, '', '', '', 'chosen-select', '')
                        //location.href = 'https://en.wikipedia.org/wiki/' +this.name;
                    }
                }
            }
        },
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },credits: {
            enabled: false
        },
    series: [{
        name: 'Lines',
        colorByPoint: true,
        data: data
    }]
});
                }
            });
}
function artist(target, data, option) {

    var chart = Highcharts.chart(target, {

        chart: {
            type: option.type,
            zoomType: 'xy',
// Edit chart spacing
            spacingBottom: 5,
            spacingTop: 5,
            spacingLeft: 5,
            spacingRight: 5,
        },
        plotOptions: {
            column: {
                stacking: data.xaxis.stacking,
//borderColor: '#303030'

            },
            line: {
        marker: {
            enabled: false
        }
    }
        },
        credits: {
            enabled: false
        },
        title: {
            text: option.title
        },
        subtitle: {
            text: option.subtitle
        },
        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            layout: 'horizontal'
        },
        xAxis: {
            categories: data.xaxis.data,
            labels: {
                x: -10
            },
            title: {
                text: option.xtitle
            }
        },
        yAxis: [{// Primary yAxis
                labels: {
                    format: '{value} ' + option.yaxisP.format,
                    style: {
//color: Highcharts.getOptions().colors[2]
                    }
                },
                title: {
                    text: option.yaxisP.title,
                    style: {
//color: Highcharts.getOptions().colors[2]
                    }
                }


            }, {// Secondary yAxis
                gridLineWidth: 1,
                title: {
                    text: option.yaxisS.title,
                    style: {
//color: Highcharts.getOptions().colors[0]
                    }
                },
                opposite: true,
                labels: {
                    format: '{value} ' + option.yaxisS.format,
                    style: {
//color: Highcharts.getOptions().colors[0]
                    }
                }

            }]
                /*{
                 allowDecimals: false,
                 title: {
                 text: option.yaxis.ytitle
                 }
                 }
                 */,
        responsive: {
            rules: [{
                    condition: {
                        maxWidth: 500,
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        },
                        yAxis: {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -5
                            },
                            title: {
                                text: null
                            }
                        },
                        subtitle: {
                            text: null
                        },
                        credits: {
                            enabled: false
                        }
                    }
                }]
        }
    });
    for (i in data.yaxis) {
        //th+='<th>'
        //var newdata = data.yaxis[i].data;
        //newdata.sort(function(a, b){return b-a});
        chart.addSeries({
            name: data.yaxis[i].name,
            yAxis: data.yaxis[i].yaxis,
            data: data.yaxis[i].data,
            type: data.yaxis[i].type,
            stack: data.yaxis[i].stack,
            color: data.yaxis[i].color
        });
    }
}
function column_artist(title,route,target,method){
        $('#'+target).html("<div class='loading-spinner'>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
</div>");
    $.ajax
            ({
                url: 'http://vop.eg.methode-emea.local/beta/public/' + route,
                type: method,
                dataType: 'json',
                success: function(data)
                {
                    var chart=Highcharts.chart(target, {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'column',
        height: 270
    },
    title: {
        text: title
    },
    xAxis: {
        categories: [
            'Headcount',
        ],
        crosshair: true
    },
    tooltip: {
        pointFormat: '{series.name}:{point.y}'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },credits: {
            enabled: false
        },
    series: data
});
                }
            });
}