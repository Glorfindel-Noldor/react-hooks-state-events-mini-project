import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}){
  
  const taskCard = tasks.map((task, index)=>(
    < Task key={index} 
      task={task}
      setTasks={setTasks}
      tasks={tasks}
    />
  ))  
 
 
  return (
    <div className="tasks">
      {taskCard}
    </div>
  );
}

export default TaskList;
