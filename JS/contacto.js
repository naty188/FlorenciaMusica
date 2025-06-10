document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  // =======================
  // CREACIÓN DEL HEADER (dinámico)
  // =======================
  if (header) {
    header.innerHTML = `
      <img class="logo" src="../IMG/FM_4B-removebg-preview.png" alt="Logo de Florencia Música" />
      <button class="hamburger" aria-label="Menú">&#9776;</button>
      <nav class="navbar">
        <a href="../index.html">Inicio</a>
        <a href="galeria.html">Galería</a>
        <a href="contacto.html" class="active">Contacto</a>
      </nav>
    `;

    // Activar menú hamburguesa
    const hamburger = header.querySelector('.hamburger');
    const navbar = header.querySelector('.navbar');
    const main = document.querySelector('main');

    if (hamburger && navbar) {
      hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        document.body.classList.toggle('menu-abierto');
        main.classList.toggle('menu-open'); 
      });

      navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navbar.classList.remove('active');
          document.body.classList.remove('menu-abierto');
        });
      });
    }
  } // <- ESTA LLAVE FALTABA AQUÍ

  // =======================
  // FORMULARIO
  // =======================
  const form = document.getElementById('contactoForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nombre = this.nombre.value.trim();
      const email = this.email.value.trim();
      const consulta = this.consulta.value.trim();
      const boton = this.querySelector('button[type="submit"]');

      if (!nombre || !email || !consulta) {
        Toastify({
          text: "Por favor, complete todos los datos.",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#0c4f5f",
          stopOnFocus: true,
          style: {
            borderRadius: "8px",
            fontWeight: "600",
            fontFamily: "'Abel', sans-serif",
          },
        }).showToast();
        return;
      }

      boton.disabled = true;

      fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          Toastify({
            text: "Su consulta ha sido recibida. ¡Gracias!",
            duration: 4000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "#0c4f5f",
            stopOnFocus: true,
            style: {
              borderRadius: "8px",
              fontWeight: "600",
              fontFamily: "'Abel', sans-serif",
            },
          }).showToast();
          this.reset();
        } else {
          throw new Error("Error en el envío");
        }
      })
      .catch(() => {
        Toastify({
          text: "Hubo un error enviando la consulta. Intente de nuevo.",
          duration: 4000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#ff4c4c",
          stopOnFocus: true,
          style: {
            borderRadius: "8px",
            fontWeight: "600",
            fontFamily: "'Abel', sans-serif",
          },
        }).showToast();
      })
      .finally(() => {
        boton.disabled = false;
      });
    });
  }
});
