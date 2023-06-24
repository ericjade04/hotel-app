import React from "react";
import "../assets/styles/NavBar.css";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <header className="NavBar">
      <nav>
        <h1><Link to={"/hotel-app/"} className="link-route">#LUXESTAY</Link></h1>
        <ul>
          <li><Link to="/hotel-app/about"className="link-route">About</Link></li>
          <li>Hotel</li>
        </ul>
      </nav>
    </header>
  )
};


export default NavBar;