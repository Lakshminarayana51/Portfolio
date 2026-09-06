/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        if(!link) return
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            link.classList.add('active-link')
        }else{
            link.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    if(!nav) return
    // When the scroll is greater than 80 viewport height, add the scroll-header class
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(!scrollUp) return
    // When the scroll is higher than 560 viewport height, show the scroll-up button
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== TYPEWRITER ROLE ====================*/
(function(){
    const el = document.getElementById('typewriter')
    if(!el) return
    const roles = ['Full Stack Developer', 'React + Node.js', 'Django Developer', 'UI/UX Enthusiast']
    let word = 0, char = 0, deleting = false

    function tick(){
        const current = roles[word]
        el.textContent = current.slice(0, char)

        if(!deleting && char < current.length){
            char++
            setTimeout(tick, 75)
        }else if(!deleting){
            deleting = true
            setTimeout(tick, 1800)
        }else if(char > 0){
            char--
            setTimeout(tick, 40)
        }else{
            deleting = false
            word = (word + 1) % roles.length
            setTimeout(tick, 350)
        }
    }
    tick()
})()

/*==================== REVEAL ON SCROLL ====================*/
(function(){
    const revealEls = document.querySelectorAll('.reveal')
    if(!revealEls.length) return

    if(!('IntersectionObserver' in window)){
        revealEls.forEach(el => el.classList.add('reveal-visible'))
        return
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.12 })

    revealEls.forEach(el => observer.observe(el))
})()
