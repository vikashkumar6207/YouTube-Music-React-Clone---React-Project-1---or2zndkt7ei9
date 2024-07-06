import React, { useEffect } from "react";
import useUser from "../../customHooks/useUser";
import { useNavigate } from "react-router-dom";

const Musicplayer = (props) => {
  const { title, _id, audio_url, thumbnail } = props;
  const { getToken } = useUser();
  const navigate = useNavigate();



  async function likeUnlikeSongfun() {
    const url = "https://academics.newtonschool.co/api/v1/music/favorites/like";
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken}`);
    myHeaders.append("projectID", "z5civ6ptecws");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      songId: _id,
    });

    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    console.log('result',result);
  }
  try {
    likeUnlikeSongfun();
  } catch (error) {
    console.log("likeUnlikeSongfun", error);
  }
  useEffect(() => {}, []);

  return (
    <>
      <div>
        <div className="music_player" key={_id}>
          <div className="img_ontainer">
          <p className="heartIcon">&#128151;</p>
          <img className="music_player_image" src={thumbnail} />
          </div>
          
          <div className="music_title">{title}</div>
          <audio controls src={audio_url}></audio>
        </div>
      </div>
    </>
  );
};

export default Musicplayer;
