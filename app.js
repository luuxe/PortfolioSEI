
const body = document.querySelector('body');

const homePageContent = document.querySelector('.home-page-content')

const projectsNav = document.querySelector('.projects')

const moon = document.querySelector('.fa-moon')

const sun = document.querySelector('.fa-sun')


// turn on dark mode
function darkMode() {
    body.classList.add('dark');
}

moon.addEventListener('click', darkMode)

function lightMode() {
    body.classList.remove('dark');
}

sun.addEventListener('click', lightMode)

//hide main page
function hideMain() {
    homePageContent.classList.add('hide');
}

projectsNav.addEventListener('click', hideMain);




