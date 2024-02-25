import React from "react";
import useTasks from "../hooks/useTasks";

const Test = () => {
  const { tasks, setTasks } = useTasks();
  console.log(tasks);

  return (
    
    <div>
      <ul>
        {tasks.map((task) => (
          <li>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
