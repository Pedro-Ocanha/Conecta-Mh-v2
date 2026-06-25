document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
 

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link'); 

window.addEventListener('scroll', () => {
  let current = '';
 
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });
 
  navLinks.forEach(link => {
    link.style.color = '';
    link.style.background = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#fff';
      link.style.background = 'rgba(255,255,255,0.15)';
    }
  });
});
 

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });
 
document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(card);
});
 

const btnLogin = document.querySelector('.btn-login'); 
if (btnLogin) {
  btnLogin.addEventListener('click', () => {
    alert('Página de login em construção!');
  });
}
 

const temaBtn = document.getElementById('tema-btn'); 
let dark = false;
 
if (temaBtn) {
  
  if (localStorage.getItem('tema') === 'dark') {
    dark = true;
    document.body.classList.add('dark');
    temaBtn.textContent = '☀️';
  }
 
  temaBtn.addEventListener('click', () => {
    dark = !dark;
    document.body.classList.toggle('dark', dark);
    temaBtn.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('tema', dark ? 'dark' : 'light');
  });
}
