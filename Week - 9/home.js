if (window.location.pathname.includes("home.html")) {
// get everything after ?
const params = new URLSearchParams(window.location.search);
// look for the one called "email"
const email = oarams. get("email");

document.getElementById("welcomeMessage").textContent = email;
}

// check if we are on the home screen
// get tge variable (parameter)from url
// display it on our page