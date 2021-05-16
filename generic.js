    $('body').on('click','.empdaystat',function(){
            var url='leadereye/empdaystat/'+$(this).data('id')+'/'+$(this).data('day');
            modalLoader('GET', url, 'bigModal', $(this).data('day')+' Statistics', 'bigModalTitle', '', '', '')
            });   