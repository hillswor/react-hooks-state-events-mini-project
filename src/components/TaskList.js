import React from "react";
import Task from "./Task";

function TaskList({ tasksToDisplay, categories, removeTask }) {
  return (
    <div className="tasks">
      {tasksToDisplay.map((task) => (
        <Task
          key={task.text}
          category={task.category}
          text={task.text}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
