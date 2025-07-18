// Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

// Set up toggle button
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', toggleTheme);
  }

  // Add fade-in class to all paragraphs
  const paras = document.querySelectorAll('p');
  paras.forEach(p => p.classList.add('fade-in'));

  // Intersection Observer for paragraphs
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    paras.forEach(p => observer.observe(p));
  } else {
    // Fallback: show all paragraphs
    paras.forEach(p => p.classList.add('visible'));
  }
});
