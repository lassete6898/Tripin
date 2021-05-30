function register() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordConfirm = document.getElementById("passwordConfirm").value;

    if (password.length == 0 && passwordConfirm.length == 0) {
        window.alert("Introduce una contraseña")
    } else if (password != passwordConfirm) {
        window.alert("Las contraseñas no coinciden")
    } else {
        window.location.href = 'user.html';
    }
}
