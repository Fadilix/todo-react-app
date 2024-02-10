import React, { useState } from "react";
import Form from "../components/Form";
import { toast } from "react-hot-toast";
import axios from "axios";

const RegisterPage = () => {
  const [userData, setUserData] = useState({
    user: "",
    pass: "",
    confPass: "",
  });

  const handleInputChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userData.user || !userData.pass || !userData.confPass) {
        toast.error("You must provide a username and a password");
      } else if (userData.pass !== userData.confPass) {
        toast.error("The passwords must match");
      } else {
        const res = await axios.post("http://localhost:8081/api/users/signup", {
          username: userData.user,
          password: userData.pass,
        });

        if (res.status === 201) {
          toast.success("Registered successfully");
        } else {
          toast.error("Couldn't register, please try again");
        }
      }
    } catch (error) {
      toast.error("Server error", error.message);
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
