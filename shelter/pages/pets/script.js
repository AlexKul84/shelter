/* hamburger menu */

const hamburger = document.querySelector('.hamburger');
const hamburger_menu = document.querySelector('.hamburger_menu');
const menu_container = document.querySelector('.menu_container');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

function toggleMenu() {
    hamburger.classList.toggle('open');
    hamburger_menu.classList.toggle('open');
    menu_container.classList.toggle('open');
    header.classList.toggle('open');
    main.classList.toggle('open');
    footer.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.menu_item_link');

function closeMenu(event) {
    if (event.target.classList.contains('menu_item_link')) {
        hamburger.classList.remove('open')
        hamburger_menu.classList.remove('open')
        menu_container.classList.remove('open')
        header.classList.remove('open')
        main.classList.remove('open')
        footer.classList.remove('open')
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

/* end hamburger menu */