function booking() {
    window.alert("¡Reserva realizada correctamente!")
}

function search() {
    var input = document.getElementById("search").value;

    if (input.length == 0) {
        window.alert("¡Rellena todos los campos!");
    } else {
        window.location.href = "busqueda.html";
      }
}
