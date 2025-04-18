document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Highlight active link based on current page
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add('active', 'font-semibold', 'text-blue-200');
      } else {
        link.classList.remove('active', 'font-semibold', 'text-blue-200');
      }
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });