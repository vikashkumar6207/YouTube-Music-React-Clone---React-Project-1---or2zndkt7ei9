import React from 'react'

import { Link } from 'react-router-dom'
import './Asidebar.css';
const Asidebar = () => {
  return (
    <>
    <div className=' bg-inherit items-center pl-3'>
      <Link to="/" className='asidemenu bg-inherit flex items-center m-1 p-1 rounded'>Home</Link>
      <Link to="/explore" className='asidemenu bg-inherit flex items-center m-1 p-1 rounded'>Explore</Link>
      <Link to="/library" className='asidemenu bg-inherit flex items-center m-1 p-1 rounded'>Library</Link>
      <Link to="/login" className='asidemenu bg-inherit flex items-center m-1 p-1 rounded'>Login</Link>      
    </div>
    </>
  )
}

export default Asidebar