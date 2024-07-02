import React, { useEffect, useState } from "react";

import Yoga from "../../components/Yoga/Yoga";
import Multiverse from "../../components/Multiverse/Multiverse";
import HindiHits from "../../components/HindiHits/HindiHits";
import Buttons from "../../components/Buttons/Buttons";

import Recommended from "../../components/Recommended/Recommended";
import "./Home.css";

import Asidebar from "../../components/Asidebar/Asidebar";
import Charts from "../../components/Charts/Charts";
import EasyEvenings from "../../components/EasyEvenings/EasyEvenings";
import Bollywood from "../../components/Bollywood/Bollywood";
import MoodFiltering from "../../components/MoodFiltering/MoodFiltering";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Home = () => {

 
  return (
    <>
      <div className="parentContainer">
        <div className="asideBar">
          <Asidebar />
        </div>

        <div>
          <div className="mainBody">
            <Buttons />
            {/* <FontAwesomeIcon icon="fa-regular fa-circle-play" /> */}
            <Recommended  />
            <Multiverse  />
            <EasyEvenings />
            <Yoga />
            <Bollywood />
            <HindiHits />
            <Charts />
            <MoodFiltering />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// Api key:- AIzaSyCTYtsKjmgeM7didVG9zqpL4V0PAMCkPgg

// AIzaSyCTYtsKjmgeM7didVG9zqpL4V0PAMCkPgg
