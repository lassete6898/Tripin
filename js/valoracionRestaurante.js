function booking() {
  swal({
    title: "¿Estás seguro de que deseas realizar la siguiente reserva?",
    text: "Fecha: 25/05/2021 \n Comensales: 2",
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
    text: "¡Restaurante añadido a favoritos!",
    icon: "success",
  });
}
