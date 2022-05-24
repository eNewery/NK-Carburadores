/* Acordeón */
'use strict'

const bloque    = document.querySelectorAll('.bloque')
const h2        = document.querySelectorAll('.h2')
    


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

