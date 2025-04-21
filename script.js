// Typing effect for Hero Section
const typedText = document.getElementById("typed-text");
const textArray = ["Cloud Enthusiast ☁️", "Kotlin Android Developer 📱", "Software Engineer 💻"];
let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let charIndex = 0;

function type() {
    if (isDeleting) {
        currentText = textArray[currentIndex].substring(0, charIndex - 1);
        charIndex--;
    } else {
        currentText = textArray[currentIndex].substring(0, charIndex + 1);
        charIndex++;
    }

    typedText.textContent = currentText;

    if (!isDeleting && charIndex === textArray[currentIndex].length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(type, 600);
    }

    if (!(isDeleting && charIndex === 0)) {
        setTimeout(type, isDeleting ? 50 : 150);
    }
}

type();

// Smooth Scrolling for internal links
const scrollLinks = document.querySelectorAll('nav a');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60, // Offset for the fixed navbar
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    scrollToTopBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Consolidated DOMContentLoaded logic
document.addEventListener("DOMContentLoaded", () => {
    // Timeline box toggle
    document.querySelectorAll('.timeline-box').forEach(box => {
        box.addEventListener('click', () => {
            box.classList.toggle('active');
        });
    });

    // Fade-up animation
    const fadeUpElements = document.querySelectorAll(".fade-up");
    fadeUpElements.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("fade-up-visible");
        }, i * 300);
    });

    // Certifications animation
    const certifications = document.querySelectorAll(".certification");
    certifications.forEach((cert, index) => {
        cert.style.opacity = 0;
        cert.style.transform = "translateY(20px)";
        setTimeout(() => {
            cert.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            cert.style.opacity = 1;
            cert.style.transform = "translateY(0)";
        }, index * 200);
    });

    // Contact section animation
    const contactSection = document.querySelector("#contact");
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                contactSection.classList.add("animate__animated", "animate__fadeIn");
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(contactSection);
});
