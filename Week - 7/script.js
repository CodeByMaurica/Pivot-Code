// let age = 17;

// if (age <= 17) {
//   alert("You are an adult");
// } else {
//   alert("You are under 18");
// }

// let testPassword = prompt("Enter your password.");
// const databasePassword = "abc123";

// if (testPassword === databasePassword) {
//   alert("welcome to you account")
// } else {
//   alert("Error: wrong information")
// }
const USER_PASSWORD = "abc123";
const passwordInput = document.getElementById("password-input");
const errorMessage = document.getElementById("error");

function loginHandler() {
  console.log(passwordInput.value);
  if (passwordInput.value === USER_PASSWORD) {
    errorMessage.textContent = "Welcome";
    errorMessage.style.color = "green";

    errorMessage.classList.remove("success");
    void errorMessage.offsetWidth; // forces reflow
    errorMessage.classList.add("success");
  } else {
    errorMessage.textContent = "Error: wrong message";
    errorMessage.style.color = "red";
  }
}