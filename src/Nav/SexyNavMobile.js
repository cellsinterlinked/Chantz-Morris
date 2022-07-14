import './SexyNav.css';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

const SexyNav = ({ link, title, child, redirect }) => {
  const [active, setActive] = useState(false)


  return (
    <li style={{textAlign: "left"}}>
       {!link && <p onClick={() => setActive(!active)}>{title}</p>}
      {!redirect && link && (
        <NavLink to={link} style={{ textDecoration: 'none',}}>
          <p>{title}</p>
        </NavLink>
      )}
      {redirect && link && (
        <a
          href={link}
          rel="noreferrer"
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <p>{title}</p>
        </a>
      )}
      {/* <div className="growbar"></div> */}
      <section className="growcase"></section>
      {child && (
        <section className={active ? "navdropper_mobile-active" : "navdropper_mobile"}>
          {child.filter(childfilt => childfilt.redirect === false).map((link, index) => (
            <NavLink to={link.url} style={{ marginLeft: '0px' }}>
              <h2 className="sexylink_mobile">{link.title}</h2>
            </NavLink>
          ))}
          {child.filter(childfilt => childfilt.redirect === true).map((link, index) => (
            <a style={{margin: "0px", cursor: "pointer"}} href={link.url} >
              <h2 className="sexylink_mobile">{link.title}</h2>
            </a>
          ))}
        </section>
      )}
    </li>
  );
};

export default SexyNav;