// Seleccionamos el contenedor root
const root = document.getElementById('root');

// Header
const header = document.createElement('header');
header.innerHTML = `
  <img class="logo-index" src="../IMG/FM_4B-removebg-preview.png" />

  <nav class="navbar">
    <a href="../index.html">Inicio</a>
    <a href="galeria.html">Galería</a>
    <a href="contacto.html">Contacto</a>
  </nav>
`;
root.appendChild(header);

// Main
const main = document.createElement('main');
main.innerHTML = `
  <div class="container">

   
<!-- Ticket 2024 -->
  <img src="../IMG/ticket2024.png" alt="Ticket 2024" class="ticket-img" />
  
  <br></br>
  <br></br>
    <div class="grid-galeria">
  <img src="../IMG/fotolu.jpg" alt="Alumno 2" class="img__fotos" />
  <img src="../IMG/aixa.jpg" alt="Alumno 3" class="img__fotos" />
  <img src="../IMG/alma.jpg" alt="Alumno 4" class="img__fotos" />
  <img src="../IMG/belen.jpg" alt="Alumno 5" class="img__fotos" />
  <img src="../IMG/camila.jpg" alt="Alumno 6" class="img__fotos" />
  <img src="../IMG/kiara.jpg" alt="Alumno 7" class="img__fotos" />
  <img src="../IMG/leandro.jpg" alt="Alumno 8" class="img__fotos" />
  <img src="../IMG/juliana.jpg" alt="Alumno 9" class="img__fotos" />
  <img src="../IMG/matias.jpg" alt="Alumno 10" class="img__fotos" />
  <img src="../IMG/patricia.jpg" alt="Alumno 11" class="img__fotos" />
 </div>

 <br></br>

  <!-- Ticket 2023 -->
  <img src="../IMG/ticket2023.png" alt="Ticket 2023" class="ticket-img" />

  <br></br>
  <br></br>
  <div class="grid-galeria">
  <img src="../IMG/IMG9033.jpg" alt="Alumno 12" class="img__fotos" />
  <img src="../IMG/IMG_9004.jpg" alt="Alumno 13" class="img__fotos" />
  
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
`;
root.appendChild(main);


