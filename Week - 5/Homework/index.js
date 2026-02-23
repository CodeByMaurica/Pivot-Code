const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
let clickCount = 0;
console.log("script.js loaded!");
function sayHello() {
      clickCount = clickCount + 1;
        const name = nameInput.value;
          console.log("Say Hello clicked. Count:", clickCount);
            alert("Hello, " + name + "!");
            }

          function showInfo() {
            clickCount = clickCount + 1;
              const name = nameInput.value;
              const email = emailInput.value;
              console.log("Show Info clicked. Count:", clickCount);
              alert("Name: " + name + "\nEmail: " + email);
              }