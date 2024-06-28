import React from "react";

import { Link } from "react-router-dom";
import "./Asidebar.css";
const Asidebar = () => {
  return (
    <>
      <div className=" bg-inherit items-center pl-3">
        <div>
          <Link to="/" className="asidemenu ">
            Home
          </Link>
          <Link to="/explore" className="asidemenu ">
            Explore
          </Link>
          <Link to="/library" className="asidemenu ">
            Library
          </Link>
          <Link to="/login" className="asidemenu">
            Login
          </Link>
        </div>
        <div className="SignBtnContainer">
          <Link to="/login">
          <button className="SignBtn">Sign in</button><br/>
          </Link>
         
         <p className="signmsg">Sign in to create & share playlists, get personalized recommendations, and more.</p>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
