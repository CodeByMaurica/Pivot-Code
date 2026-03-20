// Code ROR INDEX
const form = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();


    // if fields are blank
  if (email === "" || password === "" || confirmPassword === "") {
    errorMessage.textContent = "All fields are required.";
    return;
  }

  // email length check (3-30)
  if (email.length < 3 || email.length > 30) {
    errorMessage.textContent = "Email must be between 3 and 30 characters.";
    return;
  }

  // make sure email has @ and ends with .com
  if (!email.includes("@") || !email.endsWith(".com")) {
    errorMessage.textContent = "Email must contain '@' and end with '.com'.";
    return;
  }

    // password length check
     if (password.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters.";
    return;
  }

  // confirm password match
  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match.";
    return;
  }

//if everything is valid
errorMessage.textContent = "";

console.log("Email:", email);
console.log("Password:", password);


  // redirect to new page
  window.location.href = "home.html?email="+ email; //change to your page
});

// CODE FOR HOME

// if were on th home screen
// get the variable (parameter) from url
// display it on our page


