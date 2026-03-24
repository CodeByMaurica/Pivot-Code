// GET THE HTML ELEMENTS WE NEED
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// START WITH AN EMPTY TASK ARRAY
const tasks = [];

// WHEN THE ADD TASK BUTTON IS CLICKED, RUN addTask()
addTaskBtn.addEventListener("click", addTask);

// FUNCTION TO ADD A NEW TASK
function addTask() {
  // GET THE TEXT THE USER TYPED AND REMOVE EXTRA SPACES
  const taskText = taskInput.value.trim();

  // IF THE INPUT IS EMPTY, STOP THE FUNCTION
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // ADD THE NEW TASK AS AN OBJECT INSIDE THE ARRAY
  tasks.push({
    text: taskText,
    completed: false
  });

  // CLEAR THE INPUT BOX AFTER ADDING
  taskInput.value = "";

  // RE-DRAW THE TASKS ON THE SCREEN
  renderTasks();
}

// FUNCTION TO SHOW ALL TASKS ON THE PAGE
function renderTasks() {
  // CLEAR THE TASK LIST FIRST
  taskList.innerHTML = "";

  // LOOP THROUGH THE TASK ARRAY
  tasks.forEach(function (task, index) {
    // CREATE THE MAIN TASK ITEM DIV
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    // CREATE THE TASK TEXT
    const taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = task.text;

    // IF THE TASK IS COMPLETED, ADD THE completed CLASS
    if (task.completed) {
      taskText.classList.add("completed");
    }

    // CREATE THE BUTTON WRAPPER
    const taskButtons = document.createElement("div");
    taskButtons.classList.add("task-buttons");

    // CREATE THE COMPLETE BUTTON
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";

    // WHEN COMPLETE IS CLICKED, TOGGLE THE COMPLETED VALUE
    completeBtn.addEventListener("click", function () {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });

    // CREATE THE DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // WHEN DELETE IS CLICKED, REMOVE THE TASK FROM THE ARRAY
    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);
      renderTasks();
    });

    // PUT THE BUTTONS INSIDE THE BUTTON WRAPPER
    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);

    // PUT THE TEXT AND BUTTONS INSIDE THE TASK ITEM
    taskItem.appendChild(taskText);
    taskItem.appendChild(taskButtons);

    // PUT THE TASK ITEM INSIDE THE TASK LIST
    taskList.appendChild(taskItem);
  });

  // UPDATE THE TASK COUNT TEXT
  taskCount.textContent = "Tasks: " + tasks.length;
}

// LISTEN FOR KEY PRESS ON INPUT
taskInput.addEventListener("keydown", function (event) {

  // CHECK IF THE KEY PRESSED IS "ENTER"
  if (event.key === "Enter") {

    // PREVENT PAGE REFRESH (IMPORTANT)
    event.preventDefault();

    // RUN THE SAME FUNCTION AS THE BUTTON
    addTask();
  }
});

// QUIZ QUESTIONS ARRAY
// each object has a question and its correct answer
const quizQuestions = [
  {
    question: "What is 2 + 2?",
    answer: "4"
  },
  {
    question: "What is 5 + 3?",
    answer: "8"
  },
  {
    question: "What color is the sky on a clear day?",
    answer: "blue"
  }
];

// TRACK WHICH QUESTION WE ARE ON
let currentQuestionIndex = 0;

// TRACK THE SCORE
let score = 0;

// GET QUIZ HTML ELEMENTS
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const resultMessage = document.getElementById("resultMessage");
const scoreText = document.getElementById("scoreText");

// SHOW THE FIRST QUESTION WHEN PAGE LOADS
showQuestion();

// WHEN SUBMIT BUTTON IS CLICKED, CHECK THE ANSWER
submitAnswerBtn.addEventListener("click", checkAnswer);

// WHEN NEXT QUESTION BUTTON IS CLICKED, GO TO NEXT QUESTION
nextQuestionBtn.addEventListener("click", nextQuestion);

// FUNCTION TO SHOW THE CURRENT QUESTION
function showQuestion() {
  // put the current question text on the page
  questionText.textContent = quizQuestions[currentQuestionIndex].question;

  // clear the input box
  answerInput.value = "";

  // clear old result message
  resultMessage.textContent = "";

  // put cursor back into input
  answerInput.focus();
}

// FUNCTION TO CHECK THE USER'S ANSWER
function checkAnswer() {
  // get what the user typed and make it lowercase
  const userAnswer = answerInput.value.trim().toLowerCase();

  // get the correct answer and make it lowercase
  const correctAnswer = quizQuestions[currentQuestionIndex].answer.toLowerCase();

  // if the input is blank, show message and stop
  if (userAnswer === "") {
    resultMessage.textContent = "Please enter an answer.";
    resultMessage.style.color = "red";
    return;
  }

  // if answer is correct
  if (userAnswer === correctAnswer) {
    resultMessage.textContent = "Correct!";
    resultMessage.style.color = "green";

    // add 1 to score
    score++;

    // update score text on screen
    scoreText.textContent = "Score: " + score;
  } else {
    // if answer is wrong
    resultMessage.textContent = "Wrong!";
    resultMessage.style.color = "red";
  }
}

// FUNCTION TO GO TO THE NEXT QUESTION
function nextQuestion() {

  // increase the question index by 1
  // (moves to the next question in the array)
  currentQuestionIndex++;

  // check if we went past the last question
  if (currentQuestionIndex >= quizQuestions.length) {

    // if yes, reset back to the first question (index 0)
    currentQuestionIndex = 0;
  }

  // display the new current question on the screen
  showQuestion();
}


// ---- LOGOUT FUNCTION ----
function logout() {

  // redirect the user to the login page
  // (this should be your login file, not dashboard)
  window.location.href = "index.html";
}

