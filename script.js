// Example: change header color on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? '#3730a3' : '#4f46e5';
  });
  