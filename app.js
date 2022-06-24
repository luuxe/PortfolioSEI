
const body = document.querySelector('body');

const homePageContent = document.querySelector('.home-page-content')

const navList = document.querySelector('ul')

const moon = document.querySelector('.fa-moon')

const sun = document.querySelector('.fa-sun')

const luxehahn = document.querySelector('#luxe-hahn');

const bio = document.querySelector('.bio')


// turn on dark mode
function darkMode() {
    body.classList.add('dark');
    h1.classList.add('dark');
    bio.classList.add('dark')
}

moon.addEventListener('click', darkMode)


//turn on light mode
function lightMode() {
    body.classList.remove('dark');
    h1.classList.remove('dark')
    bio.classList.remove('dark')

}

sun.addEventListener('click', lightMode)

//hide main page
function hideMain() {
    homePageContent.classList.add('hide');
}

navList.addEventListener('click', hideMain);




