function booking() {
  swal({
    title: "¿Estás seguro de que deseas realizar la siguiente reserva?",
    text: "Fecha Inicio: 25/05/2021 y Fecha Fin: 27/05/2021 \n Huéspedes: 2",
    icon: "info",
    buttons: true,
    dangerMode: false,
  }).then((willDelete) => {
    if (willDelete) {
      swal("¡Reserva realizada correctamente!", {
        icon: "success",
      });
    }
  });
}

function like() {
  swal({
    text: "¡Hotel añadido a favoritos!",
    icon: "success",
  });
}

function rating() {
  swal({
    text: "¡Comentario enviado!",
    icon: "success",
  }).then((click) => {
    if (click) {
      location.reload();
    }
  });
}
