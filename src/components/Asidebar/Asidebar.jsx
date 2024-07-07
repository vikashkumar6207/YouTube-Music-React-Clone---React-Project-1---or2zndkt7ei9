import React from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "./Asidebar.css";
const Asidebar = () => {
  const name = sessionStorage.getItem("name");

  return (
    <>
      <div className=" bg-inherit items-center pl-3">
        <div>
          <NavLink to="/" className="asidemenu">
          <GoHome className="homeIcon"/> Home
          </NavLink>
          <NavLink to="/explore" className="asidemenu ">
          <MdOutlineExplore className="homeIcon" />Explore
          </NavLink>

          <NavLink to="/library" className="asidemenu ">
          <MdLibraryMusic className="homeIcon"/>Library
          </NavLink>
          {!name ? (
            <NavLink to="/login" className="asidemenu">
              Login
            </NavLink>
          ) : (
            <NavLink to="/upgrade" className="asidemenu">
             <SiYoutubemusic className="homeIcon"/> Upgrade
            </NavLink>
           )}
        </div>
        <div className="SignBtnContainer">
          {!name ? (
            <NavLink to="/login">
              <button className="SignBtn">Sign in</button>
              <br />
            </NavLink>
          ) : (
            <NavLink to="/upgrade">
              <button className="SignBtn">New Playlist</button>
              <br />
            </NavLink>
          )}

          <p className="signmsg">
            Sign in to create & share playlists, get personalized
            recommendations, and more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
