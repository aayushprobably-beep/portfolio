/**
 * Spider-Man Developer Portfolio
 * Pure Vanilla JavaScript: Navigation, ScrollSpy, Smooth Scroll, and Form Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const navbar = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  /* --------------------------------------------------------------------------
     1. Mobile Hamburger Menu Toggle
     -------------------------------------------------------------------------- */
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      
      // Prevent body scrolling when mobile menu is open
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close menu when clicking on any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Close menu on 'Escape' key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Sticky Navbar Glass Effect & Scroll-To-Top Button
     -------------------------------------------------------------------------- */
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Sticky Navbar elevation
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll to Top visibility
    if (scrollTopBtn) {
      if (scrollY > 350) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  /* --------------------------------------------------------------------------
     3. Active Link ScrollSpy (Highlight link of section in view)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  const scrollSpy = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeLink = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (activeLink && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        activeLink.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', scrollSpy, { passive: true });

  /* --------------------------------------------------------------------------
     4. Interactive Contact Form with Validation & Feedback
     -------------------------------------------------------------------------- */
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Email regex validation
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('invalid');
        nameError.classList.add('show');
        isValid = false;
      } else {
        nameInput.classList.remove('invalid');
        nameError.classList.remove('show');
      }

      // Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('invalid');
        emailError.classList.add('show');
        isValid = false;
      } else {
        emailInput.classList.remove('invalid');
        emailError.classList.remove('show');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('invalid');
        messageError.classList.add('show');
        isValid = false;
      } else {
        messageInput.classList.remove('invalid');
        messageError.classList.remove('show');
      }

      if (!isValid) return;

      // Simulation of transmission dispatch
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting Beacon...</span>`;

      setTimeout(() => {
        // Show success state
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `
          <strong>⚡ Transmission Received, Hero!</strong><br>
          Signal beamed to Peter's web-comm. Response incoming within 24 hours.
        `;

        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;

        // Auto-dismiss notification after 8 seconds
        setTimeout(() => {
          formFeedback.style.display = 'none';
          formFeedback.className = 'form-feedback';
        }, 8000);
      }, 900);
    });

    // Clear validation error on user input
    [nameInput, emailInput, messageInput].forEach(input => {
      input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
          input.classList.remove('invalid');
          const errorMsg = input.closest('.form-group').querySelector('.field-error');
          if (errorMsg) errorMsg.classList.remove('show');
        }
      });
    });
  }
});

