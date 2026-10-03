/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    if (scrollUp) {
        window.scrollY >= 350 
            ? scrollUp.classList.add('show-scroll')
            : scrollUp.classList.remove('show-scroll');
    }
};
window.addEventListener('scroll', scrollUp);

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    if (header) {
        window.scrollY >= 50 
            ? header.classList.add('scroll-header')
            : header.classList.remove('scroll-header');
    }
};
window.addEventListener('scroll', scrollHeader);

/*=============== REVEAL ANIMATION ===============*/
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

/*=============== TYPEWRITER (optional) ===============*/
const typewriter = document.getElementById('typewriter');
if (typewriter) {
    const texts = ['Software Engineer', 'Full Stack Developer', 'Embedded Enthusiast'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = texts[textIndex];
        if (isDeleting) {
            typewriter.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriter.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 1800);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 400);
        } else {
            setTimeout(type, isDeleting ? 40 : 90);
        }
    }
    type();
}
