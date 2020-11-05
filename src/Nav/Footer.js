import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import {SiRealm} from 'react-icons/si';
import brokerImg from '../Resources/THE MODGLIN GROUP A Realty Company banner.png';
import './Footer.css';

const Footer = props => {
  return(
    <div className="fullFooter">
    <div className="footer-top">
      <div className="footer-columnOne">
        <p className="footer-name">CHANTZ MORRIS</p>
        <div className="footer-brokerAddress">
        <p>THE MODGLIN GROUP</p>
        <p>432 S. Emerson Ave., Suite 120</p> 
        <p>Greenwood, IN 46143</p>
        </div>
        <div className="footer-Phone-Email">
        <p>+1 812 592 7785</p>
        <p>chantz@themodglingroup.com</p>
        </div>
      </div>
      <div className="footer-columnTwo">
        <div className="footer-workWithChantz">
          <a href="http://localhost:3000/contact">
          <p>WORK WITH CHANTZ</p>
          <BsArrowRight />
          </a>
        </div>
        <a href="http://localhost:3000/contact"style={{width: "15.5rem"}}>Schedule Free Consultation</a>
        <a href="http://localhost:3000#activeListings"style={{width: "8.3rem"}}>Search Homes</a>
        <a style={{width: "7.5rem"}}>Recent Sales</a>
      </div>
      <div className="footer-columnThree">
        <div className="broker-bit">
          <img target="_blank" href="https://www.themodglingroup.com/"src={brokerImg} alt="MODGLIN"/>
        </div>
          <div className="footer-bottomLine"></div>
        <p className="footer-contact-title">STAY IN TOUCH</p>
        <div className="footerIconContainer">
          <AiOutlineInstagram className="contactIcon" style={{height: "2rem", width: "2rem", marginLeft:".3rem", marginRight:".3rem"}} />
          <a href="https://www.facebook.com/chantz.morris.79" target="_blank"><AiFillFacebook className="contactIcon" style={{height: "2rem", width: "2rem", marginLeft:".3rem", marginRight:".3rem"}} /></a>
          <AiFillLinkedin className="contactIcon" style={{height: "2rem", width: "2rem", marginLeft:".3rem", marginRight:".3rem"}}/>
          <a href="mailto:chantzmorris78@gmail.com" target="_blank"><AiOutlineMail className="contactIcon"style={{height: "2rem", width: "2rem", marginLeft:".3rem", marginRight:".3rem"}}/></a>
        </div>
      </div>

    </div>
    <div className="footer-bottom">
        <div className="copyright-Container">
            <p>© Copyright 2020</p>
            <p>Chantz Morris, THE MODGLIN GROUP, DRE ?</p>
        </div>
    </div>
  </div>
  )
}

export default Footer;