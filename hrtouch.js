

$('body').on("click", "#hrtouchclose", function() {
    var id=$(this).data('id');
    var div="ticket-"+id;
    var route="/hrtouch/task/close/"+id;
    modalLoader('GET', route, div, '', '', '', '', '');
}); 

$('body').on("change", "#oid_id", function() {
    var val=this.value;
    var route="hrtouch/oidsla/"+val;
    modalLoader('GET', route, 'issue', '', '', '', '', '');
}); 

$('body').on("change", "#sla_id", function() {
    var val=this.value;
    var route="hrtouch/sla/"+val;
    modalLoader('GET', route, 'sla', '', '', '', '', '');
}); 

$('body').on('click', '#hrrequest-btn', function(){
    modalLoader('GET', 'hrtouch/index', 'bigModal', 'HR-InTouch', 'bigModalTitle', '', '', '');
});

$('body').on('click', '.hrnewticket-btn', function(){
    modalLoader('GET', 'hrtouch/create', 'mainDiv', '', '', '', '', '');
});

$('body').on('click', '.hrtickets-btn', function(){
    modalLoader('GET', 'hrtouch/mytickets', 'mainDiv', '', '', '', '', '');
});

$('body').on('click', '.manage-btn', function(){
    modalLoader('GET', 'hrtouch/manage', 'mainDiv', '', '', '', '', '');
});

$('body').on('click', '.manage-edit', function(){
    var sla_id = $("select[name=sla_id]").val();
    var user_id = $("select[name=user_id]").val();
    var action_id = $("select[name=action_id]").val();
    if(sla_id!='' && user_id!='' && action_id!=''){
        $('.manage-edit').attr("disabled","disabled");
        var url='hrtouch/manage/edit/'+sla_id+'/'+user_id+'/'+action_id;
        //alert(url);
        modalLoader('GET', url, 'mainDiv', '', '', '', '', '');
    }else{
        alert('Missing Data');
    }
    
});

$('body').on('click', '.createTicket', function(){
    
    var name = $("input[name=name]").val();

        var sla_id = $("select[name=sla_id]").val();
        var ticket_for = $("select[name=ticket_for]").val();
        var description = $("input[name=description]").val();
        var url=$('#newtask').data('url');
        //alert(name);
        if(sla_id != '' && description!='' && ticket_for!=''){
            //alert(ticket_for);
            var formData = new FormData($("#newtask")[0]);
            //alert(formData);
        $.ajax({

           type:'POST',

           url:url,

           data:formData,
           contentType: false,
            cache: false,
            processData:false,
            beforeSend: function(){
                $('.createTicket').attr("disabled","disabled");
 
            },

           success:function(data){
               
             $('#mainDiv').html(data); 

           },
           error: function(jqXHR, textStatus, errorThrown) {
            }
        });
    }else{
        alert('Missing Data');
    }
});