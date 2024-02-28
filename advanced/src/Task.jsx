import React from "react";

const Task = ({ task, onRemoveTask, onToggleTaskComplete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTaskComplete(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <button onClick={() => onRemoveTask(task.id)}>Remove</button>
    </li>
  );
};