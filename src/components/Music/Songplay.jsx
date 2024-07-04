import React, { useEffect, useRef, useState } from "react";
import Asidebar from "../Asidebar/Asidebar";
import "./Songplay.css";
import Musicplayer from "./Musicplayer";
import { useNavigate } from "react-router-dom";
const Songplay = (props) => {

  const navigate = useNavigate();

  const musicIND = localStorage.getItem("songIndex");
  const [songData, setsongData] = useState({});
  const [currentPage, setCurrentpage] = useState(Number(musicIND));
  const id = localStorage.getItem("albumID");

  console.log('songData',songData);
  useEffect(() => {
    async function fetchAPI() {
      const url = `https://academics.newtonschool.co/api/v1/music/album/?_id=${id}`;
      const myHeaders = new Headers();
      myHeaders.append("projectId", "z5civ6ptecws");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

     const response = await fetch(url, requestOptions)
      const result = await response.json();
        console.log('result',result);
      setsongData(result.data[0].songs[currentPage])
       
    }
    fetchAPI();
  },[]);

  function backFunction(){
    navigate('/musicalbumplayer');
  }

  return (
    <div className="songplay_container">
      <div className="asidebar">
        <Asidebar></Asidebar>
      </div>
      <div className="mainbar">
        <button onClick={backFunction} className="back_btn">Back</button>
        <div className="image_container">
        <img src={songData.thumbnail} alt="" className="image"/>
        </div>
        <p>Title : {songData.title}</p>
        <p>Mood: {songData.mood}</p>
      </div>
      <Musicplayer 
      _id={songData._id}
      title={songData.title}
      thumbnail={songData.thumbnail}
      audio_url={songData.audio_url}
      />
    </div>
  );
};

export default Songplay;
