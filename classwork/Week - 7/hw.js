// track how many times buttons are clicked
let clickCount = 0;


// function for the Say Hello button
function sayHello() {

  const nameInput = document.getElementById("name-input");
  const output = document.getElementById("output-text");

  clickCount = clickCount + 1;

  console.log("Button clicks: " + clickCount);


  if (nameInput.value === "") {

    output.textContent = "Please enter your name.";

  } else {

    output.textContent = "Hello " + nameInput.value + "!";

  }

}



// function for the Show Color button
function showColor() {

  const colorInput = document.getElementById("color-input");
  const output = document.getElementById("output-text");

  clickCount = clickCount + 1;

  console.log("Button clicks: " + clickCount);


  if (colorInput.value === "") {

    output.textContent = "Please enter your favorite color.";

  } else {

    document.body.style.backgroundColor = colorInput.value;

    output.textContent =
      "The page background changed to " + colorInput.value + ".";

  }

}