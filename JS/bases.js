const footer = document.createElement('footer');
footer.innerHTML = `
  <p>Buenos Aires, Temperley, Argentina. @2024 Florencia Paz. Todos los derechos reservados.</p>
  <h2>Seguime en mis redes</h2>
  <div class="contenedor-redes-sociales">
    <a href="https://www.instagram.com/fm.clasesdecanto/" target="_blank">
      <img src="/IMG/instagram-removebg-preview.png" alt="Instagram" class="icono-red-social" />
    </a>
    <a href="https://www.tiktok.com/@fmflorenciam" target="_blank">
      <img src="/IMG/tiktok-removebg-preview.png" alt="TikTok" class="icono-red-social" />
    </a>
    <a href="https://www.facebook.com/florenciamusica" target="_blank">
      <img src="/IMG/Facebook-Logo-removebg-preview.png" alt="Facebook" class="icono-red-social" />
    </a>
     <a href="https://api.whatsapp.com/send?phone=5491131967110" target="_blank" class="whatsapp" aria-label="WhatsApp">
      <img src="/IMG/whatsapp-png-wazapp-logo-whats-whatsapp-logo-whatsapp-icon-2050-removebg-preview.png" alt="WhatsApp" class="icono-red-social" />
    </a>
  </div>
`;
document.getElementById('root').appendChild(footer);
