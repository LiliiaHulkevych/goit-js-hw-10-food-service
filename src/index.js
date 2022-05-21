import menuCardsTml from './templates/menu-cards.hbs';
import menu from './menu.json';
import './sass/main.scss';




const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');
const listMenuRef = document.querySelector('ul.js-menu')



currentTheme()

themeSwitchToggleRef.addEventListener('change', onChangeTheme);

function onChangeTheme(evt) {
    bodyRef.classList.toggle("light-theme");
    bodyRef.classList.toggle("dark-theme");
   
    if(bodyRef.classList.contains("dark-theme")){
    localStorage.setItem("theme", Theme.DARK);
    return
    }
    localStorage.setItem("theme", Theme.LIGHT)
}

function currentTheme() {
    if(localStorage.getItem('theme') === Theme.DARK) {
        bodyRef.classList.add(Theme.DARK);
        themeSwitchToggleRef.checked = true;
        return
    }
    bodyRef.classList.add(Theme.LIGHT);
    themeSwitchToggleRef.checked = false;
}


const menuCards = menuCardsTml(menu);
listMenuRef.insertAdjacentHTML('beforeend', menuCards);

