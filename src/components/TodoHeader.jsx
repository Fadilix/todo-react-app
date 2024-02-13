import React, { useEffect, useState } from "react";
import capitalize from "../utils/UsualFunctions";
import "../scss/TodoHeader.scss";
import axios from "axios";

const TodoHeader = ({ handleShowPopUp }) => {
  const currentDate = new Date();
  const options = {
    weekday: "long",
  };
  const dayString = capitalize(currentDate.toLocaleString("en-US", options));
  const dayInt = currentDate.toLocaleString("en-US", { day: "2-digit" });
  const monthString = currentDate.toLocaleString("en-US", { month: "long" });

  const [numberOfTasks, setNumberOfTasks] = useState(null);

  useEffect(() => {
    const getNumberOfTodos = async () => {
      const response = await axios.get("http://localhost:8081/api/todos/num");
      setNumberOfTasks(response.data.count);
      console.log(response.data.count);
    };

    getNumberOfTodos();

    getNumberOfTodos();
  }, []);

  return (
    <div className="date-nbtasks">
      <div className="dates">
        <h2>
          {dayString}, {dayInt} {currentDate.getFullYear()}
        </h2>
        <p>{monthString}</p>
      </div>

      <p>{numberOfTasks} tasks</p>
      <button onClick={handleShowPopUp}>
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
  );
};

export default TodoHeader;
