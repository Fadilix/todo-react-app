import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const currentDate = new Date();
  useEffect(() => {
    console.log(currentDate);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="todos">
        <div className="date"></div>
      </div>
    </div>
  );
};

export default HomePage;
