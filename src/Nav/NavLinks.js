import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { AuthContext } from '../Context/auth-context';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <div className="fullNavLinks">
      <li>
        <NavLink to="/" exact style={{ textDecoration: 'none' }}>
          <p>HOME</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/buyers" exact style={{ textDecoration: 'none' }}>
          <p>BUYERS</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/sellers" exact style={{ textDecoration: 'none' }}>
          <p>SELLERS</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" exact style={{ textDecoration: 'none' }}>
          <p>BLOG</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" exact style={{ textDecoration: 'none' }}>
          <p>ABOUT ME</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" exact style={{ textDecoration: 'none' }}>
          <p>CONTACT</p>
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/inbox" exact style={{ textDecoration: 'none' }}>
            <p>INBOX</p>
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/coolbox" exact style={{ textDecoration: 'none' }}>
            <p>COOL</p>
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/" exact style={{ textDecoration: 'none' }} onClick={auth.logout}>
            <p>LOGOUT</p>
          </NavLink>
        </li>
      )}
    </div>
  );
};

export default NavLinks;
