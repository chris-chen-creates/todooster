import React from 'react'
import './index.css'

import { FaCheckCircle } from 'react-icons/fa'

import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className='App container mx-auto mt-3'>
      <h1 className='text-5xl'>
        <FaCheckCircle className='inline-block text-blue-600 align-top mr-3' />
        Todooster
      </h1>
      <TodoList />
    </div>
  )
}

export default App
