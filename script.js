// Basic interactions: hamburger menu + simple form submit + dynamic year
document.addEventListener('DOMContentLoaded', () => {
  const hambtn = document.getElementById('hambtn');
  const nav = document.getElementById('nav');

  hambtn.addEventListener('click', () => {
    // toggle nav visibility for mobile
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
      nav.style.position = 'absolute';
      nav.style.right = '16px';
      nav.style.top = '72px';
      nav.style.background = '#fff';
      nav.style.padding = '12px';
      nav.style.borderRadius = '12px';
      nav.style.boxShadow = '0 8px 20px rgba(12,20,30,0.12)';
    }
  });

  // Close mobile nav on link click
  document.querySelectorAll('.nav-list a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        nav.style.display = '';
      }
    });
  });

  // Form submit (demo) — replace with actual backend call or integration
  const form = document.querySelector('#signup');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      // Basic validation
      if (!data.get('name') || !data.get('email')) {
        alert('Please enter name and email.');
        return;
      }
      // Here you would send data to your API. For demo:
      alert('Thanks! We sent a confirmation link to ' + data.get('email'));
      form.reset();
    });
  }

  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
