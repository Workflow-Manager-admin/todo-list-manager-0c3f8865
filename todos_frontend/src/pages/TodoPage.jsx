import React, { useState } from 'react';
import AppBar from '../components/AppBar';
import TodoList from '../components/TodoList';
import Fab from '../components/Fab';
import StatusBar from '../components/StatusBar';
import NavigationBar from '../components/NavigationBar';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    setCompletedCount(updatedTodos.filter(todo => todo.completed).length);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    setCompletedCount(updatedTodos.filter(todo => todo.completed).length);
  };

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-page">
      <AppBar />
      <StatusBar completedCount={completedCount} totalCount={todos.length} />
      <TodoList
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      />
      <Fab onAdd={handleAddTodo} />
      <NavigationBar />
    </div>
  );
};

export default TodoPage;
