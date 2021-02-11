const element1 = document.querySelector('.select-menu1');
const choices1 = new Choices(element1, {
  searchEnabled: false,
  itemSelectText: "",
});    

const element2 = document.querySelector('.select-menu2');
const choices2 = new Choices(element2, {
  searchEnabled: false,
  itemSelectText: "",
}); 

const element3 = document.querySelector('.select-menu3');
const choices3 = new Choices(element3, {
  searchEnabled: false,
  itemSelectText: "",
});

const element4 = document.querySelector('.select-menu4');
const choices4 = new Choices(element4, {
  searchEnabled: false,
  itemSelectText: "",
});

const element5 = document.querySelector('.select-menu5');
const choices5 = new Choices(element5, {
  searchEnabled: false,
  itemSelectText: "",
});

const element6 = document.querySelector('.select-filter');
const choices6 = new Choices(element6, {
  searchEnabled: false,
  itemSelectText: "",
}); 

$(function(){

  $('.gallery-slider').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('.header-btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
  });

});