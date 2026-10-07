/**
 * Logesh S – Personal Portfolio
 * script.js
 *
 * Features:
 * 1. Sticky navbar with scroll class
 * 2. Hamburger mobile menu toggle
 * 3. Active nav link highlight on scroll
 * 4. Smooth scroll for nav links + close mobile menu on click
 * 5. Scroll-reveal animations (IntersectionObserver)
 * 6. Back-to-top button visibility
 * 7. Contact form validation + success message
 */

/* ============================================================
   DOM REFERENCES
============================================================ */
const navbar      = document.getElementById('navbar');
const hamburger   = document.getElementById('hamburger');
const navLinks    = document.getElementById('nav-links');
const navItems    = document.querySelectorAll('.nav-link');
const backToTop   = document.getElementById('back-to-top');
const sections    = document.querySelectorAll('section[id]');
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

/* ============================================================
   1. NAVBAR – SCROLL CLASS & ACTIVE LINK
============================================================ */
function handleScroll() {
  const scrollY = window.scrollY;

  // Add 'scrolled' class to navbar when page is scrolled
  if (scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Show/hide back-to-top button
  if (scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  // Highlight the active nav link based on scroll position
  let currentSection = '';
  sections.forEach((section) => {
    const sectionTop    = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); // run once on load

/* ============================================================
   2. HAMBURGER MENU TOGGLE
============================================================ */
hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

/* ============================================================
   3. CLOSE MOBILE MENU WHEN A NAV LINK IS CLICKED
      Also implements smooth scroll manually for better control
============================================================ */
navItems.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Close the mobile menu
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');

    // Smooth scroll to section
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = navbar.offsetHeight + 8;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    }
  });
});

/* Also close mobile menu when clicking outside */
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

/* ============================================================
   4. BACK TO TOP BUTTON
============================================================ */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============================================================
   5. SCROLL-REVEAL ANIMATIONS (IntersectionObserver)
============================================================ */
function setupReveal() {
  // Add 'reveal' class to elements that should animate in
  const revealTargets = document.querySelectorAll(
    '.section-header, .about-text, .info-card, .skill-card, ' +
    '.timeline-card, .project-card, .edu-card, .cert-card, ' +
    '.contact-info, .contact-form-wrap'
  );

  revealTargets.forEach((el) => {
    el.classList.add('reveal');
  });

  // Add stagger to grids
  const staggerTargets = document.querySelectorAll(
    '.about-cards, .skills-grid, .projects-grid'
  );
  staggerTargets.forEach((el) => {
    el.classList.add('reveal-stagger');
  });

  // Observer config
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
    observer.observe(el);
  });
}

/* Run after DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupReveal);
} else {
  setupReveal();
}

/* ============================================================
   6. CONTACT FORM VALIDATION
============================================================ */
function validateForm() {
  let isValid = true;

  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError    = document.getElementById('name-error');
  const emailError   = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');

  // Clear previous errors
  [nameInput, emailInput, messageInput].forEach((el) => el.classList.remove('error'));
  [nameError, emailError, messageError].forEach((el) => (el.textContent = ''));

  // Validate name
  const name = nameInput.value.trim();
  if (!name) {
    nameError.textContent = 'Please enter your name.';
    nameInput.classList.add('error');
    isValid = false;
  } else if (name.length < 2) {
    nameError.textContent = 'Name must be at least 2 characters.';
    nameInput.classList.add('error');
    isValid = false;
  }

  // Validate email
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    emailError.textContent = 'Please enter your email address.';
    emailInput.classList.add('error');
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('error');
    isValid = false;
  }

  // Validate message
  const message = messageInput.value.trim();
  if (!message) {
    messageError.textContent = 'Please write a message.';
    messageInput.classList.add('error');
    isValid = false;
  } else if (message.length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    messageInput.classList.add('error');
    isValid = false;
  }

  return isValid;
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Show success message (no backend – front-end only)
    formSuccess.hidden = false;
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Clear the form
    contactForm.reset();

    // Hide success message after 8 seconds
    setTimeout(() => {
      formSuccess.hidden = true;
    }, 8000);
  });

  // Clear individual field error on input
  ['name', 'email', 'message'].forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (field && error) {
      field.addEventListener('input', () => {
        field.classList.remove('error');
        error.textContent = '';
      });
    }
  });
}

/* ============================================================
   7. PROFILE IMAGE FALLBACK
      (The onerror is already on the <img> tag in HTML,
       this just ensures the fallback is visible by default
       if the src is blank or missing)
============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  const profileImg      = document.getElementById('profile-img');
  const profileFallback = document.getElementById('profile-fallback');

  if (profileImg) {
    // If image src is empty or image fails to load, show fallback
    if (!profileImg.src || profileImg.naturalWidth === 0) {
      // Give the browser a moment to attempt loading
      profileImg.addEventListener('error', () => {
        profileImg.style.display = 'none';
        if (profileFallback) profileFallback.style.display = 'flex';
      });
    }
  }
});
