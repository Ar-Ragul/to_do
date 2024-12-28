import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    task: string;
    completed: boolean;
  };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-lg mb-4 hover:bg-gray-50 transition duration-300 ease-in-out">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="mr-4 accent-blue-500 transition duration-300 ease-in-out"
        />
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {todo.task}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-4 py-2 text-red-500 bg-transparent border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
      >
        Delete
      </button>
    </div>
  );
};

