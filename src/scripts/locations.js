// Location data
const locations = {
  brno: {
    address: "U Hřiště 290, 664 61 Opatovice",
    phone: "+420 731 071 218",
    email: "info@vraky-brno.cz"
  },
  breclav: {
    address: "Průmyslová 567, 690 02 Břeclav",
    phone: "+420 234 567 890",
    email: "breclav@vrakoviste.cz"
  },
  vyskov: {
    address: "Nádražní 890, 682 01 Vyškov",
    phone: "+420 345 678 901",
    email: "vyskov@vrakoviste.cz"
  },
  blansko: {
    address: "Tovární 123, 678 01 Blansko",
    phone: "+420 456 789 012",
    email: "blansko@vrakoviste.cz"
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
