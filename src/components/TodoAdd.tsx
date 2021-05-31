import { type } from 'os'
import { useState } from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'

interface TodoProps {
  task: string
}

const TodoAdd = ({ task }: TodoProps) => {
  return (
    <div className='text-2xl mt-6'>
      <input
        type='text'
        name='task'
        value={task}
        onChange={() => null}
        placeholder='Add a task'
        className='m-4 mr-2 bg-gray-600 rounded-md text-3xl focus:bg-gray-50 focus:text-black'
      ></input>
      <BsPlusSquareFill
        className='inline-block align-text-bottom text-4xl text-blue-400 hover:text-red-200'
        type='submit'
      />
    </div>
  )
}

export default TodoAdd
