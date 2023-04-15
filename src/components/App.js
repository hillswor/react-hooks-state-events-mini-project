import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import uuid from "react-uuid";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [categories, setCategories] = useState(CATEGORIES);
  const [tasks, setTasks] = useState(
    TASKS.map((task) => {
      task.id = uuid();
    })
  );

  debugger;
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={tasks} categories={categories} />
    </div>
  );
}

export default App;
