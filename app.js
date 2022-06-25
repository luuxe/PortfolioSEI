
const body = document.querySelector('body');

const homePageContent = document.querySelector('.home-page-content')

const navList = document.querySelector('ul')

const moon = document.querySelector('.fa-moon')

const sun = document.querySelector('.fa-sun')

const luxehahn = document.querySelector('#luxe-hahn');

const profilePic = document.querySelector('img')

const bioText = document.querySelector('.bio-content')

const bioLi = document.querySelector('.bio-li')

const projectsLi = document.querySelector('.projects-li')

const projectsPage = document.querySelector('.projects')

const experienceLi = document.querySelector('.experience-li')

const experiencePage = document.querySelector('.experience')

const projectsCarousel = document.querySelector('.carousel')

// turn on dark mode
function darkMode() {
    body.classList.add('dark');
    bioText.classList.add('dark');
    profilePic.classList.add('dark');
}

moon.addEventListener('click', darkMode)


//turn on light mode
function lightMode() {
    body.classList.remove('dark');
    bioText.classList.remove('dark')
}

sun.addEventListener('click', lightMode)

//hide main page
function hideMain() {
    homePageContent.classList.add('hide');

}

//Load bio page
function bioPageClicked() {
    homePageContent.classList.remove('hide');
    experiencePage.classList.add('hide')
    projectsPage.classList.add('hide')
}

bioLi.addEventListener('click', bioPageClicked)

//Load projects page
function projectsPageClicked() {
    hideMain();
    experiencePage.classList.add('hide')
    projectsPage.classList.remove('hide');
}

projectsLi.addEventListener('click', projectsPageClicked);


//Load experience page
function experiencePageClicked() {
    hideMain();
    experiencePage.classList.remove('hide')
    projectsPage.classList.add('hide');
    
}

experienceLi.addEventListener('click', experiencePageClicked)




