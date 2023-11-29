import React, { useState } from "react";

function NewTaskForm({categories, handleNewTask}) {

  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState('')

  const handleSub = (e)=>{
    e.preventDefault()
    let addingTask = {text: newTask, category: newCategory}
    handleNewTask(addingTask)
  }


  return (
    <form className="new-task-form" onSubmit={handleSub}>
      <label>
        Details
        <input type="text" name="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={e => setNewCategory(e.target.value)}>
          {categories.map((category)=>(
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
