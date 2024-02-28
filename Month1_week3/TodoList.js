// Selecting DOM elements
const btn = document.querySelector('.btn');
const del = document.querySelector('.del');
const idxnum = document.querySelector('.idxnum');
const index = document.querySelector('.index');
const editbtn = document.querySelector('.editbtn');
const todoInput = document.getElementById('Todo');
const deletedTxtInput = document.querySelector('.deleted_txt');
const editTxtInput = document.getElementById('edittxt');
const listsContainer = document.querySelector('.lists');

// Array to store todo items
let todoList = [];

// Event listener for adding a new todo
btn.addEventListener('click', function () {
  let todoText = todoInput.value;

  if (todoText.trim() !== '') {
    let newTodo = document.createElement('p');
    newTodo.textContent = "✔️ " + todoText;
    listsContainer.appendChild(newTodo);
    todoInput.value = '';
    todoList.push(newTodo.textContent);
  }
});

// Event listener for deleting a todo
del.addEventListener('click', function () {
  let delText = "✔️ " + deletedTxtInput.value;

  todoList.forEach((todo, index) => {
    if (todo === delText) {
      listsContainer.children[index].textContent = '';
    }
  });

  deletedTxtInput.value = '';
});

// Event listener for setting the index number
idxnum.addEventListener('click', function () {
    indexNumber = Number(index.value);
});

// Event listener for editing a todo
editbtn.addEventListener('click', function () {
  let editedText = "✔️ " + editTxtInput.value;

  if (indexNumber >= 0 && indexNumber < todoList.length) {
    todoList[indexNumber] = editedText;
    listsContainer.children[indexNumber].textContent = editedText;
  }

  editTxtInput.value = '';
});
