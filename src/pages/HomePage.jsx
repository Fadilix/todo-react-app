import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../scss/HomePage.scss";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import axios from "axios";
import { toast } from "react-hot-toast";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [popupData, setPopupData] = useState({
    task: "",
    description: "",
  });
  // Toggle the popup when clicking the "Add Task" button
  const handleAddTask = () => {
    setShowPopup(true);
    try {
      axios.post("http://localhost:8081/api/todo", popupData);
      toast.success("Task added successfully");
    } catch (error) {
      console.error("Task added failed");
      toast.error("Task added failed");
    }
  };

  const handleInputChange = (e) => {
    setPopupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(popupData);
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
        <TodoHeader />
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
              <input
                type="text"
                id="taskName"
                name="task"
                value={popupData.task}
                onChange={handleInputChange}
              />

              <label htmlFor="taskDescription">Task Description:</label>
              <textarea
                id="taskDescription"
                name="description"
                onChange={handleInputChange}
                value={popupData.description}
              ></textarea>

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
