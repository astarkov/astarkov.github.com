$(function() {
  if($(window).width()<980){
     //touch-menu
     var touch = $('.right-menu');
     var menu = $('.top-nav');
     $(touch).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
    });

     $(window).resize(function() {
      var wid = $(window).width();
      if(wid > 980 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
   }

  /////////////*Animate and OnScreen*////////////
  $('.spy-fox').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     $(this).css("opacity", "1" ).addClass('animated  bounceInLeft');
     $('.form-tutoring').css("opacity", "1" ).addClass('animated bounceInRight');
   },
   doOut: function() {
    // $(this).css("opacity", "0" );
    // $(this).removeClass('animated bounceInLeft');
   },
   tolerance: 0,
   throttle: 100,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});
  $('.item-choose.one').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     $(this).css("opacity", "1" ).addClass('animated fast bounceInLeft');
     $('.item-choose.two').css("opacity", "1" ).addClass('animated fast bounceInUp');
     $('.item-choose.three').css("opacity", "1" ).addClass('animated fast bounceInRight');
   },
   doOut: function() {
    // $(this).css("opacity", "0" );
    // $(this).removeClass('animated bounceInLeft');
   },
   tolerance: 0,
   throttle: 100,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});
    $('.our-state li').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     // $(this).css("opacity", "1" ).addClass('animated fast flipInX');
     $(this).css("opacity", "1" ).addClass('animated fast zoomIn');
   },
   doOut: function() {
    // $(this).css("opacity", "0" );
    // $(this).removeClass('animated bounceInLeft');
   },
   tolerance: 0,
   throttle: 100,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});
        $('.item-writers').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     $(this).css("opacity", "1" ).addClass('animated fast zoomIn');
   },
   doOut: function() {
    // $(this).css("opacity", "0" );
    // $(this).removeClass('animated bounceInLeft');
   },
   tolerance: 0,
   throttle: 100,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});


  $('.owl').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: false,
    lazyLoad: true,
    autoplay: true,
     margin:20,
     dots: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  })



});

