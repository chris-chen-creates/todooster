import { TodoFormProps, TodoProps } from '../interface'
import { BsPlusSquareFill } from 'react-icons/bs'
import React, { FormEvent, useState } from 'react'

const TodoAdd = (formProps: TodoFormProps) => {
  const input = React.useRef<HTMLInputElement>(null)
  const [newTask, setNewTask] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    formProps.handleTaskCreate(newTask)
    setNewTask('')
  }

  return (
    <form className='text-2xl mt-6' onSubmit={handleSubmit}>
      <input
        type='text'
        ref={input}
        value={newTask}
        required
        name='task'
        onChange={handleChange}
        placeholder='Add a task'
        className='m-4 mr-2 bg-gray-600 rounded-md text-3xl focus:bg-gray-50 focus:text-black'
      ></input>
      <button type='submit'>
        <BsPlusSquareFill className='inline-block align-text-bottom text-4xl text-blue-400 hover:text-red-200' />
      </button>
    </form>
  )
}

export default TodoAdd
