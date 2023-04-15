import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import uuid from "react-uuid";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [categories, setCategories] = useState(CATEGORIES);
  const [tasks, setTasks] = useState(TASKS);

  function removeTask(text) {
    const newTaskList = tasks.filter((task) => {
      return task.text !== text;
    });
    setTasks(newTaskList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} />
      <NewTaskForm />
      <TaskList tasks={tasks} categories={categories} removeTask={removeTask} />
    </div>
  );
}

export default App;
