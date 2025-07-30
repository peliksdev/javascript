let toDoList = [];
function addToDoList () {
  const inputElement = document.querySelector('.js-todo-input');

  toDoList.push(inputElement.value);
  inputElement.value = '';

  console.log(toDoList);
}