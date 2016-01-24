'use strict'

todoList = document.getElementById 'todo-list'
todoFrom = document.getElementById 'todo-form'
todoInput = document.querySelector '#todo-form input'

deleteItem = (event) ->
  todoList.removeChild event.target.parentElement

addItem = (event) ->
  event.preventDefault()

  if !todoInput.value then return

  checkbox = document.createElement 'input'
  checkbox.type = 'checkbox'

  span = document.createElement 'span'
  span.textContent = todoInput.value

  label = document.createElement 'label'
  label.appendChild checkbox
  label.appendChild span

  deleteButton = document.createElement 'button'
  deleteButton.textContent = '削除'
  deleteButton.addEventListener 'click', deleteItem

  listItem = document.createElement 'li'
  listItem.appendChild label
  listItem.appendChild deleteButton
  todoList.appendChild listItem

  todoInput.value = ''

todoFrom.addEventListener 'submit', addItem
