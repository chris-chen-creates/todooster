import React from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'

const TodoAdd = () => {
  return (
    <div>
      <input className='m-4 bg-gray-600 rounded-md text-3xl'></input>
      <BsPlusSquareFill className='inline-block align-text-bottom text-3xl text-blue-400 hover:text-red-200' />
    </div>
  )
}

export default TodoAdd
