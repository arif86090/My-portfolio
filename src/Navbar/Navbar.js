import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import logo from '../images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const menuItems= <> 
    <li className='ml-3 font-bold'><NavLink to='/'>Home</NavLink></li>
    <li className='ml-3 font-bold'><NavLink to='/about'>About</NavLink></li>
    <li className='ml-3 font-bold'><NavLink to='/myportfolio'>My Portfolio</NavLink></li>
  
</>
    return (
        <div className='bg-white fixed w-full top-0 z-20 m-auto'>
           <div class="  navbar  py-3  container m-auto">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul> 
    </div>
    <Link to='/'>  <img src={logo} className='logo' id='logo'  alt="" /></Link>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {menuItems}
    </ul>
  </div>
  <div class="navbar-end lg:hidden">
  <Link to='/'>  <img src={logo} className='logo flex items-end'  alt="" /></Link>
  </div>
 
</div>
        </div>
    );
};

export default Navbar;