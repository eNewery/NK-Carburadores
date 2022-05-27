'use strict'

const bloque    = document.querySelectorAll('.bloque')
const h2        = document.querySelectorAll('.h2')





/* Acordeon */
h2.forEach( ( cadaH2 , i )=>{
    h2[i].addEventListener('click', ()=>{

        bloque.forEach( ( cadaBloque , i )=>{
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')

    })
})
/* Acordeón */

/* BURGER MENU */
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})
/* BURGER MENU */



const comprar1 = document.getElementById("buy1");
const comprar2 = document.getElementById("buy2");
const comprar3 = document.getElementById("buy3");
const comprar4 = document.getElementById("buy4");

comprar1.onclick = erro;
comprar2.onclick = erro;
comprar3.onclick = erro;
comprar4.onclick = erro;

function erro() {
  alert("¡Compra realizada con éxito!")
};
