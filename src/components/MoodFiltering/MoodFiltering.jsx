import React, { useEffect, useState } from "react";

const MoodFiltering = () => {

    // const [mood, setMood] = useState("romantic");
    const [filterdMusic, setFilteredMusic] = useState([]);
  useEffect(() => {
    async function moodFilter() {
        const url = `https://academics.newtonschool.co/api/v1/music/song?filter={\"mood\":\"romantic\"}`
      const myHeaders = new Headers();
      myHeaders.append("projectId", "z5civ6ptecws");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

    const response = await  fetch(url,requestOptions);
      const result =  response;
      // console.log(result);
      // console.log('moodFilter', result);
      setFilteredMusic(result);
    }
    
    try{
        moodFilter();
    }catch (error){
        console.log(error)
    }
  },[]);

  return (
    <>
        <div>MoodFiltering</div>
    </>
  )
}
export default MoodFiltering;
