$(document).ready(function(){
  $('.gallery__slider').slick({
    infinite:false,
    waitForAnimate:false,
    rows:2,
    slidesPerRow:3,
    appendArrows:$('.gallery__slider-arrow'),
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesPerRow: 2,
        }
      },
    ]
  });

  $('.editions__slider').slick({
    infinite:false,
    waitForAnimate:false,
    slidesToShow: 3,
    appendArrows:$('.editions__slider-arrow'),
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.partners-slider').slick({
    infinite:false,
    waitForAnimate:false,
    slidesToShow:3,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
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