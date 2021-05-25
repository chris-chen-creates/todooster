import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='App'>
      <h1>Todooster</h1>
      <TodoList />
    </div>
  );
};

export default App;
