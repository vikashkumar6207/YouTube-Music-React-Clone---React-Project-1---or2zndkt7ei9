import React, { useState } from "react";

import img1 from "../../assets/Explore/Explore01.jpg";
import img2 from "../../assets/Explore/Explore.jpg";
import img3 from "../../assets/Explore/Explore03.jpg";
import img4 from "../../assets/Explore/Explore04.jpg";
import img5 from "../../assets/Explore/Explore05.jpg";
import img6 from "../../assets/Explore/Explore06.jpg";
import img7 from "../../assets/Explore/Explore07.jpg";
import img8 from "../../assets/Explore/Explore08.jpg";
import img9 from "../../assets/Explore/Explore09.jpg";
import img10 from "../../assets/Explore/Explore10.jpg";
import img11 from "../../assets/Explore/Explore11.jpg";
import img12 from "../../assets/Explore/Explore12.jpg";
import img13 from "../../assets/Explore/Explore13.jpg";
import img14 from "../../assets/Explore/Explore14.jpg";
import img15 from "../../assets/Explore/Explore15.jpg";
import img16 from "../../assets/Explore/Explore16.jpg";
import img17 from "../../assets/Explore/Explore17.jpg";
import img18 from "../../assets/Explore/Explore18.jpg";
import img19 from "../../assets/Explore/Explore19.jpg";
import img20 from "../../assets/Explore/Explore20.jpg";
import img21 from "../../assets/Explore/Explore21.jpg";
import img22 from "../../assets/Explore/Explore22.jpg";
import img23 from "../../assets/Explore/Explore23.jpg";
import Commingsoon from "../../components/Commingsoon/Commingsoon";
import Asidebar from "../../components/Asidebar/Asidebar";

import "./Explore.css";

const Explore = () => {
  const [comming, setComming] = useState(false);

  const Button = ["New releases", "Charts", "Moods & genres", "Podcasts"];
  const arr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
  ];

  const MoodsWithColors = [
    { mood: "Chill", color: "#FF5733" },
    { mood: "Commute", color: "#33FF57" },
    { mood: "Energy Boosters", color: "#3357FF" },
    { mood: "Feel Good", color: "#FF33A1" },
    { mood: "Focus", color: "#33FFA1" },
    { mood: "Party", color: "#A133FF" },
    { mood: "Romance", color: "#FF5733" },
    { mood: "Sad", color: "#5733FF" },
    { mood: "Sleep", color: "#33FFA1" },
    { mood: "Workout", color: "#FFA133" },
    { mood: "African", color: "#33A1FF" },
    { mood: "Arabic", color: "#A1FF33" },
    { mood: "Assamese & Odia", color: "#FF33A1" },
    { mood: "Bengali", color: "#33FF57" },
    { mood: "Bhojpuri", color: "#5733FF" },
    { mood: "Carnatic Classical", color: "#FF5733" },
    { mood: "Classical", color: "#A1FF33" },
    { mood: "Country & Americana", color: "#33FFA1" },
    { mood: "Dance & Electronic", color: "#33A1FF" },
    { mood: "Decades", color: "#FFA133" },
    { mood: "Devotional", color: "#FF33A1" },
    { mood: "Family", color: "#33FF57" },
    { mood: "Folk & Acoustic", color: "#5733FF" },
    { mood: "Ghazal/Sufi", color: "#FF5733" },
    { mood: "Gujarati", color: "#A1FF33" },
    { mood: "Haryanvi", color: "#33FFA1" },
    { mood: "Hindi", color: "#33A1FF" },
    { mood: "Hindustani Classical", color: "#FFA133" },
    { mood: "Hip-Hop", color: "#FF33A1" },
    { mood: "Indian Indie", color: "#33FF57" },
    { mood: "Indian Pop", color: "#5733FF" },
    { mood: "Indie & Alternative", color: "#FF5733" },
    { mood: "J-Pop", color: "#A1FF33" },
    { mood: "Jazz", color: "#33FFA1" },
    { mood: "K-Pop", color: "#33A1FF" },
    { mood: "Kannada", color: "#FFA133" },
    { mood: "Latin", color: "#FF33A1" },
    { mood: "Malayalam", color: "#33FF57" },
    { mood: "Marathi", color: "#5733FF" },
    { mood: "Metal", color: "#FF5733" },
    { mood: "Monsoon", color: "#A1FF33" },
    { mood: "Pop", color: "#33FFA1" },
    { mood: "Punjabi", color: "#33A1FF" },
    { mood: "R&B & Soul", color: "#FFA133" },
    { mood: "Reggae & Caribbean", color: "#FF33A1" },
    { mood: "Rock", color: "#33FF57" },
    { mood: "Tamil", color: "#5733FF" },
    { mood: "Telugu", color: "#FF5733" },
  ];

  function commingsoonfun() {
    setComming(true);
  }

  return (
    <div className="ExploreConatiner">
      <div className="Asidebar">
        <Asidebar />
      </div>
      <div className="Mainbar">
        {comming ? ( <Commingsoon />
        ) : (
          <div>
            <div className="ExploreParent">
              {Button.map((btn, index) => (
                <button className="ExploreBtn" key={index}>
                  {btn}
                </button>
              ))}
            </div>
            <div className="overflow-scroll mt-10">
              <h1 className="text-2xl font-bold mb-5">New albums & singles</h1>
              <div className="flex gap-1 m-1 mt-4">
                {arr.map((image, index) => (
                  <img src={image} key={index} className="h-52 w-48" />
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-2xl">Moods & genres</h1>
              <div className="moodBtnContainer">
                {MoodsWithColors.map((item, index) => (
                  <button
                    onClick={commingsoonfun}
                    className="btnClass"
                    style={{ borderLeft: `10px solid ${item.color}` }}
                  >
                    {item.mood}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
