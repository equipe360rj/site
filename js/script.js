console.log('Equipe 360 RJ loaded');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.glass-card, .game-card, .section-title, .section-subtitle, .hero-content, .client-logo');
hiddenElements.forEach((el) => el.classList.add('hidden'));
hiddenElements.forEach((el) => observer.observe(el));


// Years of Experience Calculation
function updateYears() {
    const startDate = new Date('2011-03-11');
    const today = new Date();
    let years = today.getFullYear() - startDate.getFullYear();
    const m = today.getMonth() - startDate.getMonth();

    // If we haven't reached the anniversary date yet, subtract a year
    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
        years--;
    }

    const countElement = document.getElementById('years-count');
    if (countElement) {
        countElement.innerText = years;
    }
}


// Copyright Year
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.innerText = new Date().getFullYear();
}
// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

