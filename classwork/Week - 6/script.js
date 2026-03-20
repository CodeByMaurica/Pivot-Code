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
  console.log("Your email is: " + emailInput.value);
}

function changeText() {
  const changeText = document.getElementById("change-text");
  changeText.textContent = "Bye!!!";
}

function changeColor() {
  const changeText = document.getElementById("change-text");

  if (changeText.style.color === "red") {
    changeText.style.color = "black";
  } else {
    changeText.style.color = "red";
  }
}

function addTask() {
  const input = document.getElementById("task");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText + " "; // add space before delete button

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function() {
    li.remove(); // remove this <li> from the list
  };

  li.appendChild(deleteBtn); // attach delete button to the <li>
  document.getElementById("taskList").appendChild(li);

  input.value = ""; // clear input
}

// Optional: For pre-existing items
function deleteTask(btn) {
  btn.parentElement.remove();
}