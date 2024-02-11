import React from "react";
import Navbar from "../components/Navbar";
import "../scss/HomePage.scss";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

const HomePage = () => {


  // adding the task to the database
  const handleAddTask = () => {};

  return (
    <div className="main-todos">
      <div
        style={{
          height: "75px",
          marginBottom: "20px",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      >
        <Navbar />
      </div>
      <div className="todos">
        <TodoHeader handleAddTask={handleAddTask} />
        <TodoList />

      </div>
    </div>
  );
};

export default HomePage;
