import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Musicalbumplayer.css";
import useUser from "../../customHooks/useUser";
import { useNavigate } from "react-router-dom";
const Musicalbumplayer = (props) => {
  const { _id, artists, image, songs, title } = props;
 
 
  const { getToken } = useUser();
  const navigate = useNavigate();
  const id = localStorage.getItem("albumID");
  console.log('getalbumUsingId',id);

  async function getalbumUsingId() {
  
    const myHeaders = new Headers();
    myHeaders.append("projectId", "z5civ6ptecws");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://academics.newtonschool.co/api/v1/music/album/?_id=64cee72fe41f6d0a8b0cd0a8",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }
  return (
    <>
      <div className="mt-32 text-white">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.9Izv-aszItToTtEqRMSE0QHaE6&pid=Api&P=0&h=180"
          alt="/"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      {/*  <div>
      <div className="music_album_player"  key={_id}>
        <img className="music_album_player_image" id="player_image" src={image} />
        <div className="music_album_title" id="player_title">{title}</div>
         <audio  controls src={audio_url}></audio>
      </div>
    </div>   */}
    </>
  );
};

export default Musicalbumplayer;
