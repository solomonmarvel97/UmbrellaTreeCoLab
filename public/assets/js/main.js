$(document).ready(function() {    

    //MOB MENU EVENT
    $('#mob-toggle').on('click', function(e) {
        $('#mob-menu').toggleClass('showMob-nav-width');
        e.preventDefault();
    });

    $('#mob-toggle').on('click', function(e) {
        $('#toogle1').toggleClass('toggle1'); 
        $('#toogle2').toggleClass('toggle2'); 
    });

    $('.closelinkHold').on('click', function(e) {
        $('#mob-menu').toggleClass('showMob-nav-width'); 
        $('#toogle1').toggleClass('toggle1'); 
        $('#toogle2').toggleClass('toggle2'); 
    });
    
    
    $('.owl-carousel').owlCarousel({
        center: true,
        loop:false,
        margin:60,
        dots: false,
        rtl:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        // animateOut: 'fadeOut',
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                margin:0,
            },
            480:{
                items:1,
                nav:true
            },
            1024:{
                items:2,
                nav:true,
                loop:true
            }
        }
    })

});
