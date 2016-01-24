'use strict'

todoList = document.getElementById 'todo-list'
todoFrom = document.getElementById 'todo-form'
todoInput = document.querySelector '#todo-form input'

addItem = (event) ->
  event.preventDefault()

  if !todoInput.value then return

  listItem = document.createElement 'li'
  listItem.textContent = todoInput.value
  todoList.appendChild listItem

  todoInput.value = ''

todoFrom.addEventListener 'submit', addItem
