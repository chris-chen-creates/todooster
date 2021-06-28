import React from 'react';

// for todos
export interface TodoProps {
  id: string;
  task: string;
  isComplete: boolean;
}

// for add todo form
export interface TodoFormProps {
  tasks?: TodoProps[];
  handleTaskCreate: (task: string) => void;
}

// for todo itesms
export interface TodoTaskProps {
  handleTaskDelete: (todos: TodoProps[]) => void;
  handleTaskComplete: (id: string) => void;
  todo: TodoProps;
}

export interface TodoListProps {
  handleTaskDelete: (todos: TodoProps[]) => void;
  handleTaskComplete: (id: string) => void;
  todos: TodoProps[];
}
