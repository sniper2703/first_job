document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.countries__img').forEach(function(Step) {
    Step.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__country').forEach(function(stepDesc) {
        stepDesc.classList.remove('catalog__country_activ')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__country_activ')
    })
  })

  document.querySelectorAll('.painter-link').forEach(function(Step) {
    Step.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.painters__info').forEach(function(stepDesc) {
        stepDesc.classList.remove('painters__info_activ')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('painters__info_activ')
    })
  })
})

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("countries__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("countries__item_activ");
    current[0].className = current[0].className.replace(" countries__item_activ", "");
    this.className += " countries__item_activ";
  });
}