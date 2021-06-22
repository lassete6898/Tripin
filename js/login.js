function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.length == 0 && password.length == 0) {
    swal({
      text: "¡Introduce el email y la contraseña!",
      icon: "error",
    });
  } else if (email.length == 0) {
    swal({
      text: "¡Introduce el email!",
      icon: "error",
    });
  } else if (password.length == 0) {
    swal({
      text: "¡Introduce la contraseña!",
      icon: "error",
    });
  } else {
    window.location.href = "user.html";
  }
}
