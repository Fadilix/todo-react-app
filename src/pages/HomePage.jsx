import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import capitalize from "../utils/UsualFunctions";

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

  return (
    <div>
      <div
        style={{
          height: "75px",
          marginBottom: "20px",
        }}
      >
        <Navbar />
      </div>
      <div className="todos">
        <div className="date-nbtasks">
          <div>
            <h2>
              {capitalize(dayString)}, {dayInt} {currentDate.getFullYear()}
            </h2>
            <p>{monthString}</p>
          </div>

          <p>12</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
