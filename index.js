// 1. Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjusts for the fixed navbar height
            behavior: 'smooth'
        });
    });
});

// 2. Intersection Observer for scroll animations
const faders = document.querySelectorAll('.project-card, .timeline-item, .skill-tag, h2');

// Add the base fade-in class to all selected elements
faders.forEach(fader => {
    fader.classList.add('fade-in');
});

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
