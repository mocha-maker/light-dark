// Toggle Elements
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const theme = document.documentElement;

// HTML Elements
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function changeImage(color) {
    image1.src = `./images/undraw_proud_coder_${color}.svg`;
    image2.src = `./images/undraw_proud_self_${color}.svg`;
    image3.src = `./images/undraw_new_ideas_${color}.svg`;
}

function toggleTheme(isTheme) {
    let isDark = (isTheme == DARK_THEME) ? true : false;
    // Change Navigation and Textbox
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    textBox.style.color = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';

    // Change Toggle
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') :
            toggleIcon.children[1].classList.replace('fa-moon','fa-sun');

    // Change images
    isDark ? changeImage(DARK_THEME) : changeImage(DARK_THEME);
}

// Switch Theme
function switchTheme(event) {

    if (event.target.checked) {
        // Set root theme
        theme.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem('theme', DARK_THEME)
        toggleTheme(DARK_THEME);
    } else {
        // Set root theme
        theme.setAttribute('data-theme', LIGHT_THEME );
        localStorage.setItem('theme', LIGHT_THEME);
        toggleTheme(LIGHT_THEME);
    }
}

// Toggle Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// On Load
const currentTheme = localStorage.getItem('theme');

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === DARK_THEME) {
        toggleSwitch.checked = true;
        toggleTheme(DARK_THEME);
    }
}