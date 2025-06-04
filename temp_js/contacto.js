document.getElementById('contactoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const consulta = this.consulta.value.trim();
  const boton = this.querySelector('button[type="submit"]');

  if (!nombre || !email || !consulta) {
    // Mostrar solo Toastify y NO alert nativo
    Toastify({
      text: "Por favor, complete todos los datos.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      backgroundColor: "#0c4f5f", // azul petróleo
      stopOnFocus: true,
      style: {
        borderRadius: "8px",
        fontWeight: "600",
        fontFamily: "'Abel', sans-serif",
      },
    }).showToast();
    return; // No seguir con el submit
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
          backgroundColor: "#0c4f5f", // azul petróleo
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
