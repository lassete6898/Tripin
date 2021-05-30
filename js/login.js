function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.length == 0 && password.length == 0) {
    window.alert("Introduce el email y la contraseña");
  } else if (email.length == 0) {
    window.alert("Introduce el email");
  } else if (password.length == 0) {
    window.alert("Introduce la contraseña");
  } else {
    window.location.href = "user.html";
  }
}
