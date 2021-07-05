function contactar() {
    swal({
      title: "¿Enviar formulario?",
      icon: "info",
      buttons: true,
      dangerMode: false,
    }).then((willDelete) => {
      if (willDelete) {
        swal("¡Formulario enviado correctamente!", {
          icon: "success",
        });
      }
    });
  }