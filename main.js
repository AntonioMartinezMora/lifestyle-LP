const navigationBar = document.querySelector('.navigation')
const aboutSection = document.querySelector('#about');

window.addEventListener('scroll', pageEffect)

function pageEffect(){
    if(window.scrollY > (window.innerHeight - 130)){
        navigationBar.classList.add('change')
    } else {
        navigationBar.classList.remove('change')
    }

    if(window.scrollY > (window.innerHeight/2)){
        aboutSection.classList.add('show')
    }
}

