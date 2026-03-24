//navigate to dashobard if login successful
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1234") {
    // runs if condition is true
    window.location.href = "dashboard.html";
  } else {
    // runs if condition is false
    alert("Invalid login");
  }
}