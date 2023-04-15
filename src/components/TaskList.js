import React from "react";
import Task from "./Task";

function TaskList({ tasks, categories, removeTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
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
