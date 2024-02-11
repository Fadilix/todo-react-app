import React from "react";
import useTasks from "../hooks/useTasks";

const TodoList = () => {
  const { tasks, setTasks } = useTasks();

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;