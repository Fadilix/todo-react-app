import React, { useState } from "react";

const PopUp = ({
  popupData,
  handlePopupSubmit,
  handleInputChange,
  title,
  buttonLabel,
  handleAddTask,
  setShowPopup,
}) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="close-btn" onClick={() => setShowPopup(false)}>
          &times;
        </span>
        <h3>{title}</h3>
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
            <button type="submit" onClick={handleAddTask}>
              {buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
