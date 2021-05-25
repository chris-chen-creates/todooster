import { TextField } from '@material-ui/core';
import React from 'react';
import TodoAdd from './TodoAdd';

const TodoEdit = () => {
  return (
    <div>
      <form className='inputForm'>
        <TextField
          id='outlined-basic'
          label='Outlined'
          variant='outlined'
          color='secondary'
        />
      </form>
      <TodoAdd />
    </div>
  );
};

export default TodoEdit;
