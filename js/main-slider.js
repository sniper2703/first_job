$(document).ready(function(){
  $('.gallery__slider').slick({
    infinite:false,
    waitForAnimate:false,
    rows:2,
    slidesPerRow:3,
    appendArrows:$('.gallery__slider-arrow'),
  });

  $('.editions__slider').slick({
    infinite:false,
    waitForAnimate:false,
    slidesToShow:3,
    appendArrows:$('.editions__slider-arrow'),
  });

  $('.partners-slider').slick({
    infinite:false,
    waitForAnimate:false,
    slidesToShow:3,
  });

  $('.gallery__.slider').on(`init reInit`, function(event, slick) {
    $('.counter').text(1 + ' / ' + slick.slideCount);
  })
  $('.editions__slider').on(`init reInit`, function(event, slick) {
    $('.editions__counter').text(1 + ' / ' + slick.slideCount);
  })

  $('.gallery__slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
  })
  $('.editions__slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
    $('.editions__counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
  })
});