let toDoList = [];
function addToDoList (selector) {
  const inputElement = document.querySelector(selector);

  toDoList.push(inputElement.value);
  inputElement.value = '';
  
  if (selector === '.js-todo-input1') {
    console.log(toDoList);
  } else if (selector === '.js-todo-input2') {
    document.querySelector('.js-todo-name').innerHTML = toDoList;
  }

}