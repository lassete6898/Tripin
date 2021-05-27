function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  //   window.alert(email, password);

  if (email.length == 0) {
    window.alert("Introduce el email");
  } else if (password.length == 0) {
    window.alert("Introduce la contraseña");
  } else {
    location.href="user.html";
  }
}
