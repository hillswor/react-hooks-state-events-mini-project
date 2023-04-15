import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: "Code",
  });

  const newTaskCategories = categories.filter((category) => {
    if (category !== "All") {
      return category;
    }
  });

  const handleChange = (event) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  const { text, category } = newTask;

  return (
    <form
      className="new-task-form"
      onSubmit={(event) => {
        event.preventDefault();
        onTaskFormSubmit(newTask);
      }}
    >
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={text} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange} value={category}>
          {newTaskCategories.map((newTaskCategory) => {
            return (
              <option key={newTaskCategory} value={newTaskCategory}>
                {newTaskCategory}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
