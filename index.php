<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vraky Brno – Odtah, výkup a likvidace vozidel</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif']
          },
          colors: {
            grayish: {
              900: '#1a1a1a',
              800: '#2e2f33',
              700: '#3a3b3f',
              600: '#4a4b4f'
            }
          }
        }
      },
      safelist: [
        'bg-grayish-900', 'bg-grayish-800', 'bg-grayish-700', 'bg-grayish-600',
        'text-white', 'text-gray-300',
        'dark:bg-grayish-900', 'dark:bg-grayish-800', 'dark:bg-grayish-700', 'dark:bg-grayish-600',
        'dark:text-white', 'dark:text-gray-300'
      ]
    }
  </script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
  <style>
    body { font-family: 'Inter', sans-serif; }
    .location-separator {
      width: 1px;
      background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent);
      height: 60%;
    }
    .location-separator::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 6px;
      height: 6px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
    }
    .location-graphic {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      height: 40px;
      opacity: 0.6;
    }
    .location-graphic svg {
      width: 100%;
      height: 100%;
    }
    .theme-toggle {
      transition: transform 0.3s ease;
    }
    .theme-toggle:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body class="bg-white text-gray-900 dark:bg-[#1a1a1a] dark:text-gray-300">

  <?php include 'header.html'; ?>

  <!-- Hero sekce - Section 1 (Lighter) -->
  <header class="relative text-white py-20 px-6 overflow-hidden bg-gray-300 dark:bg-grayish-700">
    <div class="absolute inset-0 bg-[url('img/Auto.png')] bg-cover bg-center opacity-25"></div> 
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 dark:from-green-500 dark:to-green-700">
          Ekologická likvidace vozidel
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
          Zajistíme kompletní likvidaci včetně odvozu a dokumentace
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#kontakt" class="bg-green-600 dark:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-900 transition-colors font-bold">
            +420 731 071 218
          </a>
          <a href="#sluzby" class="bg-gray-400 dark:bg-grayish-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-500 dark:hover:bg-gray-600 transition-colors">
            Více informací
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Lokace, Výhody, Služby, Kontakt - beze změny (zůstává původní obsah) -->
  <!-- ... -->

  <?php include 'footer.html'; ?>

  <script>
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

    function selectLocation(location) {
      document.getElementById('address').textContent = locations[location].address;
      document.getElementById('phone').textContent = locations[location].phone;
      document.getElementById('email').textContent = locations[location].email;
      document.getElementById('footer-phone').textContent = locations[location].phone;
      document.getElementById('footer-email').textContent = locations[location].email;

      document.querySelectorAll('.location-btn').forEach(btn => {
        btn.classList.remove('ring-2', 'ring-gray-600', 'ring-offset-2', 'bg-black/20');
      });

      document.getElementById(`btn-${location}`).classList.add('ring-2', 'ring-gray-600', 'ring-offset-2', 'bg-black/20');
    }

    function toggleTheme() {
      const html = document.documentElement;
      const sunIcon = document.getElementById('sun-icon');
      const moonIcon = document.getElementById('moon-icon');

      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        localStorage.setItem('theme', 'light');
      } else {
        html.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
      selectLocation('brno');
      const savedTheme = localStorage.getItem('theme') || 'dark';
      const html = document.documentElement;
      const sunIcon = document.getElementById('sun-icon');
      const moonIcon = document.getElementById('moon-icon');

      if (savedTheme === 'dark') {
        html.classList.add('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      } else {
        html.classList.remove('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
    });
  </script>
</body>
</html>
