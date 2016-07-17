$(function() {
  //touch-menu
  var touch = $('.shell-header-nav-toggle'),
      menu = $('.top-nav');
  $(touch).on('click', function(e) {
   menu.slideToggle();
   $(this).toggleClass("opened");
 });

  $(window).resize(function(){
    var wid = $(window).width();
    if(wid > 850 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});
/*top-nav-menu*/
$(function() {
   $(".top-nav>li>a").on('click', function(e) {
    var parent =  $(this).parent();
    parent.siblings('li').find('.shell-header-dropdown-content').removeClass("active");
    parent.find('.shell-header-dropdown-content').toggleClass('active');
    parent.siblings('li').find("a").removeClass("active");
    $(this).toggleClass("active");
  });
});


///////////////////*Validation Form*///////////////////
var form = $('.signup_form'),
errorTxt = form.find('span.error');
var showError = function(){
  var error = false;
  errorTxt.hide();

  form.find('input').each(function() {
    var pattern = $(this).attr('pattern'),
    value = $(this).val(),
    type = $(this).attr('type'),
    currentError = $(this).parents('p').find('span.error');

    if (value == '') {
      currentError.show();
      error = true;
    } else if (!value.match(pattern)) {
      switch(type) {
        case 'text':
        currentError.text('Введите валидное имя').show();
        error = true;
        break;
        case 'email':
        currentError.text('Введите валидный email').show();
        error = true;
        break;
   /*     case 'password':
        currentError.text('Введите валидный номер').show();
        error = true;
        break;*/
      }
    }
  });

  return error;
};

form.submit(function(e) {
  var validationError = showError();

  if (!validationError) {
    var firstName = form.find('input[name="firstname"]').val(),
    email = form.find('input[name="email"]').val(),
    password = form.find('input[name="password"]').val();

    alert ("Данные отправленные на сервер: " + "Имя: " + firstName + " E-mail: " +  email + " password: " + password)

    form.find('input').val('');
  }

  return false;
});
// menu -  .top-nav.opened
// click - .shell-header-nav-toggle.opened

/*top menu*/



  // $('.owl').owlCarousel({
  //   loop: true,
  //   items: 1,
  //   nav: true,
  //   navText: false,
  //   lazyLoad: true,
  //   autoplay: true,
  //   autoplayTimeout: 2000,
  //   autoplayHoverPause: true
  // })

  // $('.grid').isotope({
  //   masonry: {
  //     itemSelector: '.grid-item',
  //     columnWidth: '.grid-sizer',
  //     gutter: '.gutter-sizer',
  //     isFitWidth: true
  //   }
  // });

  // $('.masonry_links').on('click','div',function(){
  //   filterValue = $(this).attr('data-filter');
  //   $('.grid').isotope({
  //     filter: filterValue
  //   });
  // });



// shell-search
$(function() {

  var shellSearch = $('.header-actions');

  $('.shell-header-toggle-search').click(function(){
    shellSearch.toggleClass('show');
  });

/*  shellSearch.click(function(e){
    if( $(e.target).is($(this)) || $(e.target).is('.close') ) {
      $(this).removeClass('show');
    } 
  });*/

  //close search when clicking the 'esc' keyboard button
  $(document).keyup(function(e){
    if(e.which=='27'){
      $('.header-actions').removeClass('show');
    }
  });

});


// modal
$(function() {

  modal = $('.modal');

  $('.news_old').click(function(){
    modal.addClass('is-visible');
  });

  modal.click(function(e){
    if( $(e.target).is($(this)) || $(e.target).is('.close') ) {
      $(this).removeClass('is-visible');
    } 
  });

  //close modal when clicking the 'esc' keyboard button
  $(document).keyup(function(e){
    if(e.which=='27'){
      $('.modals').removeClass('is-visible');
    }
  });

});

// $(window).scroll(function() {

//   $('.read_more').each(function(){

//     var posTop = $(this).offset().top;
//     // console.log(posTop);
//     var topOfWindow = $(window).scrollTop()+(window.innerHeight);
//     console.log(topOfWindow);

//     if (posTop < topOfWindow) {
//       $(this).fadeTo('fast', 0.2);
//     }

//   });

// });

