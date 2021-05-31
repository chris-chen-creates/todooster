import { constants } from 'buffer'
import { useState } from 'react'
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md'

interface TodoProps {
  onComplete: (idx: number) => void
  id: number
  task: string
  isComplete: boolean
  taskChecked: boolean
  taskUnchecked: boolean
}

const Todo = ({ id, task, isComplete }: TodoProps) => {
  const taskChecked = (
    <MdRadioButtonChecked className='inline-block align-text-bottom text-pink-300 mr-3' />
  )

  const taskUnchecked = (
    <MdRadioButtonUnchecked className='inline-block align-text-bottom text-blue-600 mr-3 hover:text-pink-300' />
  )

  const taskCompleted = ({ taskChecked, taskUnchecked }: TodoProps) => {
    return isComplete ? taskChecked : taskUnchecked
  }

  const handleCheckTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isCompleted
        }
      }
    })
  }

  return (
    <div className='text-3xl m-4'>
      <div onClick={taskCompleted}></div>
      {task}
    </div>
  )
}

export default Todo
