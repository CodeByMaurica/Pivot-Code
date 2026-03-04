let age = 17;

if (age <= 17) {
  alert("You are an adult");
} else {
  alert("You are under 18");
}

let testPassword = prompt("Enter your password.");
const databasePassword = "abc123";

if (testPassword === databasePassword) {
  alert("welcome to you account")
} else {
  alert("Error: wrong information")
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

  const food1 = "apple";
  const food2 = "pear";
  const food3 = "grapes";

  const food4 = "water"
  // array
  let fruits = ["apple", "pear", "grapes", "kiwi"];
  fruits[1] = "orange";

  fruits.push("banana");
  fruits[2] = "mango";

  let list = document.getElementById("fruitList");

  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    list.appendChild(li);
  }
  // console.log(fruits.length)
  // console.log(fruits[0]);
  // console.log(fruits[1]);
  // console.log(fruits[2]);
  // console.log(fruits[3]);

  for (let i = 0; i < fruits.length; i += 2) {
    console.log(fruits[i]);
  }

  const fruitInput = document.getElementById("fruitInput");
const addBtn = document.getElementById("addBtn");
const fruitList = document.getElementById("fruitList");

  addBtn.addEventListener("click", addFruit);

  function addFruit() {
    const fruit = fruitInput.value;

    fruits.push(fruit);

    renderList();

    fruitInput.value = "";
  }

  function renderList() {
    fruitList.innerHTML = "";

    for (let i = 0; i < fruits.length; i++) {
      const li = document.createElement("li");
      li.textContent = fruits[i];
      fruitList.appendChild(li);
    }
  }

  function sayHello() {
    alert("Hello");
  }