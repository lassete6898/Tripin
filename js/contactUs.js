function contactar() {
    swal({
      title: "¿Enviar formulario?",
      icon: "info",
      buttons: true,
      dangerMode: false,
    }).then((willSend) => {
      if (willSend) {
        swal("¡Formulario enviado correctamente!", {
          icon: "success",
        });
      }
    });
  }