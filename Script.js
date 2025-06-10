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

// Particle background using tsParticles
window.addEventListener('DOMContentLoaded', () => {
  tsParticles.load('tsparticles', {
    fullScreen: { enable: false },
    particles: {
      number: { value: 70, density: { enable: true, value_area: 800 } },
      color: { value: "#66ccff" },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      move: { enable: true, speed: 1.5, direction: "none", outModes: {default: "out"} }
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 80, duration: 0.4 } }
    },
    background: { color: "transparent" }
  });
});
