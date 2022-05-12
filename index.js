
const iconoHamburguesa = document.querySelector('.icono-hamburguesa');
const iconoCruz = document.querySelector('.fa-window-close');
const menuMobile = document.querySelector('.oculto-menu-mobile');


iconoHamburguesa.onclick = () => {
    menuMobile.style.display = "flex"
}

iconoCruz.onclick = () => {
    menuMobile.style.display = "none"
}