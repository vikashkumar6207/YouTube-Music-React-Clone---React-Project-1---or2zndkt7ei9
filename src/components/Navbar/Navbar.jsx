import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';
import cast from '../../assets/chromecast (1).svg';
import profile from '../../assets/profile.jpeg';
import srch from '../../assets/searchSvgW.svg';
import menu from '../../assets/menu-bars.svg';
import ellipsis from '../../assets/ellipsis-vertical-solid.svg';
import { UserContext } from '../../Provider/UserProvider';

const Navbar = () => {

  const contextData = useContext(UserContext);
  const {setSearchText} = contextData;
  return (
    <>
    <div className=' flex fixed w-full bg-black text-white items-center border-b p-2 justify-between' style={{height: '100px'}}>
    <Link to="/" className='flex gap-2 bg-inherit'>
        <img src={menu} className='h-6'/>
        <img src={logo} className='bg-inherit w-20'/>
    </Link>
    <div className='bg-inherit'>
        <img src={srch} className='absolute  h-5 mt-3 ml-3' style={{background: 'transparent'}}/>
        <input type='text' placeholder='Search songs, albums, artists, podcasts' className='searchInput' onChange={(e)=> setSearchText(e.target.value)}/>

    </div>
    <div className='bg-transparent flex items-center '>
        <img src={cast} className=' w-6 bg-transparent  '/>
        <img src={ellipsis} className='h-6 mr-3 ml-3' />
        <button className='w-20 bg-white text-black p-1 rounded-2xl'>Sign in</button>
    </div>
    </div>
    
    
    </>
  )
}

export default Navbar