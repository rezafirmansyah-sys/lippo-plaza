/**
 * ============================================================================
 * LIPPO PLAZA - COMPANY PROFILE SCRIPT
 * Jurusan: Rekayasa Perangkat Lunak (RPL) - Tugas Pra-PKL
 * Deskripsi: Interaktivitas navbar, filter tenant, dynamic modal form, dan scroll
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // 1. Inisialisasi AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50
    });
  }

  // 2. Navbar Scroll Effect & Back to Top Button
  const navbar = document.querySelector('.custom-navbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Navbar Scrolled Class
    if (navbar) {
      if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to Top Visibility
    if (backToTopBtn) {
      if (scrollPosition > 350) {
        backToTopBtn.classList.add('active');
      } else {
        backToTopBtn.classList.remove('active');
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger initial check

  // Back to Top Action
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. Auto Close Mobile Navbar saat link diklik
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
          bsCollapse.hide();
        }
      }
    });
  });

  // 4. Tenant Category Filtering System
  const filterButtons = document.querySelectorAll('.tenant-filter-btn');
  const tenantItems = document.querySelectorAll('.tenant-item');

  if (filterButtons.length > 0 && tenantItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        // Toggle Active Button Class
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        tenantItems.forEach((item) => {
          const itemCategory = item.getAttribute('data-category');

          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });
      });
    });
  }

  // 5. Contact Form Submission Handler (Pra-PKL Interactive Feedback)
  const contactForm = document.getElementById('contactForm');
  const successModalElement = document.getElementById('contactSuccessModal');
  let successModal = null;

  if (successModalElement && typeof bootstrap !== 'undefined') {
    successModal = new bootstrap.Modal(successModalElement);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Form validation check
      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');

      const modalSenderName = document.getElementById('modalSenderName');
      if (modalSenderName && nameInput) {
        modalSenderName.textContent = nameInput.value;
      }

      // Show Bootstrap Modal feedback
      if (successModal) {
        successModal.show();
      } else {
        alert(`Terima kasih, ${nameInput ? nameInput.value : 'Pengunjung'}! Pesan Anda telah berhasil terkirim.`);
      }

      // Reset form
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

  // 6. Current Year in Footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
