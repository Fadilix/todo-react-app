import React, { useState } from "react";
import Form from "../components/Form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    user: "",
    pass: "",
    confPass: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userData.user || !userData.pass || !userData.confPass) {
        toast.error("You must provide a username and a password", { style });
      } else if (userData.pass !== userData.confPass) {
        toast.error("The passwords must match", { style });
      } else {
        const res = await axios.post("http://localhost:8081/api/users/signup", {
          username: userData.user,
          password: userData.pass,
        });

        if (res.status === 201) {
          toast.success("Registered successfully", { style });
          navigate("/login");
        } else {
          toast.error("Couldn't register, please try again", { style });
        }
      }
    } catch (error) {
      toast.error("Server error", error.message, { style });
    }
  };

  return (
    <div>
      <Form
        title={"Register"}
        username={"username"}
        password={"password"}
        confirmPassword={"confirm password"}
        handleInputChange={handleInputChange}
        userData={userData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterPage;
