import React from 'react'

import { MdRadioButtonUnchecked } from 'react-icons/md'

const Todo = () => {
  return (
    <div className='text-3xl m-4'>
      <MdRadioButtonUnchecked className='inline-block align-text-bottom text-blue-600 mr-3 hover:text-pink-300' />
      These are tasks 😊
    </div>
  )
}

export default Todo
