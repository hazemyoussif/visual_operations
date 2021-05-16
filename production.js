
            $('body').on("click", ".sf_stat", function() {
            var id = $(this).data('id');
            var level = $(this).data('level');
            var name = $(this).data('name');
            var period = 'w';
            $('#mainDiv').html('');
            
        var pane = "mainDiv";
          var c='container-'+pane;
    c=c+'-explode';
        $("#" + pane).append(portalblocker(pane, '', '', power = "notoperational"));
        var route = 'hr/sfattendance/'+level;
        route = route +'/';
        route = route+id+'/'+period;
        $('.btn[data-value="'+c+'"]').attr('data-route', route);
        var option = {
            "yaxisP": {"format": "Count", "title": "Attendance", "color": "#ffff"},
            "yaxisS": {"format": "€", "title": "Sales", "color": "#ffff"},
            "type": "column",
            "title": name+ " Headcount & Absenteeism",
            "subtitle": "",
            "xtitle": ""
        };
        plotter('container-' + pane, option, route, '', 'GET');
        
        });

    $('body').toggleClass('closed-sidebar');
        $('body').on("click",".breakdownlog",function(){
        var sfid=$(this).data('sfid');
        modalLoader('get', 'production-plan/breakdown/view/'+sfid, 'mainDiv', '', '', 'Breakdown-log', 'chosen-select', '');
    });
            $('body').on("click",".eBreakdown",function(){
        var v = $(".bs-example-modal-lg").css("display");
        //alert(v);
        if(v != "block"){
            $("#dummy-modal").trigger("click");
        }
            $('#bigModal').html('<div id="bigModal-form"></div><br><div id="bigModal-result"></div>');
            var route='production-plan/breakdown/'+$(this).data('id')+'/edit';
        modalLoader('get', route, 'bigModal-form', 'Post Breakdown', 'bigModalTitle', '', 'chosen-select', '');
    });
    $("body").on('click','.update-breakdown',function(){

       // e.preventDefault();
        var breakdown_id = $(this).data('id');
        var comment = $("textarea[name=comment]").val();
        var status = $("select[name=status]").val();
        //alert(name);
        if(breakdown_id != '' && comment!='' && status!=''){
            var formData = new FormData($("#ubreakdown")[0]);
            //alert(formData);
        $.ajax({

           type:'POST',

           url:'{{ url('') }}/production-plan/breakdown/update',

           data:formData,
           contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.postplan').attr("disabled","disabled");
 
            },

           success:function(data){
            modalLoader('get', 'production-plan/breakdown/'+breakdown_id+'/edit', 'bigModal-form', 'Update Breakdown', 'bigModalTitle', '', 'chosen-select', '');
             $('#bigModal-result').prepend(data); 
             $('.chosen-select').chosen();
             //
             //alert(data);
              

           },
           error: function(jqXHR, textStatus, errorThrown) {
            }
        });
    }else{
        var msg = '<div class="alert alert-warning">\n\
                        <div class="bg-orange alert-icon">\n\
                            <i class="glyph-icon icon-warning"></i>\n\
                        </div>\n\
                        <div class="alert-content">\n\
                            <h4 class="alert-title">All Input Fields are mandatory</h4>\n\
                            <p>Kindly fill the missing fields</p>\n\
                        </div>\n\
                    </div>';
                               $('#bigModal-result').prepend(msg); 
    }


	});
    $("body").on('click','.post-breakdown',function(){

       // e.preventDefault();
        var shopfloor = $(this).data('sfid');
        var line_id = $("select[name=line_id]").val();
        var breakdown_id = $("select[name=operator_id]").val();
        var details = $("textarea[name=details]").val();
        //alert(name);
        if(line_id != '' && breakdown_id!='' && details!=''){
            var formData = new FormData($("#breakdown")[0]);
            //alert(formData);
        $.ajax({

           type:'POST',

           url:'{{ url('') }}/production-plan/breakdown/store',

           data:formData,
           contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.postplan').attr("disabled","disabled");
 
            },

           success:function(data){
            modalLoader('get', 'production-plan/breakdown/create/'+shopfloor, 'bigModal-form', 'Post Breakdown', 'bigModalTitle', '', 'chosen-select', '');
             $('#bigModal-result').prepend(data); 
             $('.chosen-select').chosen();
             //
             //alert(data);
              

           },
           error: function(jqXHR, textStatus, errorThrown) {
            }
        });
    }else{
        var msg = '<div class="alert alert-warning">\n\
                        <div class="bg-orange alert-icon">\n\
                            <i class="glyph-icon icon-warning"></i>\n\
                        </div>\n\
                        <div class="alert-content">\n\
                            <h4 class="alert-title">All Input Fields are mandatory</h4>\n\
                            <p>Kindly fill the missing fields</p>\n\
                        </div>\n\
                    </div>';
                               $('#bigModal-result').prepend(msg); 
    }


	});
        $('body').on("click",".cBreakdown",function(){
        var v = $(".bs-example-modal-lg").css("display");
        //alert(v);
        if(v != "block"){
            $("#dummy-modal").trigger("click");
        }
            $('#bigModal').html('<div id="bigModal-form"></div><br><div id="bigModal-result"></div>');
            var route='production-plan/breakdown/create/'+$(this).data('sfid');
        modalLoader('get', route, 'bigModal-form', 'Post Breakdown', 'bigModalTitle', '', 'chosen-select', '');
    });
    
    $('body').on("click","svg.floor > *",function(){
        $("svg.floor > *").removeClass("on");
        $(this).addClass("on");
    });
    $('body').on("click",".popupplan",function(){
        var route= 'production-plan/'+$(this).data('id')+'/show'
        modalLoader('get', route, 'bigModal', 'Production Planning', 'bigModalTitle', 'plans-log', 'chosen-select', '');
    });
    $('body').on("click",".visual",function(){
            $("#mainDiv").empty();
            var sfid=$(this).data('sfid');
    $("#mainDiv").html("<div class='loading-spinner'>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
                            <i class='bg-blue'></i>\n\
</div>");
    $.ajax
            ({
            url: '{{ url('') }}/' + 'production-plan/line/visual/'+sfid,
                    type: 'get',
                    dataType: 'html',
                    success: function(data)
                    {
                    $("#mainDiv").html(data);
                    pie_artist('{{date('Y-m-d')}} Shift Planning' ,'production-plan/daily-plan/'+sfid,'daily-plan','get');
                    pie_artist('{{date('Y-m-d')}} Current Shift' ,'production-plan/current-plan/'+sfid,'current-plan','get');
                    column_artist('{{date('Y-m-d')}} Shift Capacity' ,'production-plan/current-capacity/'+sfid,'daily-capacity','get');
                    var option={ 
                            "yaxisP":{"format":"","title":"","color":"#ffff"},
                            "yaxisS":{"format":"","title":"","color":"#ffff"},
                            "type":"column",
                            "title":'WK-{{date('W',strtotime('+1day',strtotime('last Sunday')))}} -  Breakdowns',
                            "subtitle":"",
                            "xtitle":""
                        };
                        plotter('weekly-mhc', option, 'production-plan/breakdown/visual/'+sfid, '','get')
    }
            });
        //modalLoader('get', 'production-plan/line/visual/1', 'mainDiv', '', '', 'plans-log', 'chosen-select', '');
    });
    $('body').on("click",".productionlog",function(){
        var sfid=$(this).data('sfid');
        modalLoader('get', 'production-plan/log/'+sfid, 'mainDiv', '', '', 'plans-log', 'chosen-select', '');
    });
    $('body').on("click",".line-poly",function(){
        //var code=$(this).data('code');
        $("#dummy-modal").trigger("click");
        var route='production-plan/line/'+$(this).data('id')+'/show';
        var cap_route='production-plan/line/'+$(this).data('id')+'/cap';
        //modalLoader('get', cap_route, 'line-capacity', '', '', '', 'chosen-select', '');
        modalLoader('get', route, 'bigModal', '', '', '', 'chosen-select', '');
        //alert(code);
    });
    $('body').on("click",".allplans",function(){
        var sfid=$(this).data('sfid');
        modalLoader('get', 'production-plan/line/'+sfid, 'mainDiv', '', '', '', 'chosen-select', '');
    });
    $('body').on("click",".detailedplans",function(){
        var sfid=$(this).data('sfid');
        modalLoader('get', 'production-plan/line/detailed/'+sfid, 'mainDiv', '', '', '', 'chosen-select', '');
    });
    $('body').on("change","#lineselect",function(){
        var route='production-plan/line/'+$(this).val()+'/show'
        modalLoader('get', route, 'mainDiv', '', '', '', 'chosen-select', '');
    });
    $('body').on("click",".showswap",function(){
        var v = $(".bs-example-modal-lg").css("display");
        if(v != "block"){
            //$(".bs-example-modal-lg").css("display","block");
            $("#dummy-modal").trigger("click");
        }
            var route='production-plan/'+$(this).data('operator')+'/'+$(this).data('plan')+'/swap';
        modalLoader('get', route, 'bigModal', 'Production Planning', 'bigModalTitle', '', 'chosen-select', '');
    });
    $('body').on("click",".showAddops",function(){
        var v = $(".bs-example-modal-lg").css("display");
        if(v != "block"){
            $("#dummy-modal").trigger("click");
        }
            $('#bigModal').html('<div id="bigModal-form"></div><br><div id="bigModal-result"></div>');
            var route='production-plan/'+$(this).data('plan')+'/add';
        modalLoader('get', route, 'bigModal-form', 'Production Planning', 'bigModalTitle', '', 'chosen-select', '');
    });
    
    $('body').on("click",".create-production-plan",function(){
        var shoopfloor=$(this).data('sfid');
        $('#bigModal').html('<div id="bigModal-form"></div><br><div id="bigModal-result"></div>');
        modalLoader('get', 'production-plan/create/'+shoopfloor, 'bigModal-form', 'Production Planning', 'bigModalTitle', '', 'chosen-select', '');
    });
    
        $('body').on("click",".create-overtime-request",function(){
        var shoopfloor=$(this).data('sfid');
        $('#bigModal').html('<div id="bigModal-form"></div><br><div id="bigModal-result"></div>');
        modalLoader('get', 'production-plan/ot/create/'+shoopfloor, 'bigModal-form', 'Production Planning', 'bigModalTitle', '', 'chosen-select', '');
    });
    
    $("body").on('click','.post-production-plan',function(){

       // e.preventDefault();
        var shopfloor = $(this).data('sfid');
        var line_id = $("select[name=line_id]").val();
        var shift_id = $("select[name=shift_id]").val();
        var operator_id = $("select[name=operator_id]").val();
        var start = $("input[name=start]").val();
        var end = $("input[name=end]").val();
        //alert(name);
        if(line_id != '' && shift_id!='' && operator_id!='' && start!='' && end!='' ){
            var formData = new FormData($("#production-plan")[0]);
            //alert(formData);
        $.ajax({

           type:'POST',

           url:'{{ url('') }}/production-plan/store',

           data:formData,
           contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.postplan').attr("disabled","disabled");
 
            },

           success:function(data){
            modalLoader('get', 'production-plan/create/'+shopfloor, 'bigModal-form', 'Production Planning', 'bigModalTitle', '', 'chosen-select', '');
             $('#bigModal-result').prepend(data); 
             $('.chosen-select').chosen();
             //
             //alert(data);
              

           },
           error: function(jqXHR, textStatus, errorThrown) {
            }
        });
    }else{
        var msg = '<div class="alert alert-warning">\n\
                        <div class="bg-orange alert-icon">\n\
                            <i class="glyph-icon icon-warning"></i>\n\
                        </div>\n\
                        <div class="alert-content">\n\
                            <h4 class="alert-title">All Input Fields are mandatory</h4>\n\
                            <p>Kindly fill the missing fields</p>\n\
                        </div>\n\
                    </div>';
                               $('#bigModal-result').prepend(msg); 
    }


	});
        
    $("body").on('click','.request-overtime',function(){

       // e.preventDefault();
        var shopfloor = $(this).data('sfid');
        var line_id = $("select[name=line_id]").val();
        var shift_id = $("select[name=shift_id]").val();
        var operator_id = $("select[name=operator_id]").val();
        var date = $("input[name=date]").val();
        var hours = $("input[name=hours]").val();
        var details = $("textarea[name=details]").val();
        //alert(name);
        if(line_id != '' && shift_id!='' && operator_id!='' && date!='' && hours!='' && details!=''){
            var formData = new FormData($("#production-plan")[0]);
            //alert(formData);
        $.ajax({

           type:'POST',

           url:'{{ url('') }}/production-plan/ot/store',

           data:formData,
           contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.postplan').attr("disabled","disabled");
 
            },

           success:function(data){
            modalLoader('get', 'production-plan/ot/create/'+shopfloor, 'bigModal-form', 'Production Planning', 'bigModalTitle', '', 'chosen-select', '');
             $('#bigModal-result').prepend(data); 
             $('.chosen-select').chosen();
             //
             //alert(data);
              

           },
           error: function(jqXHR, textStatus, errorThrown) {
            }
        });
    }else{
        var msg = '<div class="alert alert-warning">\n\
                        <div class="bg-orange alert-icon">\n\
                            <i class="glyph-icon icon-warning"></i>\n\
                        </div>\n\
                        <div class="alert-content">\n\
                            <h4 class="alert-title">All Input Fields are mandatory</h4>\n\
                            <p>Kindly fill the missing fields</p>\n\
                        </div>\n\
                    </div>';
                               $('#bigModal-result').prepend(msg); 
    }


	});
        
    $("body").on('click','.post-production-plan-addops',function(){

            var formData = new FormData($("#production-plan-addops")[0]);
            var route='production-plan/'+$(this).data('plan')+'/add';
            var update_route='production-plan/'+$(this).data('plan')+'/show';
            var update_div='plan-div-'+$(this).data('plan');
        $.ajax({

           type:'POST',

           url:'{{ url('') }}/production-plan/addops',

           data:formData,
           contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.postplan').attr("disabled","disabled");
 
            },

           success:function(data){
            modalLoader('get', route, 'bigModal-form', 'Production Planning', 'bigModalTitle', '', 'chosen-select', '');
             $('#bigModal-result').prepend(data); 
             $('.chosen-select').chosen();
            modalLoader('get', update_route, update_div, '', '', '', 'chosen-select', '');

           },
           error: function(jqXHR, textStatus, errorThrown) {
            }
        });



	});
        
        $("body").on('click','.post-production-plan-swap',function(){

        var nPlan_id = $("select[name=nPlan_id]").val();
        var cPlan_id = $("input[name=cPlan_id]").val();
        var update_route_c='production-plan/'+cPlan_id+'/show';
        var update_div_c='plan-div-'+cPlan_id;
        var update_route_n='production-plan/'+nPlan_id+'/show';
        var update_div_n='plan-div-'+nPlan_id
        var formData = new FormData($("#production-plan-swap")[0]);
            //alert(formData);
        $.ajax({

           type:'POST',

           url:'{{ url('') }}/production-plan/swap',

           data:formData,
           contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.postplan').attr("disabled","disabled");
 
            },

           success:function(data){
             $('#bigModal').prepend(data); 
             $('.chosen-select').chosen();
             modalLoader('get', update_route_c, update_div_c, '', '', '', 'chosen-select', '');
             if(nPlan_id!=null){
             modalLoader('get', update_route_n, update_div_n, '', '', '', 'chosen-select', '');
         }

             //alert(data);
              

           },
           error: function(jqXHR, textStatus, errorThrown) {
            }
        });



	});
