import 'leaflet/dist/leaflet.css';
import { initMobileMenu, initThemeToggle } from './navigation.js';
import { initLocationSelector } from './locations.js';
import { initMap } from './map.js';

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initThemeToggle();
  initLocationSelector();
  initMap();
});
