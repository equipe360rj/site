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

const hiddenElements = document.querySelectorAll('.glass-card, .game-card, .section-title, .section-subtitle, .hero-content');
hiddenElements.forEach((el) => el.classList.add('hidden'));
hiddenElements.forEach((el) => observer.observe(el));

