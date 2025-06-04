document.addEventListener('DOMContentLoaded', () => {
 const basePath = window.location.pathname.startsWith('/HTML/') ? '../' : '';


  const root = document.getElementById('root');

  // Header con botón hamburguesa y navbar
  const header = document.createElement('header');
  header.innerHTML = `
    <button class="hamburger" aria-label="Menú">&#9776;</button>
    <nav class="navbar">
      <a href="${basePath}index.html">Inicio</a>
      <a href="${basePath}HTML/galeria.html">Galería</a>
      <a href="${basePath}HTML/contacto.html">Contacto</a>
    </nav>
  `;

  root.appendChild(header);

  const hamburgerBtn = header.querySelector('.hamburger');
  const navbar = header.querySelector('.navbar');

  // Mostrar/Ocultar navbar solo en móvil y esconder en desktop
  function handleResize() {
    if (window.innerWidth <= 768) {
      hamburgerBtn.style.display = 'block';
      navbar.classList.remove('active'); // Ocultar menú al cambiar tamaño
    } else {
      hamburgerBtn.style.display = 'none';
      navbar.classList.remove('active'); // Mostrar menú siempre en desktop (CSS lo hace)
    }
  }

  handleResize();
  window.addEventListener('resize', handleResize);

  hamburgerBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Footer dinámico
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
