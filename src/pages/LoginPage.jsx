import React, { useState } from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    user: "",
    pass: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(userData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!userData.user || !userData.pass) {
        toast.error("You must provide a username and a password");
      } else {
        const res = await axios.post("http://localhost:8081/api/users/login", {
          username: userData.user,
          password: userData.pass,
        });

        if (res.status === 200) {
          toast.success("Login successfull");
          navigate("/");
        } else {
          toast.error("Couldn't register, please try again");
        }
      }
    } catch (error) {
      console.error(error.message);
      toast.error("Error logging in", error.message);
    }
  };
  return (
    <div>
      <Form
        username={"username"}
        password={"password"}
        handleInputChange={handleInputChange}
        title={"Login"}
        userData={userData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;
