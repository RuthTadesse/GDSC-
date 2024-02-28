import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTodo = (text) => {
    const newTodo = { text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="todo-app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#fff', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
      <div className="todo-app-container" style={{ width: '400px', padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ color: '#333' ,marginTop: '-280px'}}>Todo List</h1>
        <button onClick={toggleShowCompleted} style={{ background: '#add8e6', color: '#000', padding: '10px 20px', border: 'none', borderRadius: '5px', fontSize: '16px' }}>
            {showCompleted ? 'Hide' : 'Show'} Completed
          </button>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' ,paddingTop:'80px' }}>
          <TodoForm addTodo={addTodo} />
       
        </div>
        <div className="todo-list" style={{ marginTop: '20px', width: '100%' }}>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              showCompleted={showCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
