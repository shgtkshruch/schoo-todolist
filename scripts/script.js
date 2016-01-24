(function() {
  'use strict';
  var addItem, render, todoFrom, todoInput, todoList, todos;

  todos = JSON.parse(localStorage.getItem('todos')) || [];

  todoList = document.getElementById('todo-list');

  todoFrom = document.getElementById('todo-form');

  todoInput = document.querySelector('#todo-form input');

  render = function() {
    todoList.innerHTML = '';
    return todos.forEach(function(todo) {
      var checkbox, deleteButton, label, listItem, span;
      checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      if (todo.done) {
        checkbox.checked = true;
      }
      checkbox.addEventListener('change', function(event) {
        todo.done = event.target.checked;
        return render();
      });
      span = document.createElement('span');
      span.textContent = todo.text;
      label = document.createElement('label');
      label.appendChild(checkbox);
      label.appendChild(span);
      deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.addEventListener('click', function(event) {
        var index;
        index = todos.indexOf(todo);
        if (todos[index]) {
          todos.splice(index, 1);
          return render();
        }
      });
      listItem = document.createElement('li');
      listItem.appendChild(label);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
      return localStorage.setItem('todos', JSON.stringify(todos));
    });
  };

  addItem = function(event) {
    event.preventDefault();
    if (!todoInput.value) {
      return;
    }
    todos.push({
      text: todoInput.value,
      done: false
    });
    render();
    return todoInput.value = '';
  };

  todoFrom.addEventListener('submit', addItem);

  render();

}).call(this);
