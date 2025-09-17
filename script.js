js

// Just set the current year in the footer
document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  const now = new Date();
  yearEl.textContent = now.getFullYear();
});
