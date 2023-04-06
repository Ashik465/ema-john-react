import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
<div className="navbar  bg-primary md:px-24 ">
  <div className="navbar-start ">
    {/* <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> */}
    <img  src={logo} alt="" />  </div>
  
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 text-white">
      <li><Link to='/'>Shop</Link></li>
      <li><Link to='/orders'>Order </Link></li>
      <li><Link to='/inventory'> Inventory</Link></li>
      <li><Link to='/login'>Login</Link></li>
      
    </ul>
  </div>
</div>
        </>
    );
};

export default Header;