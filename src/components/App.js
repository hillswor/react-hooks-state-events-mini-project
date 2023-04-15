import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import uuid from "react-uuid";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [categories, setCategories] = useState(CATEGORIES);
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") return true;

    return task.category === selectedCategory;
  });

  function removeTask(text) {
    const newTaskList = tasks.filter((task) => {
      return task.text !== text;
    });
    setTasks(newTaskList);
  }

  function changeSelectedCategory(category) {
    setSelectedCategory(category);
  }

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        changeSelectedCategory={changeSelectedCategory}
      />
      <NewTaskForm
        categories={categories}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasksToDisplay={tasksToDisplay}
        categories={categories}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
