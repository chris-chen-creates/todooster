import React from 'react';
import Todo from './Todo';
import TodoEdit from './TodoEdit';
import TodoDelete from './TodoDelete';

const TodoList = () => {
  return (
    <div>
      <TodoEdit />
      <Todo />
      <Todo />
      <Todo />
      <TodoDelete />
    </div>
  );
};

export default TodoList;
