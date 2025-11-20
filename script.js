// Small interactions: mobile nav toggle and year
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');

  if (toggle) {
    toggle.addEventListener('click', function () {
      if (!nav.classList.contains('open')) {
        nav.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav after click
        if (nav && nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});