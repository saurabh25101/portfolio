// Smooth Scroll for navigation links
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 70, // Adjust the offset to fit navbar
            behavior: 'smooth'
        });
    });
});

// Form Validation for Contact Form
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event) {
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('textarea');

    if (name.value === "" || email.value === "" || message.value === "") {
        event.preventDefault();
        alert("Please fill in all fields.");
    }
});

// Scroll Animation for sections
const sections = document.querySelectorAll('section');

function checkVisibility() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;

        if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();

 

// Navbar Highlight on Scroll
window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('navbar');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
  document.getElementById('explore-btn').addEventListener('click', function () {
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth'
        });
    });
