import React from 'react';
import {TodoItem} from './TodoItem';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <div className="w-full max-w-lg mx-auto">
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    ))}
  </div>
  );
};

