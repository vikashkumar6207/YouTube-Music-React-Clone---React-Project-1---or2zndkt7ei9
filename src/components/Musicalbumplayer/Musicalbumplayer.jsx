import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Asidebar from "../Asidebar/Asidebar";
import playIcon from "../../assets/play (3).png";
// import  {FontAwesomeIcon}  from 'react-icons';
import "./Musicalbumplayer.css";
import Musicplayer from "../Music/Musicplayer";
import Songplay from "../Music/Songplay";

const Musicalbumplayer = () => {
  const navigate = useNavigate();

  const [libraryStatus, setLibraryStatus] = useState();
  const [musiclist, setData] = useState([]);
  const [selectedMusic, setSelectedMusic] = useState();
  // const id=allData.albumID.albumId;
  console.log('musiclist',musiclist)

  console.log("selectedMusic", selectedMusic);
  const id = localStorage.getItem("albumID");
  const url = `https://academics.newtonschool.co/api/v1/music/album/${id}`;
  const headers = {
    projectId: "z5civ6ptecws",
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, { headers });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error(response.statusText);
      }
    };
    fetchData().then((d) => {
      setData(d.data);
      const arr2 = JSON.parse(localStorage.getItem("libraryAlbum"));
      const ans2 = arr2.filter((e) => {
        return e._id == d.data._id;
      });
      if (ans2.length == 0) {
        setLibraryStatus(false);
      } else {
        setLibraryStatus(true);
      }
    });
  }, []);

  // useEffect(() => {}, []);

  const handleSaveLibrary = () => {
    const obj = musiclist;
    const arr = JSON.parse(localStorage.getItem("libraryAlbum"));
    const ans = arr.filter((e) => {
      return e._id == obj._id;
    });
    if (!ans.length == 0) {
      setLibraryStatus(false);
      // alert("library status is", libraryStatus ? "true":"false");
      arr.forEach((o) => {
        if (o._id === obj._id) {
          arr.splice(arr.indexOf(o), 1);
          localStorage.setItem("libraryAlbum", JSON.stringify(arr));
        }
      });
    } else {
      arr.push(musiclist);
      localStorage.setItem("libraryAlbum", JSON.stringify(arr));
      setLibraryStatus(true);
      // alert("library status is", libraryStatus.current ? "true":"false");
      // alert("successfully added in library", libraryStatus.current);
    }
  };
  // console.log("ID is ", id);
  // console.log("musiclist is ", musiclist);

  return (
    <>
      <div className="music_player_gparent">
        <div className="aside">
          <Asidebar />{" "}
        </div>
        <div className="music_player_container">
          <div className="music_album_player">
            <img src={musiclist.image} alt="" className="imgtag" />
            <h1 className="text-3xl font-bold">{musiclist.name}</h1>
          </div>
          <div>
            {musiclist.artists &&
              musiclist.artists.map((e, ind) => {
                return (
                  <>
                    <span className="text-2xl">{e.name}, </span>
                  </>
                );
              })}
            <p>
              <h4>{musiclist.songs ? musiclist.songs.length : null} songs</h4>
              <p className="play_btn_save_item_container">
                <button
                  className="playbutton"
                  variant="outlined"
                  onClick={() => {
                    navigate("/songplay");
                    localStorage.setItem("songIndex", 0);
                  }}
                >
                  play
                </button>
                <button
                  className="addbutton"
                  onClick={() => {
                    handleSaveLibrary();
                  }}
                  variant="contained"
                  style={{
                    background: `${!libraryStatus ? "green" : "red"}`,
                    color: "#fff",
                  }}
                >
                  {!libraryStatus ? "Add in library" : "Delete from library"}
                </button>
              </p>
            </p>
          </div>

          <div item className="albumsonglist">
            <ol>
              {musiclist.songs &&
                musiclist.songs.map((e, index) => {
                  return (
                    <>
                      
                      <li
                        className="music_list_containet"
                        onClick={() => {
                          navigate("/songplay");
                          localStorage.setItem("songIndex", index);
                        }}
                      >
                        {index}. {e.title}
                        <img src={playIcon} alt="icon" className="playIcon" />
                      </li>
                    </>
                  );
                })}
            </ol>
          </div>
        </div>
        {selectedMusic && (
          <Songplay
            title={selectedMusic.title}
            thumbnail={selectedMusic.thumbnail}
            audio_url={selectedMusic.audio_url}
            artist={selectedMusic.artist}
          />
        )}
      </div>
    </>
  );
};

export default Musicalbumplayer;
