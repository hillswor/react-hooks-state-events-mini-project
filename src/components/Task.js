import React from "react";
import uuid from "react-uuid";

function Task({ text, category, removeTask }) {
  const uniqueId = uuid();

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={removeTask} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
