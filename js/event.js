var eventHidden1 = document.querySelector('.hidden-event1');
var eventHidden2 = document.querySelector('.hidden-event2');
var eventBtn = document.querySelector('.btn-events');
eventBtn.onclick = function con(){
  eventHidden1.style.cssText = "display:block";
  eventHidden2.style.cssText = "display:block";
  eventBtn.style.cssText = "display:none";
};