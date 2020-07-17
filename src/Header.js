import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">Microblog</h1>
      <p className="Header-description">Get in the Rithm of blogging!</p>
      <NavLink exact to="/">
        Blog
      </NavLink>
      <NavLink exact to="/posts/new">
        Add a new post!
      </NavLink>

    </div>
  );
};

export default Header;