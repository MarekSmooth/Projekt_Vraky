// Mobile menu toggle
export function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('[data-mobile-menu-toggle]');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    }
  });
}

// Theme toggle functionality
export function initThemeToggle() {
  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const html = document.documentElement;

  if (savedTheme === 'dark') {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
  updateThemeIcons();

  // Add click handlers to all theme toggle buttons
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

function toggleTheme() {
  const html = document.documentElement;
  
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  updateThemeIcons();
}

function updateThemeIcons() {
  const sunIcons = document.querySelectorAll('[data-icon="sun"]');
  const moonIcons = document.querySelectorAll('[data-icon="moon"]');
  const isDark = document.documentElement.classList.contains('dark');
  
  sunIcons.forEach(icon => {
    isDark ? icon.classList.remove('hidden') : icon.classList.add('hidden');
  });
  
  moonIcons.forEach(icon => {
    isDark ? icon.classList.add('hidden') : icon.classList.remove('hidden');
  });
}
