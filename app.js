const body = document.querySelector('body');

const welcomePage = document.querySelector('.welcome')

const homePageContent = document.querySelector('.home-page-content')

const navList = document.querySelector('ul')

const navContainer = document.querySelector('.nav-container')

const emptySpace = document.querySelector('.empty-space')

const rainbow = document.querySelector('.fa-rainbow')

const luxehahn = document.querySelector('#luxe-hahn');

const bioText = document.querySelector('.bio-content')

const bioLi = document.querySelector('.bio-li')

const projectsLi = document.querySelector('.projects-li')

const projectsPage = document.querySelector('.projects')

const experienceLi = document.querySelector('.experience-li')

const experiencePage = document.querySelector('.experience')

const projectsCarousel = document.querySelector('.carousel')

const mainImg = document.querySelector('.main-img')


//adds hide class
function hideElement(element) {
    element.classList.add('hide');
}

//removes hide class
function showElement(element) {
    element.classList.remove('hide');
}

//turn on dark mode
function darkMode(element) {
    element.classList.add('dark')
}


//turn on light mode
function lightMode(element) {
    element.classList.remove('dark');
}


//turn on rainbow mode
const rainbowImg = document.querySelector('.rainbow-img')
function rainbowMode() {
    body.classList.add('rainbow');
    hideElement(document.querySelector('.toggle-li'))
    hideElement(mainImg);
    showElement(document.querySelector('.rainbow-img'))
}

rainbow.addEventListener('click', () => {
    rainbowMode(body);
    rainbowMode();
    rainbowMode(document.querySelector('.rainbow-img'));
})


//dark and light mode toggle function
const checkbox = document.querySelector('input[type="checkbox"]'); 
checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        darkMode(body);
        darkMode(mainImg);
    } else {
        lightMode(body);
    }
});


//show main page
function refreshPage() {
    window.location.reload();
}

document.querySelector('.welcome-li').addEventListener('click', refreshPage)

const carouselImg = document.querySelector('.carousel-image')
//Load bio page
bioLi.addEventListener('click', () => {
    showElement(homePageContent);
    hideElement(experiencePage);
    hideElement(projectsPage);
});


//Load projects page
projectsLi.addEventListener('click', () => {
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    modal.style.display = 'block';
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    hideElement(homePageContent);
    hideElement(experiencePage);
    showElement(projectsPage);
    carouselImg.style.display = 'block'
    
}); 

    // const modal = document.getElementById("myModal");
    // const span = document.getElementsByClassName("close")[0];
    // projectsLi.addEventListener('click', () => {
    //     modal.style.display = 'block';
    // })
    // span.addEventListener('click', () => {
    //     modal.style.display = "none";
    // }
    // window.onclick = function (event) {
    //         if (event.target == modal) {
    //             modal.style.display = "none";
    //         }
    //     }


//Load experience page
experienceLi.addEventListener('click', () => {
    showElement(experiencePage);
    hideElement(projectsPage);
    hideElement(homePageContent);
})


//projects carousel *** code from SEI - Corgi Carousel exercise ***
let currentImg = 0;
let prevImg = 0;

// let imageNum = 0;

const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

const images = document.querySelectorAll('.carousel-image');

next.addEventListener('click', () => {
    prevImg = currentImg;
    currentImg++;
    images[prevImg].style.display = "none";
    if (currentImg >= images.length) {
        currentImg = 0;
    }
    images[currentImg].style.display = "block";
});


previous.addEventListener('click', () => {
    prevImg = currentImg;
    currentImg--;
    if (currentImg < 0) {
        currentImg = images.length - 1;
    }
    images[prevImg].style.display = "none";
    images[currentImg].style.display = "block";
});



