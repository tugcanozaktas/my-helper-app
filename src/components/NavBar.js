import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHouse,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";

const NavBar = () => {
    return(
       <div className="nav-wrapper">
        <div className="bottom-nav">
          <Link to="/account" className="nav-icon-div">
            <FontAwesomeIcon className="nav-icons" icon={faUser} />
          </Link>
          <Link to="/home" className="nav-icon-div">
            <FontAwesomeIcon className="nav-icons" icon={faHouse} />
          </Link>
          <Link to="/settings" className="nav-icon-div last-icon">
            <FontAwesomeIcon className="nav-icons" icon={faBars} />
          </Link>
        </div>
       </div> 
    )
}

export default NavBar;