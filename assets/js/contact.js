$(function(){
    
    
    if ($.fn.select2){
        $(".select2").select2({
            minimumResultsForSearch: 'Infinity',
            containerCssClass: 'select2-container-custom',
            dropdownCssClass: 'select2-dropdown-custom'
        });
    }


    
    $('.validate').validate({
        errorPlacement: function(error, element) {
            if (element.attr('type') == 'radio' || element.attr('type') == 'checkbox') {
                error.appendTo(element.parent().parent());
            }
            else {
                error.appendTo(element.parent());
            }
        },
        
    });
    
    $(document).on('submit', '#contact-form', function(e){
        e.preventDefault();
        
        var buttonCopy = $('#contact-form button').html(),
            sendingMessage = 'Loading...',
            errorMessage = 'Error Sending. Try Again Later',
            okMessage = 'Email Sent Successfully';
            
        $('#contact-form button').html("<i class='icon-Mail-Send'></i> " + sendingMessage);
        
        $.ajax({
            url: $('#contact-form').attr('action'),
            type: 'post',
            dataType: 'json',
            data: $(this).serialize(),
            success: function(data){
                if (data == true){
                    $('#contact-form button').html("<i class='icon-Paper-Plane'></i> " + okMessage);
                    $('#contact-form')[0].reset();
                } else {
                    $('#contact-form button').html("<i class='icon-Danger'></i> " + errorMessage);
                }
                
                setTimeout(function(){
                    $('#contact-form button').html(buttonCopy);
                }, 3000);
            },
            error: function(xhr, err){
                $('#contact-form button').html("<i class='icon-Danger'></i> " + errorMessage);
                
                setTimeout(function(){
                    $('#contact-form button').html(buttonCopy);
                }, 3000);
            }
        });
    });
});