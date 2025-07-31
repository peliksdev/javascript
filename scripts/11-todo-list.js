let toDoList = [];

function addToDoList () {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  toDoList.push(name);
  inputElement.value = '';
  console.log(toDoList);
}

let toDoList2 = [];
let dateList = [];
renderTodoList();

function addToDoList2 () {
  const inputElement = document.querySelector('.js-todo-input2');
  const inputDateElement = document.querySelector('.js-date');
  const name = inputElement.value;
  const date = inputDateElement.value;

  toDoList2.push(name);
  dateList.push(date);
  inputElement.value = '';
  inputDateElement.value = '';
  renderTodoList();
}

function renderTodoList () {
  let todoHTML = '';
  for (let i = 0; i < toDoList2.length && i < dateList.length; i++) {
    const todo = toDoList2[i];
    const date = dateList[i];
    const html = `<p>${todo} 

                  <span>
                    ${date}
                  </span>

                  <button class="js-delete-btn"
                  onclick = "deleteTask(${i});">Delete</button>

                  </p>`;
    todoHTML += html;
  }

  document.querySelector('.js-todo-container').innerHTML = todoHTML;
}

function deleteTask (index) {
  toDoList2.splice(index,1);
  renderTodoList();
}