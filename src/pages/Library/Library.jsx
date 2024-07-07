import React, { useEffect, useState } from "react";
import img1 from "../../assets/liked-music.png";
import img2 from "../../assets/sounds-from-shorts.png";
import img3 from "../../assets/saved-episodes.png";
import Login from "../Login/Login";
import Asidebar from "../../components/Asidebar/Asidebar";
import CSS from "./Library.module.css";
import useUser from "../../customHooks/useUser";
import Musicplayer from "../../components/Music/Musicplayer";

const Library = () => {
  const { getToken } = useUser();

  const [likeSongsList, setLikeSongsList] = useState([]);
  const [selectedMusic,setSelectedMusic] = useState();

  console.log("getFavouritesSongs", likeSongsList);

  async function getFavouritesSongs() {
    const url = "https://academics.newtonschool.co/api/v1/music/favorites/like";
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken}`);
    myHeaders.append("projectID", "z5civ6ptecws");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      const response = await fetch(url, requestOptions);
      const result = await response.json();
      setLikeSongsList(result.data.songs);
      // console.log('getFavouritesSongs',result.data.songs)
    } catch (error) {
      console.log(error);
    }
  }

  /* function getlikeSongfun() {
    setLikeSontstatus(true);
  } */
  const arr = ["Playlists", "Podcasts", "Songs", "Albums", "Artists"];
  return (
    <>
      <div className={CSS.container}>
        <div className={CSS.Asidebar}>
          <Asidebar />
        </div>
        <div className={CSS.mainbar}>
          <div className="flex gap-2 items-center m-4 p-2 ">
            {arr.map((item, index) => (
              <button
                key={index}
                className=" p-1 px-3 rounded items-center LibraryBtn"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex gap-2 justify-center ">
            <div>
              <img
                src={img1}
                alt=""
                className="h-48 w-44"
                onClick={()=>getFavouritesSongs()}
              />
              <h2 className="text-xl">Liked Music</h2>
            </div>
            <div>
              <img src={img2} alt="" className="h-48 w-44" />
              <h2 className="text-xl">Sounds from Shorts</h2>
            </div>
            <div>
              <img src={img3} alt="" className="h-48 w-44" />
              <h2 className="text-xl">Episodes for Later</h2>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-row overflow-scroll gap-1 ">
              {likeSongsList.map((song, index) => {
                 const { title, _id, audio_url, thumbnail } = song;
                return (
                  <div className="flex" key={index}>
                
                  <div className="flex w-48 gap-1">
                    <section
                      onClick={() =>
                        setSelectedMusic({ title, _id, audio_url, thumbnail })
                      }
                    >
                      <div className='ImgContainer'>
                        {/* <img src={cPlay} className='playIcon' /> */}
                        <img src={thumbnail} alt="" className="h-52 w-48 imageTag" />
                      </div>
                      
                      <p>{title}</p>
                    </section>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
         
        </div>
        {selectedMusic && (
          <>
          <Musicplayer
            title={selectedMusic.title}
            _id={selectedMusic._id}
            audio_url={selectedMusic.audio_url}
            thumbnail={selectedMusic.thumbnail}
          />
         
          </>
        )}
      </div>
    </>
  );
};

export default Library;
