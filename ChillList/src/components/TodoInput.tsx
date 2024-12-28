import React, { useState, ChangeEvent, FormEvent } from 'react';


interface TodoInputProps {
  addTodo: (task: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="w-full max-w-lg px-4 py-3 border-2 border-blue-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="ml-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        + Add
      </button>
    </form>
    </>
  );
};


