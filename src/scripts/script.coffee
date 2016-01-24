'use strict'

todos = JSON.parse(localStorage.getItem 'todos') || []
todoList = document.getElementById 'todo-list'
todoFrom = document.getElementById 'todo-form'
todoInput = document.querySelector '#todo-form input'

render = ->
  todoList.innerHTML = ''
  todos.forEach (todo) ->

    checkbox = document.createElement 'input'
    checkbox.type = 'checkbox'

    if todo.done
      checkbox.checked = true

    checkbox.addEventListener 'change', (event) ->
      todo.done = event.target.checked
      render()

    span = document.createElement 'span'
    span.textContent = todo.text

    label = document.createElement 'label'
    label.appendChild checkbox
    label.appendChild span

    deleteButton = document.createElement 'button'
    deleteButton.textContent = '削除'
    deleteButton.addEventListener 'click', (event) ->
      index = todos.indexOf todo
      if todos[index]
        todos.splice index, 1
        render()

    listItem = document.createElement 'li'
    listItem.appendChild label
    listItem.appendChild deleteButton
    todoList.appendChild listItem

    localStorage.setItem 'todos', JSON.stringify todos

addItem = (event) ->
  event.preventDefault()

  if !todoInput.value then return

  todos.push {text: todoInput.value, done: false}
  render()

  todoInput.value = ''

todoFrom.addEventListener 'submit', addItem
render()
