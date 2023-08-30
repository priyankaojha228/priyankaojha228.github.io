$(function(){

    
    $(document).ready(function() {
        if ($.fn.jpreLoader){
            $('body').jpreLoader({
                showPercentage: false,
                loaderVPos: '50%'
            });
        }
    });
    

    
    $(window).smartload(function(){
        if ($.fn.matchHeight){
            $('.match-height').matchHeight();
        }
    });
    
    
    
    function setResizeContent() {
        var minHeight = $(window).height();
        $('.full-screen').css('min-height', minHeight);
    }
    
    setResizeContent();

    $(window).smartresize(function(){
        setResizeContent();
    });

    
    
    $('body').on('activate.bs.scrollspy', function(){
        $('.page-scroll.dropdown > .dropdown-toggle').each(function(){
            $(this).attr('data-target', '#');
        });
    });
    
    
    
    var pageScroll = function(){
        $('.page-scroll > a').bind('click', function(e){
            e.preventDefault();
            
            var anchor = $(this),
            href = anchor.attr('href'),
            offset = $('body').attr('data-offset');
            
            $('html, body').stop().animate({
                scrollTop: $(href).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');
            
            
            if(!$(this).parent().hasClass('dropdown')){
                $('.berg-collapse').collapse('hide');
            }
        });
    };
    
    pageScroll();
    
    
   
    var stickyMenu = function(){
        var ww = Math.max($(window).width(), window.innerWidth),
        nav = $('.navbar.navbar-fixed-top');

        if ($.fn.unstick){
            nav.unstick();
        }
        
        if ($.fn.sticky && ww >= 992){
            nav.sticky({topSpacing: 0});
        }
    };
    
    stickyMenu();
    
    
    $(window).smartresize(function(){
        stickyMenu();
    });
    
    
    
    var toggleNavbarMethod = function(){
        var ww = Math.max($(window).width(), window.innerWidth),
        dropdown = $('.navbar .dropdown');
        
        if (ww >= 992){
            dropdown.on('mouseover', function(){
                if (!$(this).hasClass('open')){
                    $(this).addClass('open');
                }
            }).on('mouseout', function(){
                if ($(this).hasClass('open')){
                    $(this).removeClass('open');
                }
            });
        }
        else {
            dropdown.off('mouseover').off('mouseout');
        }
    };
    
    toggleNavbarMethod();
    
    
    $(window).smartresize(function(){
        toggleNavbarMethod();
    });
    
    
    
    $('.dropdown-menu').click(function(e){
        e.stopPropagation();
    });
    
 
    
    if ($.fn.magnificPopup){
        $('.portfolio').magnificPopup({
            delegate: 'a.zoom',
            type: 'image',
            fixedContentPos: false,

            
            removalDelay: 300,

            
            mainClass: 'mfp-fade',

            gallery: {
                enabled: true,
                preload: [0,2],
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                tPrev: 'Previous Project',
                tNext: 'Next Project'
            }            
        });
    }
    
    
    
    var columnChart = function (){
        $('.column-chart').find('.item-progress').each(function(){
            var itemProgress = $(this);
            var itemProgressHeight = $(this).parent().height() * ($(this).data('percent') / 100);
            
            itemProgress.css('height', itemProgressHeight);
        });
    };
    
    
    $(window).smartload(function(){
        columnChart();
    });
    
    
    
    var resumeCollapse = function (){
        var ww = Math.max($(window).width(), window.innerWidth),
        workItem = $('.collapse', '#work'),
        jobItem = $('.collapse', '#job'),
        educationItem = $('.collapse', '#education');
        
        if (ww < 768){
            workItem.collapse('show');
            educationItem.collapse('show');
            jobItem.collapse('show');
        }
        else{
            workItem.not(':first').collapse('hide');
            educationItem.not(':first').collapse('hide');
            jobItem.not(':first').collapse('hide');
        }
    };
    
    
    $(window).smartload(function(){
        resumeCollapse();
    });
    
    
    $(window).smartresize(function(){
        resumeCollapse();
    });
    
    
    
    $(window).smartload(function(){
        if ($.fn.flexslider){
            var flex = $('.flexslider.references');
    
            flex.flexslider({
                selector: ".slides > .item",
                manualControls: ".flex-control-nav li",
                directionNav : false,
                slideshowSpeed: 20000,
                after: function(slider){
                    if (!slider.playing) {
                        slider.play();
                    }
                }
            }); 
        }
    });
    
    $('a.flex-prev').on('click', function(e){
        e.preventDefault();
        $('.flexslider').flexslider('prev');
    });
    
    $('a.flex-next').on('click', function(e){
        e.preventDefault();
        $('.flexslider').flexslider('next');
    });
    
    
    
    var circleChart = function (){
        $('.circle-chart').find('.item-progress').each(function(){
            var item = $(this),
            maxHeight = 108,
            newHeight = maxHeight * ($(this).data('percent') / 100);
            
            // Only animate elements when using non-mobile devices    
            if (jQuery.browser.mobile === false){
                item.one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            height: newHeight
                        },1500);
                    }
                });
            }
            else{
                item.css('height', newHeight);
            }
        });
    };
    
    // Call circleChart() when window is loaded.
    $(window).smartload(function(){
        circleChart();
    });
    
    
    
    var barChart = function (){
        $('.bar-chart').find('.item-progress').each(function(){
            var item = $(this),
            percent = $(this).prev(),
            newWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            
            // Only animate elements when using non-mobile devices    
            if (jQuery.browser.mobile === false){
                item.one('inview', function(isInView) {
                    if (isInView){
                        // Animate item
                        item.animate({
                            width: newWidth
                        },1500);
                        
                        percent.animate({
                            left: newWidth - percent.width()
                        },1500);
                    }
                });
            }
            else{
                item.css('width', newWidth);
                percent.css('left', newWidth - percent.width());
            }
        });
    };
    
    // Call barChart() when window is loaded.
    $(window).smartload(function(){
        barChart();
    });
    
    // Call barChart() when window is resized.
    $(window).smartresize(function(){
        barChart();
    });
    
    
    
    var counter = function (){
        var number = $('.milestones').find('.number');
        
        if ($.fn.countTo){
            number.countTo({
                speed: 3000
            });
        }
    };
    
    if (jQuery.browser.mobile === false){
        var number = $('.milestones .number');
        
        number.one('inview', function(isInView) {
            if (isInView){
                counter();
            }
        });
    }
    else{
        counter();
    }
});

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #31889F }";
    document.body.appendChild(css);
};