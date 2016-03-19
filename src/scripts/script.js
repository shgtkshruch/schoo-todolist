(() => {
  'use strict';

  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var todoList = document.getElementById('todo-list');
  var todoForm = document.getElementById('todo-form');
  var todoInput = document.querySelector('#todo-form input');

  var render = () => {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      if (todo.done) {
        checkbox.checked = true;
      }

      checkbox.addEventListener('change', (event) => {
        todo.done = event.target.checked;
        render();
      });

      var span = document.createElement('span');
      span.textContent = todo.text;

      var label = document.createElement('label');
      label.appendChild(checkbox);
      label.appendChild(span);

      var deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.addEventListener('click', (event) => {
        var index = todos.indexOf(todo);
        if (todos[index]) {
          todos.splice(index, 1);
          render();
        }
      });

      var listItem = document.createElement('li');
      listItem.appendChild(label);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);

      localStorage.setItem('todos', JSON.stringify(todos));
    });
  }

  var addItem = (event) => {
    event.preventDefault();

    if (!todoInput.value) {
      return;
    }

    todos.push({text: todoInput.value, done: false});
    render();

    todoInput.value = '';
  };

  todoForm.addEventListener('submit', addItem);
  render();

})();
