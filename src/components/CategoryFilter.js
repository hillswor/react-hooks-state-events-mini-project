import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [isSelected, setIsSelected] = useState(null);

  function filterByCategory(category) {
    setIsSelected(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={isSelected === category ? "Selected" : ""}
          onClick={() => filterByCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
