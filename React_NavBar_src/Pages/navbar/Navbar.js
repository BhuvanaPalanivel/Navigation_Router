import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
    const [isMobile,setIsMobile]=useState(false);
  return (
   <nav className='navbar'>
    <h3 className='logo'>Logo</h3>
    <ul className={isMobile ?'nav-links-mob' : 'nav-links'} onClick={()=>setIsMobile(false)}>
     
      <Link to="/" className='home'>
        <li>Home</li>
      </Link>
      <Link to="/products" className='products'>
        <li>Products</li>
      </Link>
      <Link to="/about" className='about'>
        <li>About</li>
      </Link>
      <Link to="/login" className='login'>
        <li>Login</li>
      </Link>
    </ul>
    <button className='mob-menu-icon'
    onClick={()=> setIsMobile(!isMobile)} >
        {isMobile ? <h1>X</h1> : <h1>=</h1>}
    </button>
   </nav>
  )
}

export default Navbar