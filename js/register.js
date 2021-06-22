function register() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var passwordConfirm = document.getElementById("passwordConfirm").value;

  if (name.length == 0 && surname.length == 0 && email.length == 0 && password.length == 0) {
    swal({
      text: "¡Rellena todos los campos!",
      icon: "error",
    });
  } else if (password != passwordConfirm) {
    swal({
      text: "¡Las contraseñas no coinciden!",
      icon: "error",
    });
  } else {
    window.location.href = "user.html";
  }
}
