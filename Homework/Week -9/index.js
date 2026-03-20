//navigate to dashobard if login successful
function login() {
    const user = document.getElementById("username");
const pass = document.getElementById("Password");
if (user === "admin" && pass === "1234") {
  // runs if condition is true
  window.location.href = "dashboard.html";
} else {
  // runs if condition is false
   alert("Invalid login");
}
}