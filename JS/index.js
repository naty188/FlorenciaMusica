document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const header = document.createElement('header');
  header.innerHTML = `
    <img class="logo-index" src="IMG/FM_4B-removebg-preview.png" alt="Logo de Florencia Música" />
    <button class="hamburger" aria-label="Menú">&#9776;</button>
    <nav class="navbar">
      <a href="index.html">Inicio</a>
      <a href="HTML/galeria.html">Galería</a>
      <a href="HTML/contacto.html">Contacto</a>
    </nav>
  `;

  const main = document.createElement('main');
  main.innerHTML = `
    <h1>Bienvenidos a Florencia Música</h1>
    <h2>Profesora de Música y canto, estudiante de Dirección Coral, Conservatorio Julián Aguirre</h2>
    <br>
    <p>Descubre la pasión por el canto y la música con Florencia Paz.</p>

    <div class="contenedor">
      <div id="galeria" class="carousel">
        <div class="carousel-inner">
          <img src="IMG/florenshow2.jpg" alt="Flor en Show 2" class="img-index" />
          <img src="IMG/florenshow4.jpg" alt="Flor en Show 4" class="img-index" />
          <img src="IMG/florenshow1.jpg" alt="Flor en Show 1" class="img-index" />
          <img src="IMG/Flor_coro-egreso.jpg" alt="Flor Coro" class="img-index" />
          <img src="IMG/Flor_coro_egreso1.jpg" alt="Flor Coro 1" class="img-index" />
          <img src="IMG/Flor_coro_egreso2.jpg" alt="Flor Coro 2" class="img-index" />
          <img src="IMG/floren.jpg" alt="Flor" class="img-index" />
          <img src="IMG/florenshow3.jpg" alt="Flor en Show 3" class="img-index" />
        </div>
      </div>
    </div>

    <div class="video">
      <iframe src="https://www.youtube.com/embed/8p3KcVdhdMI" title="Video Florencia Música" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/TEFC3qmKeDs" title="Video Florencia Música" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <iframe src="https://www.youtube.com/embed/RH2PEnRlRM4" title="Video Florencia Música" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    </div>
  `;

  root.appendChild(header);
  root.appendChild(main);

  // Aquí aseguramos que el DOM ya tiene los elementos para seleccionar
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});
