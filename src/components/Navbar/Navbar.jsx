import React, { useContext, useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.svg';
import cast from '../../assets/chromecast (1).svg';
import profile from '../../assets/profile.jpeg';
import srch from '../../assets/searchSvgW.svg';
import menu from '../../assets/menu-bars.svg';
import ellipsis from '../../assets/ellipsis-vertical-solid.svg';
import { UserContext } from '../../Provider/UserProvider';

const Navbar = () => {

  const contextData = useContext(UserContext);
  const {setSearchText, logout} = contextData;


  const name = sessionStorage.getItem("name");
      
  const loginlogoutfun = ()=>{
    if(name){ 
      logout();
      alert('you want to loggedout');

    }
  }

  return (
    <>
    <div className=' flex fixed w-full bg-inherit text-white items-center p-2 justify-between Navbarborder' style={{height: '100px'}}>
    <NavLink to="/" className='flex'>
        <img src={menu} className='h-6'/>
        <img src={logo} className=' w-20' />
    </NavLink>
    <div className='bg-inherit'>
        <img src={srch} className='absolute  h-5 mt-3 ml-3' style={{background: 'transparent'}}/>
        <input type='text' placeholder='Search songs, albums, artists, podcasts' className='searchInput' onChange={(e)=> setSearchText(e.target.value)}/>

    </div>
    <div className='bg-inherit flex items-center '>
        <img src={cast} className=' w-6 bg-transparent  '/>
        <img src={ellipsis} className='h-6 mr-3 ml-3' />
        <NavLink to="/login" className="bg-inherit">
        { !name ? <button className='w-20 bg-white text-black p-1 rounded-2xl'>Sign in</button> : <button onClick={loginlogoutfun} className='w-20 bg-white text-black p-1 rounded-2xl'>{name}</button>}
        </NavLink>
        
    </div>
    </div>
    
    
    </>
  )
}

export default Navbar