import { useState, useEffect } from 'react';
import Header from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import './App.css';

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

const LOCAL_STORAGE_KEY = "chillListTodos";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log("Saving todos to localStorage:", todos); // Debugging
  }, [todos]);

  const addTodo = (task: string) => {
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
