function search() {
    var input = document.getElementById("search").value;
    var start = document.getElementById("start").value;
    var guests = document.getElementById("guests").value;

    if (input.length == 0) {
        window.alert("¡Rellena todos los campos!");
    } else if (start.length == 0) {
        window.alert("¡Rellena todos los campos!");
    } else if (guests.length == 0) {
        window.alert("¡Rellena todos los campos!");
    } else {
        window.location.href = "busqueda.html";
    }
}
