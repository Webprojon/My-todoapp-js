// Selectors
const inputTask = document.querySelector("#input__your__task");
const addTaskBtn = document.querySelector(".add__task__btn");

const ulTasks = document.querySelector(".ul__tasks");
const header = document.querySelector(".header__task-2");
const message = document.querySelector(".send__message");
// Selectors

const tasks = [];

// Event Listeners & Functions
addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const getInputValue = inputTask.value;

  // Checking Input Value Length
  if (getInputValue.length >= 10) {
    createTaskElements(getInputValue);
  } else {
    alert("Plz Input Some Value 🤨 otherwise .... 🤬");
  }

  inputTask.value = "";
});

function createTaskElements(getInputValue) {
  // Creating Elements
  const liTask = document.createElement("li");
  liTask.classList.add("li__task");

  const enteredTask = document.createElement("div");
  enteredTask.classList.add("entered__task");

  const taskInput = document.createElement("input");
  taskInput.classList.add("each__task__input");
  taskInput.setAttribute("value", getInputValue);
  taskInput.setAttribute("readonly", "readonly");

  // Creating Buttons
  const wrapperBtns = document.createElement("div");
  wrapperBtns.classList.add("edit__del__update__btns");

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn");
  editBtn.textContent = "edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn");
  deleteBtn.textContent = "delete";

  const updateBtn = document.createElement("button");
  updateBtn.classList.add("btn");
  updateBtn.textContent = "update";
  updateBtn.setAttribute("disabled", "disabled");

  // Appending Children
  wrapperBtns.append(editBtn, updateBtn, deleteBtn);

  enteredTask.append(taskInput, wrapperBtns);

  liTask.appendChild(enteredTask);
  ulTasks.appendChild(liTask);

  // Saving all tasks to array
  tasks.push(getInputValue);

  // Header
  header.textContent = "Tasks";

  // Making changes to tasks
  editBtn.addEventListener("click", () => {
    if (editBtn.textContent == "edit") {
      taskInput.removeAttribute("readonly", "readonly");
      editBtn.textContent = "save";
      editBtn.style.color = "red";
      taskInput.focus();
    } else {
      taskInput.setAttribute("readonly", "readonly");
      editBtn.textContent = "edit";
      editBtn.style.color = "rgb(115, 38, 203)";
      message.textContent = "You have edited a task! Plz Update it 😪";
      updateBtn.removeAttribute("disabled", "disabled");
    }
  });

  updateBtn.addEventListener("click", () => {
    message.textContent = "Successfully updated 🎉";
    message.style.color = "green";
    setTimeout(() => {
      message.style.display = "none";
    }, 3000);
  });

  deleteBtn.addEventListener("click", () => {
    ulTasks.removeChild(liTask);
    tasks.pop(liTask);

    if (tasks.length == 0) {
      header.textContent = "";
    }
  });
}
// Event Listeners & Functions
