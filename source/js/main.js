

const header = document.querySelector('header');
header.classList.remove('main-header--no-js');

const navButton = header.querySelector('.main-header__toggle');
let isOpened = false;

const showMenu = () => {
    isOpened = true;
    header.classList.add('main-header--showed');
}

const closeMenu = () => {
    isOpened = false;
    header.classList.remove('main-header--showed');
}

navButton.addEventListener('click', () => {
    isOpened
        ? closeMenu()
        : showMenu();
})
