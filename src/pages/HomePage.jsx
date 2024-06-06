import { useState } from "react";
import Navbar from "../components/Navbar";
import "../scss/HomePage.scss";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import axios from "axios";
import { toast } from "react-hot-toast";
import PopUp from "../components/PopUp";
import { style } from "../themes/toastThemes";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const [popupData, setPopupData] = useState({
    task: "",
    description: "",
  });

  // Toggle the popup
  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };
  const handleAddTask = () => {
    try {
      axios.post("http://localhost:8081/api/todos", popupData);
      setShowPopup(!showPopup);
      toast.success("Task added successfully", { style });
    } catch (error) {
      console.error("Task added failed");
      toast.error("Task added failed", {
        style,
      });
    }

    popupData.task = "";
    popupData.description = "";

    // window.location.reload();
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
        <TodoHeader handleShowPopUp={handleShowPopup} />
        <TodoList />
      </div>

      {showPopup && (
        <PopUp
          handleInputChange={handleInputChange}
          handlePopupSubmit={handlePopupSubmit}
          popupData={popupData}
          title={"Add task"}
          buttonLabel={"Submit"}
          handleAddTask={handleAddTask}
          setShowPopup={setShowPopup}
        />
      )}
    </div>
  );
};

export default HomePage;
