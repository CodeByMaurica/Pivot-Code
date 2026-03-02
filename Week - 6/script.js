console.log("JS is working!");

const name = "leo";
let food = "apple";
food = "pizza";

function sayHello() {
  alert("Hello " + name);
}


function loginHandler() {
  const nameInput = document.getElementById("name-input");
  const emailInput = document.getElementById("email-input");
  console.log("Your name is: " + nameInput.value);
  console.log("Your email is:" + emailInput.value);
}


function changeText() {
  const changeText = document.getElementById("change-text");

  if (changeText.textContent === "Hello") {
    changeText.textContent = "Bye!!";
  } else {
    changeText.textContent = "Hello";
  }
}

function changeColor() {
  const changeText = document.getElementById("change-text");

  if (changeText.style.color === "red") {
    changeText.style.color = "black";
  } else {
    changeText.style.color = "red";
  }
}