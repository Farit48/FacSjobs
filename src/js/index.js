const menuBurguer = document.getElementById('menuBurguer')
const menuBar = document.getElementById('menubar')
menuBurguer.addEventListener('click', ()=>{
   menuBar.classList.toggle('is-open')
})