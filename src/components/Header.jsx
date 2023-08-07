import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return <div>
    <header>
        <nav>
        <NavLink className="home-header" to="/">Home </NavLink>
        <NavLink className="about-header" to="Blog">About </NavLink>
        <NavLink className="contact-header" to="Works">Contact</NavLink>
        </nav>
    </header>
  </div>;
};

export default Header;
