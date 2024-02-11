import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import capitalize from "../utils/UsualFunctions";
import "../scss/HomePage.scss";

const HomePage = () => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
  };

  const dayString = currentDate.toLocaleString("en-US", options);
  const dayInt = currentDate.toLocaleString("en-US", { day: "2-digit" });
  const monthString = currentDate.toLocaleString("en-US", { month: "long" });
  useEffect(() => {
    console.log(currentDate);
  }, []);

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
        <div className="date-nbtasks">
          <div className="dates">
            <h2>
              {capitalize(dayString)}, {dayInt} {currentDate.getFullYear()}
            </h2>
            <p>{monthString}</p>
          </div>

          <p>12 tasks</p>
          <button onClick={handleAddTask}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
