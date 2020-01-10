import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
      <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
        {" | "}
        <NavLink to="/addperson" activeStyle={activeStyle}>
          Add Person
        </NavLink>
        {" | "}
        <NavLink to="/people" activeStyle={activeStyle}>
          People
        </NavLink>
        {" | "}
        <NavLink to="/courses" activeStyle={activeStyle}>
          Courses
        </NavLink>
      </nav>
  );
};

export default Nav;
