// Location data
const locations = {
  brno: {
    address: "U Hřiště 290, 664 61 Opatovice",
    phone: "+420 731 071 218",
    email: "info@vraky-brno.cz"
  }
};

export function initLocationSelector() {
  // Set Brno as default
  selectLocation('brno');

  // Add click handlers to location buttons
  document.querySelectorAll('[data-location]').forEach(btn => {
    const location = btn.getAttribute('data-location');
    btn.addEventListener('click', (e) => {
      // Don't select location if it's a link to another site
      if (!btn.hasAttribute('href') || btn.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        selectLocation(location);
      }
    });
  });
}

export function selectLocation(location) {
  const data = locations[location];
  if (!data) return;

  // Update footer information
  const footerPhone = document.getElementById('footer-phone');
  const footerEmail = document.getElementById('footer-email');
  const footerAddress = document.getElementById('footer-address');

  if (footerPhone) footerPhone.textContent = data.phone;
  if (footerEmail) footerEmail.textContent = data.email;
  if (footerAddress) footerAddress.textContent = data.address;

  // Update button styles
  document.querySelectorAll('[data-location]').forEach(btn => {
    btn.classList.remove('ring-2', 'ring-gray-600', 'ring-offset-2', 'bg-black/20');
  });

  const activeBtn = document.querySelector(`[data-location="${location}"]`);
  if (activeBtn) {
    activeBtn.classList.add('ring-2', 'ring-gray-600', 'ring-offset-2', 'bg-black/20');
  }
}
