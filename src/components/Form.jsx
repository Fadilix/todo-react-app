import React from "react";
import "../scss/Form.scss";
import capitalize from "../utils/UsualFunctions";

const Form = ({
  username,
  password,
  confirmPassword,
  userData,
  handleInputChange,
  title,
  handleSubmit,
}) => {
  return (
    <div className="form">
      <h1>{title}</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="field-row">
          <label htmlFor="">{capitalize(username)}</label>
          <input
            name="user"
            type="text"
            placeholder={`Enter your ${username}...`}
            onChange={handleInputChange}
            value={userData.usernameValue}
          />
        </div>

        <div className="field-row">
          <label htmlFor="">{capitalize(password)}</label>
          <input
            name="pass"
            type="text"
            placeholder={`Enter your ${password}...`}
            onChange={handleInputChange}
            value={userData.passwordValue}
          />
        </div>

        {confirmPassword && (
          <div className="field-row">
            <label htmlFor="">{capitalize(confirmPassword)}</label>
            <input
              name="confPass"
              type="text"
              placeholder={`Enter your confirmation password...`}
              onChange={handleInputChange}
              value={userData.confirmPasswordValue}
            />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;