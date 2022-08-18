import React, { useContext } from 'react';

import './NavBar.css';

import SexyNav from './SexyNav';

const NavLinks = (props) => {
  return (
    <div className={props.dark ? 'darkFullNavLinks' : 'fullNavLinks'}>
      <SexyNav link="/" title="HOME" />
      <SexyNav
        title="BUYING OR SELLING"
        child={[
          { title: 'BUYERS', url: '/buyers', redirect: false  },
          { title: 'SELLERS', url: '/sellers', redirect: false  },
        ]}
      />
      <SexyNav
        title="PROPERTY MANAGEMENT"
        child={[
          { title: 'SERVICES AND RATES', url: '/services' , redirect: false },
          { title: 'TENANT / OWNER PORTAL', url: 'https://acmpropertymanagement.managebuilding.com/Resident/public/home', redirect: true },
        ]}
      />
      <SexyNav link="/local" title="LOCAL SERVICES" />
      <SexyNav redirect="true"  link="https://www.talktotucker.com/chantz.morris" title="PROPERTY SEARCH" />
      <SexyNav link="/blog" title="BLOG" />
      <SexyNav link="/about" title="ABOUT US" />
      <SexyNav link="/contact" title="CONTACT" />
    </div>
  );
};

export default NavLinks;
