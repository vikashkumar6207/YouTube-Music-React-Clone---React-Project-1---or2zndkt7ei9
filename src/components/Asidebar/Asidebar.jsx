import React from "react";

import { NavLink } from "react-router-dom";
import "./Asidebar.css";
const Asidebar = () => {
  return (
    <>
      <div className=" bg-inherit items-center pl-3">
        <div>
          <NavLink to="/" className="asidemenu">
         Home
          </NavLink>
          <NavLink to="/explore" className="asidemenu ">
            Explore
          </NavLink>
          <NavLink to="/library" className="asidemenu ">
            Library
          </NavLink>
          <NavLink to="/login" className="asidemenu">
            Login
          </NavLink>
        </div>
        <div className="SignBtnContainer">
          <NavLink to="/login">
          <button className="SignBtn">Sign in</button><br/>
          </NavLink>
         
         <p className="signmsg">Sign in to create & share playlists, get personalized recommendations, and more.</p>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
