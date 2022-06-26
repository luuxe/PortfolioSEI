const body = document.querySelector('body');

const welcomePage = document.querySelector('.welcome')

const homePageContent = document.querySelector('.home-page-content')

const navList = document.querySelector('ul')

const navContainer = document.querySelector('.nav-container')

const emptySpace = document.querySelector('.empty-space')

const darkModeSpan = document.querySelector('.dark-mode-span')

const lightModeSpan = document.querySelector('.light-mode-span')

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

//welcome screen toggle
function welcome() {
    homePageContent.classList.remove('hide');
    navContainer.classList.remove('hide');
    emptySpace.classList.remove('hide')
}

function hideWelcome() {
    welcomePage.classList.add('hide');
}

// turn on dark mode
function darkMode() {
    body.classList.add('dark');
    bioText.classList.add('dark');
    profilePic.classList.add('dark');
}

moon.addEventListener('click', () => {
    darkMode();
    hideWelcome();
    welcome();
})

//turn on light mode
function lightMode() {
    body.classList.remove('dark');
    bioText.classList.remove('dark')
}

sun.addEventListener('click', () => {
    lightMode();
    hideWelcome();
    welcome();
})


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


//email functionality
const emailIcon = document.getElementById("email-icon");
const emailText = document.getElementById("email-text")

emailIcon.addEventListener('mouseover', () => {
    emailText.classList.remove('hide');
})

emailIcon.addEventListener('mouseout', () => {
    emailText.classList.add('hide');
})


//projects carousel
// let currentImg = 0;
// let prevImg = 0;

let imageNum = 0;

const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

const images = document.getElementsByClassName('carousel-image');

function showImage(i) {
    imageNum++;

    console.log(images.length);

    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    if (imageNum > images.length - 1) {
        imageNum = 0;
    }

    if (imageNum < 0) {
        imageNum = images.length - 1;
    }
    
    images[imageNum].style.display = "block";
}


previous.addEventListener('click', showImage(-1));
next.addEventListener('click', showImage(1));







// prevBtn.addEventListener('click', () => {
//     console.log('prev clicked')
//     prevImg = currentImg;
//     currentImg--;
//     if (currentImg < 0) {
//         currentImg = images.length - 1;
//     }
//     images[prevImg].style.display = "none";
//     images[currentImg].style.display = "block";
// });

// nextBtn.addEventListener('click', () => {
//     console.log('next clicked')
//     prevImg = currentImg;
//     currentImg++;
//     if (currentImg < 0) {
//         currentImg = images.length - 1;
//     }
//     images[prevImg].style.display = "none";
//     images[currentImg].style.display = "block";
// });
