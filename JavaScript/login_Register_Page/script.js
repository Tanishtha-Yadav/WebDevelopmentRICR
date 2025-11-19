function login() {
  console.log("Login Button Clicked");

  const em = document.getElementById("loginEmail").value;
  const ps = document.getElementById("LoginPassword").value;
  console.log("Email: " + em);
  console.log("password: " + ps);

  alert("Login Done");

  document.getElementById("loginEmail").value = " ";
  document.getElementById("LoginPassword").value = " ";
}

function registration() {
  console.log("Registration Button Clicked");

  const nm = document.getElementById("name").value;
  const em2 = document.getElementById("mail1").value;
  const ps1 = document.getElementById("pass1").value;
  const ps2 = document.getElementById("pass2").value;

  alert("Registeration Done");

  document.getElementById("name").value=" ";
  document.getElementById("mail1").value=" ";
  document.getElementById("pass1").value=" ";
  document.getElementById("pass2").value=" ";
}
