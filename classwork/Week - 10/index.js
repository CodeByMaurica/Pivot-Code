// Fixed credentials
const myName = "Maurica";
const myPass = "123123";

// Login function
function Login() {
    // 1. Get user input
    const typedName = document.getElementById("username").value.trim();
    const typedPass = document.getElementById("password").value;

    // 2. Check if input matches fixed credentials
    if (typedName.toLowerCase() === myName.toLowerCase() && typedPass === myPass) {

        // 3. Save username and password in localStorage
        localStorage.setItem("username", typedName);
        localStorage.setItem("password", typedPass);

        // 4. Show welcome message
        document.getElementById("result").textContent = "Login successful! Welcome, " + typedName + "!";

        // 5. Hide login form
        document.getElementById("username").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.querySelector("button").style.display = "none";

        // 6. Show logout button
        document.getElementById("logoutBtn").style.display = "inline-block";

    } else {
        document.getElementById("result").textContent = "Wrong name or password";
    }
}

// Reload function: check stored username/password
window.onload = function () {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    // 1. If both exist and match fixed credentials
    if (
        savedUsername && 
        savedPassword &&
        savedUsername.toLowerCase() === myName.toLowerCase() &&
        savedPassword === myPass
    ) {
        document.getElementById("result").textContent = "Welcome back, " + savedUsername + "!";

        // Hide login form
        document.getElementById("username").style.display = "none";
        document.getElementById("password").style.display = "none";
        document.querySelector("button").style.display = "none";

        // Show logout button
        document.getElementById("logoutBtn").style.display = "inline-block";
    }
}

// Logout function
function Logout() {
    // 1. Remove stored username/password
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    // 2. Reset form
    document.getElementById("username").style.display = "inline-block";
    document.getElementById("password").style.display = "inline-block";
    document.querySelector("button").style.display = "inline-block";

    // 3. Hide logout button
    document.getElementById("logoutBtn").style.display = "none";

    // 4. Clear message
    document.getElementById("result").textContent = "";
}