
document.addEventListener('DOMContentLoaded', () => {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
