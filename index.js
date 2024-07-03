const container = document.getElementById('char-container');

document.addEventListener('DOMContentLoaded', () => {
    const starCount = 50;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.classList.add('none');

        // Random position
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;

        // Random size
        const size = Math.random() * 4 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        container.appendChild(star);
        
    }
})

const moon = document.getElementsByClassName("fa-moon")
const sun = document.getElementsByClassName("fa-sun")

moon[0].addEventListener('click', () => {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
})

sun[0].addEventListener('click', () => {
    document.body.classList.add('dark')
    document.body.classList.remove('light')
})

const stars = document.getElementsByClassName('star')
const moonsection = document.getElementsByClassName('moon')
const sunsection = document.getElementsByClassName('sun')
const cloudsSection = document.getElementsByClassName('clouds')

moon[0].addEventListener('click', () => {
    container.style.backgroundColor = 'rgb(92, 225, 225)'
    moon[0].style.animation = 'goDown 1s 0s 1'
    container.style.animation = 'sunrise 2s 0s 1'
    setTimeout(() => {
        for (j of stars) {
            j.classList.add('none')
        }
        moonsection[0].classList.add("none")
        sunsection[0].classList.remove("none")
        moon[0].style.animation = 'none'
        sun[0].style.animation = 'goUp 1s 0s 1'
        cloudsSection[0].style.animation = 'cloudAppear 1s 0s 1'
        setTimeout(() => {
            sun[0].style.animation = 'none'
            container.style.animation = 'none'
            cloudsSection[0].style.animation = 'none'
        },1000)
    }, 1000);
    
})

cloudsSection[0].addEventListener('click', () => {
    container.style.backgroundColor = '#1e1e1e'
    sun[0].style.animation = 'goDown 1s 0s 1'
    cloudsSection[0].style.animation = 'cloudsDisappear 1s 0s 1'
    container.style.animation = 'sunset 2s 0s 1'
    setTimeout(() => {
        for (j of stars) {
            j.classList.remove('none')
        }
        moonsection[0].classList.remove("none")
        sunsection[0].classList.add("none")
        sun[0].style.animation = 'none'
        moon[0].style.animation = 'goUp 1s 0s 1'
        setTimeout(() => {
            moon[0].style.animation = 'none'
            container.style.animation = 'none'
            cloudsSection[0].style.animation = 'none'
        },1000)
    }, 950);
})

sun[0].addEventListener('click', () => {
    container.style.backgroundColor = '#1e1e1e'
    sun[0].style.animation = 'goDown 1s 0s 1'
    cloudsSection[0].style.animation = 'cloudsDisappear 1s 0s 1'
    container.style.animation = 'sunset 2s 0s 1'
    setTimeout(() => {
        for (j of stars) {
            j.classList.remove('none')
        }
        moonsection[0].classList.remove("none")
        sunsection[0].classList.add("none")
        sun[0].style.animation = 'none'
        moon[0].style.animation = 'goUp 1s 0s 1'
        setTimeout(() => {
            moon[0].style.animation = 'none'
            container.style.animation = 'none'
            cloudsSection[0].style.animation = 'none'
        },1000)
    }, 950);
})
