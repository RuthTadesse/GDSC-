import React from 'react';

const TodoItem = ({ todo, index, completeTodo, removeTodo, showCompleted }) => {
  if (!showCompleted && todo.isCompleted) {
    return null;
  }

  const commonButtonStyle = {
    background: '#add8e6',
    color: '#000',
    marginRight: '5px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
  };

  return (
    <div className="todo-item" style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <span style={{ color: '#000', textDecoration: todo.isCompleted ? 'line-through' : 'none', fontWeight: 'bold', marginRight: '10px' }}>{todo.text}</span>
      <div>
        <button onClick={() => completeTodo(index)} style={commonButtonStyle}>{todo.isCompleted ? 'Undo' : 'Complete'}</button>
        <button onClick={() => removeTodo(index)} style={commonButtonStyle}>Remove</button>
      </div>
    </div>
  );
};

export default TodoItem;
