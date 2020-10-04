import React, { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
import { AuthContext } from '../Context/auth-context';

const NavLinks = props => {
  const auth = useContext(AuthContext)

 return(
   <div className="fullNavLinks">
    <li>
        <NavLink to="/" exact style={{textDecoration:"none"}}>
          <p>Home</p>
        </NavLink>
        </li>
        <li>
        <NavLink to="/buyers" exact style={{textDecoration:"none"}}>
          <p>For Buyers</p>
        </NavLink>
        </li>
        <li>
        <NavLink to="/sellers" exact style={{textDecoration:"none"}}>
          <p>For Sellers</p>
        </NavLink>
        </li>
        <li>
        <NavLink to="/blog" exact style={{textDecoration:"none"}}>
          <p>Blog</p>
        </NavLink>
        </li>
        <li>
        <NavLink to="/about" exact style={{textDecoration:"none"}}>
          <p>About Me</p>
        </NavLink>
        </li>
        <li>
        <NavLink to="/contact" exact style={{textDecoration:"none"}}>
          <p>Contact</p>
        </NavLink>
        </li>
        {auth.isLoggedIn && (
        <li>
        <NavLink to="/inbox" exact style={{textDecoration:"none"}}>
          <p>Inbox</p>
        </NavLink>
        </li>
        )}
   
   
   
   
   
   
   
   
   
   
   
   
   
   </div>
 )
}

export default NavLinks