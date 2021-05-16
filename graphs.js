
function chartfairy(chartType,div,route, data, method = 'get') {
    $('#'+div).html("Loading .....");
    $.ajax
            ({
                url: 'http://vop.eg.methode-emea.local/beta/public/' + route,
                type: method,
                data: data,
                dataType: 'json',
                success: function(data)
                {
                    switch(chartType){
                        case 'pareto':
                            drawPareto(div, data);
                            break;
                            
                        case 'pie':
                            drawPie(div, data);
                            break;  
                        
                        case 'stack':
                            drawStack(div, data);
                            break;
                        
                        case 'bubble':
                            drawBubbles(div, data);
                            break; 
                    }
                    
                }
            });
}


