import React from 'react'
import img1 from "../../assets/images/Customized_Music_Artwork_Thumbnail.png";
import img2 from "../../assets/images/Customized_Music_Artwork_Thumbnail (1).png";
import img3 from "../../assets/images/Customized_Music_Artwork_Thumbnail (2).png";
const Charts = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5">Charts</h2>
      <div className="flex gap-1">
        <img src={img1} alt="" className="h-52 w-48" />
        <img src={img2} alt="" className="h-52 w-48" />
        <img src={img3} alt="" className="h-52 w-48" />
      </div>
    </div>
  </div>
  )
}

export default Charts;