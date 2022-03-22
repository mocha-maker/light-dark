// Toggle Elements
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

function toggleTheme(isDark) {
    // Change Navigation and Textbox
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

    // Change Toggle
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon') :
            toggleIcon.children[1].classList.replace('fa-moon','fa-sun');

    // Change images
    isDark ? changeImage('dark') : changeImage('light');
}

// Switch Theme
function switchTheme(event) {

    if (event.target.checked) {
        // Set root theme
        theme.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark')
        toggleTheme(true);
    } else {
        // Set root theme
        theme.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light')    
        toggleTheme(false);
    }
}

// Toggle Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// On Load
const currentTheme = localStorage.getItem('theme');

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleTheme(true);
    }
}