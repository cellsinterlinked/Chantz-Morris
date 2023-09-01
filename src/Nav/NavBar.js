import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';
import NavLinks from './NavLinks';
import NavLinksMobile from './NavLinksMobile';
import Logo from '../Resources/NEW LOGO (1).svg';

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
          <NavLinksMobile  />
        </nav>
      </SideDrawer>

      <div className={`fullNavBar ${props.navStyle}`}>
        <NavLink to="/">
          <div className="acmlogo">
         <img src={Logo} alt="" className="logofix" />
          </div>


        </NavLink>
        <div className="wideNav">
          <NavLinks dark={props.dark}/>
        </div>
        <button className={`menu-button ${props.menuStyle}`} onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </>
  );
};

export default NavBar;
