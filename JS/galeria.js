// Seleccionamos el contenedor root
const root = document.getElementById('root');

// Header con logo, botón hamburguesa y navbar
const header = document.createElement('header');
header.innerHTML = `
  <img class="logo-index" src="../img/FM_4B-removebg-preview.png" alt="Logo" />

  <button class="hamburger" aria-label="Menú">&#9776;</button>

  <nav class="navbar">
    <a href="../index.html">Inicio</a>
    <a href="galeria.html">Galería</a>
    <a href="contacto.html">Contacto</a>
  </nav>
`;
root.appendChild(header);

const hamburgerBtn = header.querySelector('.hamburger');
const navbar = header.querySelector('.navbar');

function handleResize() {
  if (window.innerWidth <= 768) {
    // En móvil el botón hamburguesa se muestra por CSS
    // Ocultamos menú al redimensionar
    navbar.classList.remove('active');
  } else {
    // En desktop el botón hamburguesa se oculta por CSS
    navbar.classList.remove('active'); // menú visible siempre por CSS
  }
}

handleResize();
window.addEventListener('resize', handleResize);

hamburgerBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Main con contenido de galería
const main = document.createElement('main');
main.innerHTML = `
  <div class="container">

    <!-- Ticket 2024 -->
    <img src="../img/ticket2024.jpg" alt="Ticket 2024" class="ticket-img" />
    <br><br>

    <div class="grid-galeria">
      <img src="../img/fotolu.webp" alt="Alumno 2" class="img__fotos" />
      <img src="../img/aixa.webp" alt="Alumno 3" class="img__fotos" />
      <img src="../img/alma.webp" alt="Alumno 4" class="img__fotos" />
      <img src="../img/belen.webp" alt="Alumno 5" class="img__fotos" />
      <img src="../img/camila.webp" alt="Alumno 6" class="img__fotos" />
      <img src="../img/kiara.webp" alt="Alumno 7" class="img__fotos" />
      <img src="../img/leandro.webp" alt="Alumno 8" class="img__fotos" />
      <img src="../img/juliana.webp" alt="Alumno 9" class="img__fotos" />
      <img src="../img/matias.webp" alt="Alumno 10" class="img__fotos" />
      <img src="../img/patricia.webp" alt="Alumno 11" class="img__fotos" />
      <img src="../img/valentina.webp" alt="Alumno 11" class="img__fotos" />
    </div>

    <br><br>

    <!-- Ticket 2023 -->
    <img src="../img/ticket2023.jpg" alt="Ticket 2023" class="ticket-img" />
    <br><br>

    <div class="grid-galeria">
      <img src="../img/IMG9033.webp" alt="Alumno 12" class="img__fotos" />
      <img src="../img/IMG_9004.webp" alt="Alumno 13" class="img__fotos" />
    </div>

    <div class="column_Videos">
      <iframe
        src="https://www.youtube.com/embed/MuwDTXpZIj0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="img__videos"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/Ju1-tC9ih-s?si=qrhQcY-erH2PZ7HM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="img__videos"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/2Givdd2tCBA?si=MQiWkbWXptdwhZ1d"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="img__videos"
      ></iframe>

      <iframe
        src="https://www.youtube.com/embed/HGPaBazhuB4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="img__videos"
      ></iframe>
    </div>
  </div>
`;
root.appendChild(main);
