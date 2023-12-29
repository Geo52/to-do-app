const inputForm = document.querySelector("form");
const taskList = document.querySelector(".task-list");
const inputBox = document.querySelector(".input-box");
const clearAllBtn = document.querySelector(".clear-all-btn");

document.addEventListener("DOMContentLoaded", getToDos);
clearAllBtn.addEventListener("click", clearAllTasks);
inputForm.addEventListener("submit", addToDo);
taskList.addEventListener("click", deleteToDo);

function clearAllTasks(){
  
}

// renders tasks
function getToDos() {
  let todos;

  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    const newListItem = document.createElement("li");

    newListItem.textContent = todo;

    taskList.appendChild(newListItem);
  });
}

function deleteToDo(e) {
  deleteLocalTask(e.target.textContent);
  e.target.remove();
}

function deleteLocalTask(todoToBeDeleted) {
  const tasksArray = JSON.parse(localStorage.getItem("todos"));

  // look for task to be deleted in tasks array
  for (let i = 0; i < tasksArray.length; i++) {
    let task = tasksArray[i];

    if (task === todoToBeDeleted) {
      // delete the task
      tasksArray.splice(i, 1);
    }
  }
  localStorage.setItem("todos", JSON.stringify(tasksArray));
}

function saveLocalTasks(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addToDo(e) {
  e.preventDefault();

  //gets the text inputted
  const inputTaskText = inputBox.value;
  console.log(inputTaskText);

  // creates new list item
  const newListItem = document.createElement("li");

  // adds the text inputted to the new list item
  newListItem.textContent = inputTaskText;

  // adds new li with input text inside
  taskList.appendChild(newListItem);

  saveLocalTasks(inputTaskText);

  // clear to do input box
  inputBox.value = "";
}
