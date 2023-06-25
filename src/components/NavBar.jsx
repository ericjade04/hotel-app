import React from "react";
import "../assets/styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";



const NavBar = () => {
  return (
    <header className="NavBar">
      <nav>
        <div>
          <Link to={"/hotel-app/"}><img src={logo} alt="Logo" /></Link>
        </div>
        <ul>
          <li><Link to="/hotel-app/about" className="link-route">About</Link></li>
          <li><Link to="/hotel-app/hotel" className="link-route">Hotel</Link></li>
        </ul>
      </nav>
    </header>
  )
};


export default NavBar;