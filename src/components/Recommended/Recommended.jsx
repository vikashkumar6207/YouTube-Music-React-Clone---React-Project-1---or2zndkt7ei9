import React from 'react'
import { useState, useEffect } from 'react';
import Musicplayer from '../Music/Musicplayer';
import play from '../../assets/play-solid.svg';
import cPlay from '../../assets/circle-play-solid.svg';
import cplay1 from '../../assets/circle-play-solid (1).svg'
import useUser from '../../customHooks/useUser';
const Recommended = () => {


    const [musicList, setMusicList] = useState([]);
    const [error, setError] = useState("");
  
    const [selectedMusic, setSelectedMusic] = useState();

    const {searchText} = useUser();
    useEffect(() => {
      fetchSongsList();
    }, []);

    useEffect(()=>{
      fetchSongsList();
    },[searchText]);
  
  
    async function fetchSongsList() {
      
        let url;
        if(searchText != null && searchText != ""){
           url = `https://academics.newtonschool.co/api/v1/music/song?title=${searchText}`;
        }else{
          url = "https://academics.newtonschool.co/api/v1/music/song";
        }
        const myHeaders = new Headers();
          myHeaders.append("projectId", "z5civ6ptecws");
    
          const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };
    
          fetch(url, requestOptions);
    
          try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const result = await response.json();
            console.log("Fetched data:", result);
            if (result && Array.isArray(result.data)) {
              setMusicList(result.data);
              setError(error.message);
            } else {
              throw new Error("Data format is incorrect");
            }
          } catch (error) {
            console.error("Error fetching data:", error);
            setError(error.message);
          }
        }
       

      
      if (error) {
        return <p>Error : {error}</p>;
      }

  return (
    <>
    <div>
        <div >
        <div className="mt-10">
          <h1 className="text-2xl font-bold mb-5">Recommended music</h1>
          <div className="flex overflow-scroll gap-1 ">
            {musicList.map((song, index) => {
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
                        <img src={cPlay} className='playIcon' />
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
        {selectedMusic && (
          <Musicplayer
            title={selectedMusic.title}
            _id={selectedMusic._id}
            audio_url={selectedMusic.audio_url}
            thumbnail={selectedMusic.thumbnail}
          />
        )}
        </div>
    </div>
    </>
  )
}

export default Recommended;