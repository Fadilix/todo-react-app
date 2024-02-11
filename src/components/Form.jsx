import React from "react";
import "../scss/Form.scss";

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
          <label htmlFor="">
            {username.charAt(0).toUpperCase() + username.slice(1)}
          </label>
          <input
            name="user"
            type="text"
            placeholder={`Enter your ${username}...`} 
            onChange={handleInputChange}
            value={userData.usernameValue}
          />
        </div>

        <div className="field-row">
          <label htmlFor="">
            {password.charAt(0).toUpperCase() + password.slice(1)}
          </label>
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
            <label htmlFor="">
              {confirmPassword.charAt(0).toUpperCase() +
                confirmPassword.slice(1)}
            </label>
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
