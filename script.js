// Taal wissel
let huidigeTaal = 'nl';

function wisselTaal() {
  huidigeTaal = huidigeTaal === 'nl' ? 'en' : 'nl';
  const btn = document.getElementById('taal-btn');
  btn.textContent = huidigeTaal === 'nl' ? 'EN' : 'NL';
  document.documentElement.lang = huidigeTaal;
  vertaalPagina();
}

function vertaalPagina() {
  const elementen = document.querySelectorAll('[data-nl]');
  elementen.forEach(el => {
    const tekst = el.getAttribute('data-' + huidigeTaal);
    if (tekst) el.textContent = tekst;
  });
}

// Mobile menu
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

// Sluit mobile menu bij klik op link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.remove('open');
  });
});

// Smooth scroll voor anker links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar schaduw bij scrollen
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
