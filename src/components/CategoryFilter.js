import React, { useEffect } from "react";

function CategoryFilter({ categories, setCategories }) {


  
  
  
  const categoriesButton = categories.map((category)=>(
    <button key={category}>{category}</button>
  ))
  






  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesButton}
    </div>
  );
}

export default CategoryFilter;
