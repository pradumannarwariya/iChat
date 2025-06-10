const themeContainer = document.getElementById('theme-container');
const themeButton = document.getElementById('theme-button');
const dropdown = document.getElementById('dropdown-menu');

// Toggle on click
themeButton.addEventListener('click', () => {
  themeContainer.classList.toggle('active');
});

// Apply theme on selection
dropdown.querySelectorAll('div').forEach(option => {
  option.addEventListener('click', () => {
    const theme = option.getAttribute('data-theme');
    document.body.className = theme;
    themeContainer.classList.remove('active');
    localStorage.setItem('theme', theme);
  });
});

// Keep menu open on hover, close on mouse leave
themeContainer.addEventListener('mouseleave', () => {
  themeContainer.classList.remove('active');
});

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.className = savedTheme;
}