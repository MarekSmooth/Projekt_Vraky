import { initMobileMenu, initThemeToggle, initActiveNav } from './navigation.js';
import { initLocationSelector } from './locations.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  initMobileMenu();
  initThemeToggle();
  initActiveNav();
  initLocationSelector();

  // Dynamically load Leaflet only on pages that have the map
  if (document.getElementById('map')) {
    const { initMap } = await import('./map.js');
    initMap();
  }
});
