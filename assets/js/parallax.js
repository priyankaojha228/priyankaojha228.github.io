$(function(){
    
    
    $(window).smartload(function(){
        if (jQuery.browser.mobile === false){
            
            var s = skrollr.init({
                forceHeight: false
            });

            
            s.refresh($('.parallax'));
        }
    });
});