import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import NavLinks from './NavLinks';

const NavBar = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {drawerOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerOpen} onClick={closeDrawerHandler}>
        <nav className="nav-drawer">
          <NavLinks />
        </nav>
      </SideDrawer>

      <div className="fullNavBar">
        <NavLink to="/">
        <h1>
          Chantz Morris
        </h1>

        </NavLink>
        <div className="wideNav">
          <NavLinks />
        </div>
        <button className="menu-button" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </>
  );
};

export default NavBar;
