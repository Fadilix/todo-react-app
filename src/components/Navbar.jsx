import React from "react";
import { Link } from "react-router-dom";
import "../scss/Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Todo App</h1>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
