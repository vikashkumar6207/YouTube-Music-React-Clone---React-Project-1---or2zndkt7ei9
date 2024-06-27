import React from "react";
import { useState, useEffect } from "react";
import Library from "../../pages/Library/Library";
import { Link, Route } from "react-router-dom";
import Musicalbumplayer from "../Musicalbumplayer/Musicalbumplayer";

const Bollywood = () => {
  const [musicAlbumList, setMusicAlbumList] = useState([]);

  const [selectedMusicList, setSelectedMusicList] = useState();


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
    <div>
    <div>
    <div className="mt-10">
        <h1 className="text-2xl font-bold mb-5">Bollywood</h1>
      <div className="flex overflow-scroll gap-1">
        
        {musicAlbumList.map((item, index) => {
          
           const {_id, artists,image,songs,title} = item;
           return (
            <div>
              <div className="flex w-48 gap-1">
                <section onClick={() =>
                        setSelectedMusicList({ _id, artists,image,songs,title })
                      }>
                        
                <img src={item.image} key={index} alt="" className="h-52 w-48" />
                <p>{title}</p>
                </section>
              </div>
            </div>
            
           )})}
      </div>
    </div>
          {selectedMusicList && <Musicalbumplayer 
           _id={selectedMusicList._id} 
           artists={selectedMusicList.artists}
           image={selectedMusicList.image}
           songs={selectedMusicList.songs}
           title={selectedMusicList.title}
          /> }
    </div>
    </div>
  );
};

export default Bollywood;
