
  // Theme Switcher Functionality
  const themeContainer = document.getElementById('theme-container');
  const themeButton = document.getElementById('theme-button');
  const dropdown = document.getElementById('dropdown-menu');

  // Toggle dropdown on button click
  themeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    themeContainer.classList.toggle('active');
  });

  // Hide dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!themeContainer.contains(e.target)) {
      themeContainer.classList.remove('active');
    }
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

  // Load saved theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
  }

if (typeof Swiper !== "undefined") {
  const swiper = new Swiper('.swiper', {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: false,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      loop: true,
    });


} else {
  console.error("Swiper library not loaded!");
}
