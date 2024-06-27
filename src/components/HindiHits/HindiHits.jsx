import React from "react";
import Hitlist1 from "../../assets/Hitlist/Hitlist1.jpg";
import Hitlist2 from "../../assets/Hitlist/Hitlist2.jpg";
import Hitlist3 from "../../assets/Hitlist/Hitlist3.jpg";
import Hitlist4 from "../../assets/Hitlist/Hitlist4.jpg";
import Hitlist5 from "../../assets/Hitlist/Hitlist5.jpg";
import Hitlist6 from "../../assets/Hitlist/Hitlist6.jpg";
import Hitlist7 from "../../assets/Hitlist/Hitlist7.jpg";
import Hitlist8 from "../../assets/Hitlist/Hitlist8.jpg";
import Hitlist9 from "../../assets/Hitlist/Hitlist9.jpg";
import Hitlist10 from "../../assets/Hitlist/Hitlist10.jpg";

const HindiHits = () => {
  const Hits = [Hitlist1,Hitlist2, Hitlist3, Hitlist4, Hitlist5, Hitlist6,Hitlist7, Hitlist8,Hitlist9,Hitlist10];
  return (
    <>
      <div className="mt-10 mb-10">
        <h2 className="text-2xl font-bold mb-5">Hindi Hits</h2>
        <div className="overflow-scroll">
          <div className="flex gap-1">
            {Hits.map((item, index) => (
              
              <img src={item} key={index} className="h-52 w-48" />
            
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HindiHits;
