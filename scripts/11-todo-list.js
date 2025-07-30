let toDoList = [];
function addToDoList () {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  toDoList.push(name);
  inputElement.value = '';
  console.log(toDoList);
}