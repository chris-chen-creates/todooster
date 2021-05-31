import { ChangeEvent, useState } from 'react'
import Todo from './Todo'
import TodoDelete from './TodoDelete'
import TodoAdd from './TodoAdd'

interface Todos {
  id: number
  task: string
  isCompleted: boolean
}

const TodoList = () => {
  const [todos, setTodo] = useState([
    {
      id: 0,
      task: 'this is a task',
      isComplete: false,
    },
  ])

  let id = 0
  const [task, setTask] = useState('')

  const handleAddTodo = (todo: Todos) => {
    const updatedTodos = [...todos, todo]
  }

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    setTask(value)
  }

  return (
    <div>
      <TodoAdd task={task} />
      {todos.map(({ id, task, isComplete }) => (
        <Todo
          id={id}
          task={task}
          isComplete={isComplete}
          onComplete={() => {}}
        />
      ))}
      <TodoDelete />
    </div>
  )
}

export default TodoList
