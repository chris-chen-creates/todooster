import React from 'react'
import Todo from './Todo'
import TodoDelete from './TodoDelete'
import TodoAdd from './TodoAdd'

const TodoList = () => {
  return (
    <div>
      <TodoAdd />
      <Todo />
      <Todo />
      <Todo />
      <TodoDelete />
    </div>
  )
}

export default TodoList
