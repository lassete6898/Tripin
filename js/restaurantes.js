function search() {
    var search = document.getElementById("search").value;
    var start = document.getElementById("start").value;
    var guests = document.getElementById("guests").value;

    if (search.length == 0) {
        window.alert("¡Rellena todos los campos!");
    } else if (start.length == 0) {
        window.alert("¡Rellena todos los campos!");
    } else if (guests.length == 0) {
        window.alert("¡Rellena todos los campos!");
    } else {
        window.location.href = "busquedaRestaurantes.html";
    }
}
