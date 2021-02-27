document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.countries-img').forEach(function(Step) {
    Step.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.countries-inner').forEach(function(stepDesc) {
        stepDesc.classList.remove('countries-inner-activ')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('countries-inner-activ')
    })
  })

  document.querySelectorAll('.painter-link').forEach(function(Step) {
    Step.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.info-painter').forEach(function(stepDesc) {
        stepDesc.classList.remove('info-painter-activ')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('info-painter-activ')
    })
  })
})

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("countries-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("countries-item-activ");
    current[0].className = current[0].className.replace(" countries-item-activ", "");
    this.className += " countries-item-activ";
  });
}