import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onRemoveTask, onToggleTaskComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onRemoveTask={onRemoveTask}
          onToggleTaskComplete={onToggleTaskComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;