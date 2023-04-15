import React from "react";
import Task from "./Task";

function TaskList({ tasks, categories }) {
  function removeTask(event) {
    console.log(event.target);
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
