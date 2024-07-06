import { Outlet, Route, Routes } from "react-router-dom";
// import { useAuth0 } from '@auth0/auth0-react'
import Home from "../pages/Home/Home";
import Explore from "../pages/Explore/index";
import Library from "../pages/Library/Library";
import Login from "../pages/Login/Login";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";
import Asidebar from "./Asidebar/Asidebar";
import ProtectedRouteComponent from "./ProtectedRouteComponent/ProtectedRouteComponent";
import Signup from "./Signup/Signup";
import Page404 from "../pages/Page404";
import Musicalbumplayer from "./Musicalbumplayer/Musicalbumplayer";
import Songplay from "./Music/Songplay";
import Upgrade from "./Upgrade/Upgrade";

function App() {
  // const {user, loginWithRedirect} = useAuth0();

  const [profileImg, setProfileImg] = useState();
  const [searchInput, setSearchInput] = useState();

  const likedSongArray = [];
  const libraryAlbum = [];
  localStorage.setItem("likedSongArrayUp", JSON.stringify(likedSongArray));
  localStorage.setItem("libraryAlbum", JSON.stringify(libraryAlbum));


  function searchHandler(e) {
    const inputVal = e.target.value.toLowerCase();
    setSearchInput(inputVal);
  }
  // console.log('searchInput',searchInput);

  return (
    <>
      {/* <button onClick={(e)=> loginWithRedirect()}>login</button> */}
      <div className="NavbarContainer ">
        <Navbar searchHandler={searchHandler} profileImg={profileImg} />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route
          path="/library"
          element={
            <ProtectedRouteComponent>
              <Library />
            </ProtectedRouteComponent>
          }
        ></Route>
        <Route
          path="/login"
          element={<Login setProfileImg={setProfileImg} />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {<Route path="/upgrade" element={<Upgrade />}></Route>}
        <Route path="/musicalbumplayer" element={<Musicalbumplayer />}></Route>
        <Route path="/songplay" element={<Songplay /> }></Route>
        
        <Route path="/*" element={<Page404 />}></Route>

      </Routes>
    </>
  );
}

export default App;
