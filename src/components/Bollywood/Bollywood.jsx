import React from "react";
import { useState, useEffect } from "react";
import Library from "../../pages/Library/Library";
import { Link, Route } from "react-router-dom";

const Bollywood = () => {
  const [musicAlbumList, setMusicAlbumList] = useState([]);
  useEffect(() => {
    async function getMusicAlbum() {
      const url = "https://academics.newtonschool.co/api/v1/music/album";
      const myHeaders = new Headers();
      myHeaders.append("projectId", "z5civ6ptecws");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const result = await response.json();
      console.log("getMusicAlbum", result);
      setMusicAlbumList(result.data);
      console.log("getMusicAlbum one", result.data[0]);
    }
    try {
      getMusicAlbum();
    } catch (error) {
      console.log("getMusicAlbum", error);
    }
  }, []);

  return (
    <div className="mt-10">
        <h1 className="text-2xl font-bold mb-5">Bollywood</h1>
      <div className="flex overflow-scroll gap-1">
        
        {musicAlbumList.map((item, index) => (
            <img src={item.image} key={index} alt="" className="h-52 w-48" />
        ))}
      </div>
    </div>
  );
};

export default Bollywood;
