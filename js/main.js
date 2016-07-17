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


// shell-search
$(function() {

  var shellSearch = $('.header-actions');

  $('.shell-header-toggle-search').click(function(){
    shellSearch.toggleClass('show');
  });


  //close search when clicking the 'esc' keyboard button
  $(document).keyup(function(e){
    if(e.which=='27'){
      $('.header-actions').removeClass('show');
    }
  });

});

