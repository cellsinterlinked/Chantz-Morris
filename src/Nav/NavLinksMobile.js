import React, { useContext } from 'react';

import './NavBar.css';

import SexyNavMobile from './SexyNavMobile';

const NavLinksMobile = (props) => {
  return (
    <div className={props.dark ? 'darkFullNavLinks' : 'fullNavLinks'}>
      <SexyNavMobile link="/" title="HOME" />
      <SexyNavMobile

        title="BUYING OR SELLING"
        child={[
          { title: 'BUYERS', url: '/buyers', redirect: false  },
          { title: 'SELLERS', url: '/sellers', redirect: false  },
        ]}
      />
      <SexyNavMobile

        title="PROPERTY MANAGEMENT"
        child={[
          { title: 'SERVICES AND RATES', url: '/services' , redirect: false },
          { title: 'TENANT/OWNER PORTAL', url: 'https://acmpm.managebuilding.com/Resident/public/home', redirect: true },
        ]}
      />
      <SexyNavMobile link="/local" title="LOCAL SERVICES" />
      {/* <SexyNavMobile redirect="true"  link="https://www.talktotucker.com/ashlee.morris" title="PROPERTY SEARCH" /> */}
      <SexyNavMobile link="/blog" title="BLOG" />
      <SexyNavMobile link="/about" title="ABOUT US" />
      <SexyNavMobile link="/contact" title="CONTACT" />
    </div>
  );
};

export default NavLinksMobile;