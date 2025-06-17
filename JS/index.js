document.addEventListener('DOMContentLoaded', () => {
  const basePath = window.location.pathname.startsWith('/html/') ? '../' : '';
  const root = document.getElementById('root');

  const header = document.createElement('header');
  header.innerHTML = `
    <button class="hamburger" aria-label="Menú">&#9776;</button>
    <nav class="navbar">
     <a href="${basePath}index.html">Inicio</a>
     <a href="${basePath}html/galeria.html">Galería</a>
     <a href="${basePath}html/contacto.html">Contacto</a>

    </nav>
  `;
  root.appendChild(header);

  const main = document.createElement('main');
  main.innerHTML = `
    <img src="${basePath}img/FM_4B-removebg-preview.png" alt="Logo Florencia" class="logo-index" />

    <h1>FM CLASES DE CANTO</h1>
    <h2>Profesora Andrea Florencia Paz<h2>
    <h3>¡Bienvenidos a mi espacio musical!<h3>
    <p>Descubrí mi arte y acompañame en este viaje lleno de música.</p>
    <p>Profesora de canto, estudiante de Dirección Coral, Conservatorio Julian Aguirre.<p>

    <div class="carousel">
      <div class="carousel-inner">
        <img src="${basePath}img/florenshow2.webp" alt="Show 2" />
        <img src="${basePath}img/florenshow3.webp" alt="Show 3" />
        <img src="${basePath}img/florenshow4.webp" alt="Show 4" />
        <img src="${basePath}img/floren.webp" alt="Florencia" />
        <img src="${basePath}img/Flor_coro_egreso2.webp" alt="Florencia" />
        <img src="${basePath}img/Flor_coro-egreso.webp" alt="Florencia" />
        <img src="${basePath}img/Flor_coro_egreso1.webp" alt="Florencia" />
      </div>
    </div>

    <div class="video">
      <iframe src="https://www.youtube.com/embed/8p3KcVdhdMI" frameborder="0" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/RH2PEnRlRM4" frameborder="0" allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/TEFC3qmKeDs" frameborder="0" allowfullscreen></iframe>
    </div>
  `;
  root.appendChild(main);

  const hamburgerBtn = header.querySelector('.hamburger');
  const navbar = header.querySelector('.navbar');

  function handleResize() {
    if (window.innerWidth <= 768) {
      hamburgerBtn.style.display = 'block';
      if (!navbar.classList.contains('active')) {
        navbar.style.display = 'none';
        main.classList.remove('menu-open');
      }
    } else {
      hamburgerBtn.style.display = 'none';
      navbar.style.display = 'flex';
      navbar.classList.remove('active');
      main.classList.remove('menu-open');
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);

  hamburgerBtn.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      navbar.style.display = 'none';
      main.classList.remove('menu-open');
    } else {
      navbar.classList.add('active');
      navbar.style.display = 'flex';
      main.classList.add('menu-open');
    }
  });

  navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      navbar.style.display = 'none';
      main.classList.remove('menu-open');
    });
  });

});

