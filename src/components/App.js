import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";



function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");




  const handleNewTask = (newTask)=>{
    setTasks([newTask, ...tasks])
  }



  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    // Filter tasks based on the selected category
    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }
  };










  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter 
        categories={categories}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
     
      />

      <NewTaskForm 
        categories={categories}
        handleNewTask={handleNewTask}

      />
      <TaskList 
        tasks={tasks} 
        setTasks={setTasks} 

      />

    </div>
  );
}

export default App;
