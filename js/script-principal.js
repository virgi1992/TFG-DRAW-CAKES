function login() {
  let user, password;
  user = document.getElementById("usuario").value;
  password = document.getElementById("contraseña").value;

  if (user == "usuario" && password == "123456") {
    window.location = "index-principal.html";
  } else {
    alert("datos incorrectos");
  }
}
