import React from 'react';
import './TodoPage.css';

const TodoPage = () => {
  return (
    <div className="todo-page">
      <div className="todo-container">
        <header className="todo-header">
          <h1>My Todo List</h1>
        </header>
        
        <div className="todo-content">
          <div className="todo-list">
            {/* Todo items will be rendered here */}
          </div>
          
          <div className="add-todo">
            <input 
              type="text" 
              className="todo-input" 
              placeholder="Add a new todo..."
            />
            <button className="add-button">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
