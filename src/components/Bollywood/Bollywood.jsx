// import React from "react";
import { useState, useEffect } from "react";
import Library from "../../pages/Library/Library";
import { Link, Route, useNavigate } from "react-router-dom";
import Musicalbumplayer from "../Musicalbumplayer/Musicalbumplayer";
import Musicplayer from '../Music/Musicplayer';
import useUser from "../../customHooks/useUser";

const Bollywood = () => {
  const [musicAlbumList, setMusicAlbumList] = useState([]);
  const [currentAlbum,setCurrentAlbum] = useState('');
  const navigate = useNavigate();
    const {searchText} = useUser();
  useEffect(() => {
    try {
      getMusicAlbum();
    } catch (error) {
      console.log("getMusicAlbum", error);
    }
  }, []);

  useEffect(() => {
    try {
      getMusicAlbum();
    } catch (error) {
      console.log("getMusicAlbum", error);
    }
  }, [searchText]);
    async function getMusicAlbum() {
      let url = "https://academics.newtonschool.co/api/v1/music/album";
      
      const myHeaders = new Headers();
      myHeaders.append("projectId", "z5civ6ptecws");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(url, requestOptions);
      const result = await response.json();
      
      setMusicAlbumList(result.data);
    
    }
    

    
  return (

    <div>
    <div className="mt-10" onClick={(e)=>{
      setCurrentAlbum(e.target.id);
       
       navigate("/musicalbumplayer");
    }}>
        <h1 className="text-2xl font-bold mb-5">Bollywood</h1>
      <div className="flex overflow-scroll gap-1">
        
        {musicAlbumList.map((item, index) => {
          
           const {_id, artists,image,songs,title} = item;
           return (
            <div  key={index}>
              <div className="flex w-48 gap-1">
                <section onClick={(e) =>{
                   { _id }
                    localStorage.setItem("albumID", _id);
                  } 
                      }>
                        
                <img src={item.image} alt="" className="h-52 w-48" />
                <p>{title}</p>
                </section>
              </div>
            </div>
            
           )})}
      </div>
    </div>
          {/* {selectedMusicList && <Musicalbumplayer
           _id={selectedMusicList._id} 
           artists={selectedMusicList.artists}
           image={selectedMusicList.image}
           songs={selectedMusicList.songs}
           title={selectedMusicList.title}
          /> } */}
    </div>
  );
};

export default Bollywood;
