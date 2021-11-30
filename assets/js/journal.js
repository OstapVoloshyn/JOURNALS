// ******************Бургер меню****************************************************

const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');

navToggle.addEventListener('click', function(){
  navToggle.classList.toggle('active');
  menu.classList.toggle('active');

});
// *************************Убераем Бургер при скроле*******************************

const menuHide = document.getElementById('menu')
const navToggleHide = document.getElementById('navToggle');

window.addEventListener('scroll', function(){
  menuHide.classList.remove('active');
  navToggleHide.classList.remove('active');

});