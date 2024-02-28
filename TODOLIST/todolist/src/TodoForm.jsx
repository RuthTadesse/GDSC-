import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <input
        type="text"
        value={value}
        placeholder="Enter a new task"
        onChange={(e) => setValue(e.target.value)}
        style={{ width: 'calc(100% - 100px)', marginRight: '1px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 16px', borderRadius: '5px', background: '#add8e6', color: '#000', border: 'none' }}>Add</button>
    </form>
  );
};

export default TodoForm;
