import React from 'react';
import { AiOutlineInstagram , AiFillFacebook , AiOutlineMail , AiFillLinkedin } from 'react-icons/ai';

import { NavLink } from 'react-router-dom';

import { BsArrowRight } from 'react-icons/bs';
import { SiRealm } from 'react-icons/si';
import brokerImg from '../Resources/8.5x11FCTLogoInfo.svg';
import './Footer.css';

const Footer = (props) => {
  return (
    <div className="fullFooter">
      <div className="footer-top">
        <div className="footer-columnOne">
          <p className="footer-name">ACM Property Management, LLC</p>
          <div className="footer-brokerAddress">
            <p>ACM Property Management, LLC</p>
            <p>3221 17th Street </p>
            <p>Columbus, IN 47201</p>
          </div>
          <div className="footer-Phone-Email">
            <p>+1 812 525 0325</p>
            <p>Chantz.morris@acmpropertymgnmt.com</p>
            <p>+1 812 525 0028</p>
            <p>Ashlee.morris@acmpropertymgnmt.com</p>
          </div>
        </div>
        <div className="footer-columnTwo">
          <div className="footer-workWithChantz">
            <NavLink to="/contact">
              <p>WORK WITH US</p>
              <BsArrowRight />
            </NavLink>
          </div>
          <a href="https://nervous-agnesi-29fb05.netlify.app/contact" style={{ width: '15.5rem' }}>
            Schedule Free Consultation
          </a>
          <div className="footerLicense">
          <p>
            License Status: Active
          </p>
          <p>License #: RB20001606</p>
          <p>License #: RB21002818</p>
          <p>License State: Indiana</p>
        </div>
        </div>



        <div className="footer-columnThree">
          <div className="broker-bit">
            {/* <a href="https://www.talktotucker.com/" target="_blank">
            <img
              target="_blank"
              href="https://www.talktotucker.com/"
              src={brokerImg}
              alt="F.C. Tucker Real Estate Experts"
            />
            </a> */}

          </div>
          <div className="footer-bottomLine" />
          <p className="footer-contact-title">STAY IN TOUCH</p>
          <div className="footerIconContainer">
            <h3 className="footerNameContact">Chantz</h3>
            <a href="https://www.facebook.com/chantz.morris.79" target="_blank">
              <AiFillFacebook
                className="contactIcon"
                style={{
                  height: '2rem',
                  width: '2rem',
                  marginLeft: '.3rem',
                  marginRight: '.3rem',
                }}
              />
            </a>
            <a href="https://www.linkedin.com/in/chantz-morris-8bb3471bb/" target="_blank">
            <AiFillLinkedin
              className="contactIcon"
              style={{
                height: '2rem',
                width: '2rem',
                marginLeft: '.3rem',
                marginRight: '.3rem',
              }}
            />
            </a>

            <a href="mailto:chantz@themodglingroup.com" target="_blank">
              <AiOutlineMail
                className="contactIcon"
                style={{
                  height: '2rem',
                  width: '2rem',
                  marginLeft: '.3rem',
                  marginRight: '.3rem',
                }}
              />
            </a>
          </div>

          <h3 className="footerNameContact">Ashlee</h3>

          <div className="footerIconContainer">
            <a href="https://www.facebook.com/AshleeMorris4" target="_blank">
              <AiFillFacebook
                className="contactIcon"
                style={{
                  height: '2rem',
                  width: '2rem',
                  marginLeft: '.3rem',
                  marginRight: '.3rem',
                }}
              />
            </a>

            <a href="mailto:ashlee@themodglingroup.com" target="_blank">
              <AiOutlineMail
                className="contactIcon"
                style={{
                  height: '2rem',
                  width: '2rem',
                  marginLeft: '.3rem',
                  marginRight: '.3rem',
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright-Container">
          <p>© Copyright 2021</p>
          <p>ACM Property Management LLC</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
