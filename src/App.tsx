import React from 'react';
import { useState } from 'react';
import './index.css';
import { FaCheckCircle, FaLevelUpAlt } from 'react-icons/fa';
import TodoList from './components/TodoList';
import { TodoProps } from './interface';
import TodoAdd from './components/TodoAdd';
import { v4 as uuidv4 } from 'uuid';

const App: React.FC = () => {
  const [todos, setTodo] = useState<TodoProps[]>([]);

  // this is redundant
  // how can I write this to not mutate the value in place
  const handleTaskComplete = (id: string) => {
    const newTodoState: TodoProps[] = [...todos];
    newTodoState.find((todo: TodoProps) => todo.id === id)!.isComplete =
      !newTodoState.find((todo: TodoProps) => todo.id === id)!.isComplete;

    setTodo(newTodoState);
  };

  // Clean up this sucka
  const handleTaskCreate = (task: string) => {
    const newTask: TodoProps[] = [...todos];
    const newTaskArr = newTask.concat([
      {
        id: uuidv4(),
        task: task,
        isComplete: false,
      },
    ]);
    setTodo(newTaskArr);
  };

  const handleTaskDelete = (todos: TodoProps[]) => {
    const newTodoState: TodoProps[] = todos.filter(
      (todos) => todos.isComplete === false
    );
    setTodo(newTodoState);
  };

  return (
    <div className='App container mx-auto mt-3'>
      <h1 className='text-6xl font-thin'>
        <FaCheckCircle className='inline-block text-blue-600 align-top mr-3' />
        Todooster
      </h1>
      <TodoAdd handleTaskCreate={handleTaskCreate} />
      <TodoList
        todos={todos}
        handleTaskComplete={handleTaskComplete}
        handleTaskDelete={handleTaskDelete}
      />
    </div>
  );
};

export default App;
