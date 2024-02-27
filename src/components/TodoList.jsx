import React, { useState } from "react";
import useTasks from "../hooks/useTasks";
import "../scss/TodoList.scss";
import axios from "axios";
import { toast } from "react-hot-toast";
import { shrinkText } from "../utils/UsualFunctions";
import deleteButton from "../assets/svgs/delete.svg";
import editButton from "../assets/svgs/edit.svg";

const TodoList = () => {
  const { tasks, setTasks } = useTasks();

  const deleteTask = (id) => {
    if (confirm("Are you sure you want to delete this task ?")) {
      try {
        axios.delete(`http://localhost:8081/api/todos/${id}`);
        toast.success("Task deleted successfully!");
      } catch (error) {
        toast.error("Error while deleting task!");
        console.error("Error while deleting task" + error.message);
      }
    }

    return;
  };

  const editTask = (id) => {};

  console.log(tasks);
  return (
    <div className="todo-list-main">
      <div className="todo-list">
        {!tasks ? (
          <p>loading...</p>
        ) : (
          tasks.map((task) => {
            return (
              <div className="task" key={task.id}>
                <div className="task-info">
                  <p>{task.task}</p>
                  <p>{task.description && shrinkText(task.description)}</p>
                </div>

                <div className="buttons">
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(task.id)}
                  >
                    <img src={deleteButton} alt="" />
                  </button>

                  <button
                    className="edit-button"
                    onClick={() => editTask(task.id)}
                  >
                    <img src={editButton} alt="" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodoList;
