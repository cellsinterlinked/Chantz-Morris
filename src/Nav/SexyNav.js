import './SexyNav.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SexyNav = ({ link, title, child, redirect }) => {
  return (
    <li>
      {!link && <p>{title}</p>}
      {!redirect && link && (
        <NavLink to={link} style={{ textDecoration: 'none' }}>
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
      <div className="growbar"></div>
      <section className="growcase"></section>
      {child && (
        <section className="navdropper">
          {child
            .filter((childfilt) => childfilt.redirect === false)
            .map((link, index) => (
              <NavLink to={link.url} style={{ marginLeft: '0px' }}>
                <h2 className="sexylink">{link.title}</h2>
              </NavLink>
            ))}
          {child
            .filter((childfilt) => childfilt.redirect === true)
            .map((link, index) => (
              <a style={{ margin: '0px', cursor: 'pointer' }} href={link.url}>
                <h2 className="sexylink">{link.title}</h2>
              </a>
            ))}
        </section>
      )}
    </li>
  );
};

export default SexyNav;
