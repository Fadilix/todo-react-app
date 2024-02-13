import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../scss/HomePage.scss";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [popuDate, setPopupDate] = useState({})
  // Toggle the popup when clicking the "Add Task" button
  const handleAddTask = () => {
    setShowPopup(true);
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
  };

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

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <h3>Add Task</h3>
            <form onSubmit={handlePopupSubmit}>
              <label htmlFor="taskName">Task Name:</label>
              <input type="text" id="taskName" name="taskName" />

              <label htmlFor="taskDescription">Task Description:</label>
              <textarea id="taskDescription" name="taskDescription"></textarea>

              <div className="buttons-container">
                <button type="button" onClick={() => setShowPopup(false)}>
                  Close
                </button>
                <button type="submit" onClick={() => handleAddTask()}>
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
