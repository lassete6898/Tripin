function closeSession() {
  swal({
    title: "Cerrar Sesión",
    text: "¡Sesión cerrada correctamente!",
    icon: "success",
    timer: 1500,
  }).then(function () {
    window.location = "login.html";
  });
}

function deleteBooking() {
  swal({
    title: "¿Estás seguro de que deseas cancelar la reserva?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("¡Reserva cancelada correctamente!", {
        icon: "success",
      });
    }
  });
}

function booking1() {
  swal({
    title: "Hotel Riu Plaza España",
    text: "A continuación se muestran los detalles de su reserva: \n\n Número de huéspedes: 2 \n Fecha de inicio: 25/05/2021 \n Fecha de fin: 25/06/2021",
    icon: "info",
  });
}

function booking2() {
  swal({
    title: "Restaurante Casa Dani",
    text: "A continuación se muestran los detalles de su reserva: \n\n Número de comensales: 2 \n Fecha: 25/06/2021",
    icon: "info",
  });
}

function booking3() {
  swal({
    title: "Eurostars Madrid Tower",
    text: "A continuación se muestran los detalles de su reserva: \n\n Número de huéspedes: 2 \n Fecha de inicio: 25/06/2021 \n Fecha de fin: 25/07/2021",
    icon: "info",
  });
}

function dislike() {
  swal({
    text: "¡Eliminado de favoritos!",
    icon: "success",
  });
}