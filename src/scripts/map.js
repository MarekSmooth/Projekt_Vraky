import L from 'leaflet';

export function initMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  // Initialize map centered on Brno area with different zoom for mobile
  const isMobile = window.innerWidth < 768;
  const center = isMobile ? [49.2, 16.6] : [49.4, 17.2];
  const map = L.map('map').setView(center, 8);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Declare geojsonLayer in outer scope
  let geojsonLayer;

  // Style function for districts
  function style(feature) {
    return {
      fillColor: 'transparent',
      weight: 3,
      opacity: 1,
      color: '#15803d',
      fillOpacity: 0
    };
  }

  // Highlight feature on hover
  function highlightFeature(e) {
    const layer = e.target;
    layer.setStyle({
      weight: 4,
      color: '#16a34a',
      fillOpacity: 0
    });
    layer.bringToFront();
  }

  // Reset highlight
  function resetHighlight(e) {
    geojsonLayer.resetStyle(e.target);
  }

  // Add popup on click
  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight
    });

    if (feature.properties.name) {
      layer.bindPopup('<b>' + feature.properties.name + '</b><br>' +
        (feature.properties.covered ? 'Poskytujeme služby' : 'Neposkytujeme služby'));
    }
  }

  // Load GeoJSON data
  async function loadGeoJSON() {
    // import.meta.env.BASE_URL is set by Vite - works both in dev (/Projects_Vraky/) and production
    const url = `${import.meta.env.BASE_URL}okresy-brno.geojson?v=${Date.now()}`;
    
    try {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      console.log('GeoJSON načten z:', url);
      return data;
    } catch (e) {
      console.error('Chyba při načítání GeoJSON:', url, e);
      throw e;
    }
  }

  loadGeoJSON()
    .then(data => {
      geojsonLayer = L.geoJSON(data, { style, onEachFeature }).addTo(map);
    })
    .catch(err => console.error('Error loading GeoJSON:', err));
}
