import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

const NavBar = (props) => {

  return (
    <div className="fullNavBar">
        <h1>
          Chantz Morris
        </h1>
        <li>
          Home
        </li>
        <li>
        <NavLink to="/buyers" exact style={{textDecoration:"none"}}>
          <p>For Buyers</p>
        </NavLink>
        </li>
        <li>
          For Sellers
        </li>
        <li>
          Blog
        </li>
        <li>
          About Me
        </li>
        <li>
          Contact
        </li>


    </div>
  )
}

export default NavBar;