document.addEventListener('DOMContentLoaded', () => {
  const basePath = window.location.pathname.startsWith('/HTML/') ? '../' : '';
  const root = document.getElementById('root');

  const header = document.createElement('header');
  header.innerHTML = `
    <button class="hamburger" aria-label="Menú">&#9776;</button>
    <nav class="navbar">
      <a href="/index.html">Inicio</a>
      <a href="/HTML/galeria.html">Galería</a>
      <a href="/HTML/contacto.html">Contacto</a>
    </nav>
  `;
  root.appendChild(header);

  const main = document.createElement('main');
  main.innerHTML = `
    <img src="${basePath}IMG/FM_4B-removebg-preview.png" alt="Logo Florencia" class="logo-index" />

    <h1>Andrea Florencia Paz</h1>
    <h2>¡Bienvenidos a mi espacio musical!<h2>
    <p>Descubrí mi arte y acompañame en este viaje lleno de música.</p>
    <p>Profesora de canto, estudiante de Dirección Coral, Conservatorio Julian Aguirre.<p>

    <div class="carousel">
      <div class="carousel-inner">
        <img src="${basePath}IMG/florenshow2.jpg" alt="Show 2" />
        <img src="${basePath}IMG/florenshow3.jpg" alt="Show 3" />
        <img src="${basePath}IMG/florenshow4.jpg" alt="Show 4" />
        <img src="${basePath}IMG/floren.jpg" alt="Florencia" />
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

  // Footer
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <p>Buenos Aires, Temperley, Argentina. @2024 Florencia Paz. Todos los derechos reservados.</p>
    <h2>Seguime en mis redes</h2>
    <div class="contenedor-redes-sociales">
      <a href="https://www.instagram.com/fm.clasesdecanto/" target="_blank">
        <img src="${basePath}IMG/instagram-removebg-preview.png" alt="Instagram" class="icono-red-social" />
      </a>
      <a href="https://www.tiktok.com/@fmflorenciam" target="_blank">
        <img src="${basePath}IMG/tiktok-removebg-preview.png" alt="TikTok" class="icono-red-social" />
      </a>
      <a href="https://www.facebook.com/florenciamusica" target="_blank">
        <img src="${basePath}IMG/Facebook-Logo-removebg-preview.png" alt="Facebook" class="icono-red-social" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=5491131967110" target="_blank" class="whatsapp" aria-label="WhatsApp">
        <img src="${basePath}IMG/whatsapp-png-wazapp-logo-whats-whatsapp-logo-whatsapp-icon-2050-removebg-preview.png" alt="WhatsApp" class="icono-red-social" />
      </a>
    </div>
  `;
  root.appendChild(footer);
});
