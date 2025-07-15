import React, { useState } from 'react';

const Fab = ({ onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTodoText, setNewTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      onAdd(newTodoText);
      setNewTodoText('');
      setIsOpen(false);
    }
  };

  return (
    <div className="fab-container">
      {isOpen ? (
        <form onSubmit={handleSubmit} className="fab-form">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Enter new todo"
            autoFocus
          />
          <button type="submit">Add</button>
          <button type="button" onClick={() => setIsOpen(false)}>Cancel</button>
        </form>
      ) : (
        <button className="fab" onClick={() => setIsOpen(true)}>
          +
        </button>
      )}
    </div>
  );
};

export default Fab;
