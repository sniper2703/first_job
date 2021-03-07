const button = document.querySelectorAll('button');
const drop = document.querySelectorAll('.dropdown')

button.forEach(el => {
  el.addEventListener('click', (e) => {
    drop.forEach(el => {el.classList.remove(('dropdown_active'))})
    e.currentTarget.closest('li').querySelector('.dropdown').classList.toggle('dropdown_active');
  });
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('drop-btn')) {
    drop.forEach(el => {el.classList.remove(('dropdown_active'))})
  }
});