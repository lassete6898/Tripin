function search() {
    var input = document.getElementById("search").value;

    if (input.length == 0) {
        swal({
            text: "¡Introduce lo que quieres buscar!",
            icon: "error",
          });
    } else {
        window.location.href = "busqueda.html";
      }
}
