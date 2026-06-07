// ================================
// NAVIGATION
// ================================

// Mobile Menu Toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");

function highlightNavLink() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", highlightNavLink);

// ================================
// TYPING EFFECT
// ================================
const titles = [
  "Front-End Developer",
  "Aspiring UI/UX Designer",
  "BSIT Student",
  "Creative Thinker",
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  const currentTitle = titles[titleIndex];

  if (isDeleting) {
    typedText.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedText.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentTitle.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

typeEffect();

// ================================
// PARTICLES
// ================================
const particlesContainer = document.getElementById("particles");

function createParticles() {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 10 + 8 + "s";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.width = Math.random() * 4 + 2 + "px";
    particle.style.height = particle.style.width;

    const colors = ["var(--primary)", "var(--accent)", "var(--secondary)"];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    particlesContainer.appendChild(particle);
  }
}

createParticles();

// ================================
// SCROLL REVEAL ANIMATION
// ================================
function revealElements() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

// Add reveal class to elements
document.addEventListener("DOMContentLoaded", () => {
  const elementsToReveal = document.querySelectorAll(
    ".about-image-card, .about-text-side, " +
      ".skill-category, .project-card, " +
      ".contact-info, .contact-form-wrapper",
  );

  elementsToReveal.forEach((el, index) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${index * 0.1}s`;
  });
});

window.addEventListener("scroll", revealElements);

// ================================
// SKILL BAR ANIMATION
// ================================
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");

  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 50) {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    }
  });
}

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);

// ================================
// BACK TO TOP BUTTON
// ================================
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ================================
// CONTACT FORM
// ================================
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");

  alert(
    `Thank you, ${name}! Your message has been received. I will get back to you soon.`,
  );

  contactForm.reset();
});

// ================================
// SMOOTH SCROLL FOR ALL ANCHOR LINKS
// ================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
