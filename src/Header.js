import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <h1>Microblog</h1>
      <h3>Get in the Rithm of blogging!</h3>
      <NavLink exact to="/">
        Blog
      </NavLink>
      <NavLink exact to="/new">
        Add a new post!
      </NavLink>

    </div>
  );
};

export default Header;