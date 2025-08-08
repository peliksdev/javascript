let toDoList = [];

document.querySelector('.js-add-btn')
  .addEventListener('click', () => {
    addToDoList();
  });

document.querySelector('.js-add-btn2')
  .addEventListener('click', () => {
    addToDoList2();
  });

function addToDoList () {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  toDoList.push(name);
  inputElement.value = '';
  console.log(toDoList);
}

let toDoList2 = [{
  name: 'make dinner',
  dueDate: '06-22-2004'
}];

renderTodoList();

function addToDoList2 () {
  const inputElement = document.querySelector('.js-todo-input2');
  const dateInputElement = document.querySelector('.js-date');
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  toDoList2.push({
    name,
    dueDate
  });
  
  inputElement.value = '';
  
  renderTodoList();
}

function renderTodoList () {
  let todoHTML = '';

  toDoList2.forEach( (todoObject, index) => {
    const {name} = todoObject;
    const {dueDate} = todoObject;
    const html = `<div>
                    ${name}
                  </div>

                  <div>
                    ${dueDate}
                  </div>

                  
                  <button class="js-delete-btn delete-btn"
                  >Delete</button>
                  
                  `;
    todoHTML += html;
});

  document.querySelector('.js-todo-container').innerHTML = todoHTML;

  document.querySelectorAll('.js-delete-btn')
  .forEach((deleteBtn, index) => {
    deleteBtn.addEventListener('click', () => {
      deleteTask(index);
    });
  });
}

function deleteTask (index) {
  toDoList2.splice(index,1);
  renderTodoList();
}