import React, { useState } from 'react'
import img1 from '../../assets/liked-music.png';
import img2 from '../../assets/sounds-from-shorts.png';
import img3 from '../../assets/saved-episodes.png';
import Login from '../Login/Login';
import Asidebar from '../../components/Asidebar/Asidebar';
import CSS from './Library.module.css';


const Library = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  const arr = ["Playlists","Podcasts", "Songs", "Albums","Artists"];
  return (
    <>
    <div className={CSS.container}>
    <div className={CSS.Asidebar}>
      <Asidebar/>
    </div>
    <div className={CSS.mainbar}>
    <div className='flex gap-2 items-center m-4 p-2 '>
    {arr.map((item, index)=> <button key={index} className=' p-1 px-3 rounded items-center LibraryBtn'>{item}</button>)}
    </div>
    <div className='flex gap-2 justify-center '>
      <div>
        <img src={img1} alt="" className='h-48 w-44'/>
        <h2 className='text-xl'>Liked Music</h2>
      </div>
      <div>
        <img src={img2} alt="" className='h-48 w-44'/>
        <h2 className='text-xl'>Sounds from Shorts</h2>
      </div>
      <div>
        <img src={img3} alt="" className='h-48 w-44'/>
        <h2 className='text-xl'>Episodes for Later</h2>
      </div>
    </div>
    </div>
   
    </div>
    </>
  )
}

export default Library