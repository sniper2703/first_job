$('.header__burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('header__burger_active');
  $('.header__nav').toggleClass('header__nav_active');
});