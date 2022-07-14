import { valida } from "./validacao.js";

//menu hamburguer mobile 
const btnMobile = document.getElementById('btn-mobile');

    function abreMenu (event) {
        if (event.type === 'touchstart') event.preventDefault()
        const nav = document.getElementById('nav-menu');
        nav.classList.toggle('active');
        const active = nav.classList.contains('active');
        event.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
            event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
        } else {
            event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    btnMobile.addEventListener('click', abreMenu);
    btnMobile.addEventListener('touchstart', abreMenu);

 input.addEventListener('blur', (evento) => {
      valida(evento.target)
   })