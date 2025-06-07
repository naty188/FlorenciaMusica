document.addEventListener('DOMContentLoaded', () => {
  // Detecta la ruta base para links e imágenes
  const basePath = window.location.pathname.startsWith('/HTML/') ? '../' : '';

  // Contenedor raíz donde se inyectará header y footer
  const root = document.getElementById('root');

  // CREAR HEADER con botón hamburguesa y navbar
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

  const hamburgerBtn = header.querySelector('.hamburger');
  const navbar = header.querySelector('.navbar');

  // Función que muestra/oculta el menú hamburguesa según el tamaño de pantalla
  function handleResize() {
    if (window.innerWidth <= 768) {
      hamburgerBtn.style.display = 'block';
      // Oculto menú al cargar en móvil si no está activo
      if (!navbar.classList.contains('active')) {
        navbar.style.display = 'none';
      }
    } else {
      hamburgerBtn.style.display = 'none';
      navbar.style.display = 'flex'; // visible siempre en desktop
      navbar.classList.remove('active');
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);

  // Evento click para toggle menú hamburguesa
  hamburgerBtn.addEventListener('click', () => {
    if (navbar.style.display === 'flex' || navbar.style.display === 'block') {
      navbar.style.display = 'none';
      navbar.classList.remove('active');
    } else {
      navbar.style.display = 'flex';
      navbar.classList.add('active');
    }
  });

  // CREAR FOOTER dinámico con redes sociales
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
