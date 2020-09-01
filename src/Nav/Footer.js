import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import {SiRealm} from 'react-icons/si';
import './Footer.css';

const Footer = props => {
  return(
    <div className="fullFooter">
    <div className="footer-top">
      <div className="footer-columnOne">
        <p className="footer-name">CHANTZ MORRIS</p>
        <div className="footer-brokerAddress">
        <p>AMBIT</p>
        <p>555 Hillside Dr.</p> 
        <p>Duluth, GA 30096</p>
        </div>
        <div className="footer-Phone-Email">
        <p>+1 317 999 3878</p>
        <p>cmorris@ambit.com</p>
        </div>
      </div>
      <div className="footer-columnTwo">
        <div className="footer-workWithChantz">
          <p>WORK WITH CHANTZ</p>
          <BsArrowRight />
        </div>
        <p style={{width: "15.5rem"}}>Schedule Free Consultation</p>
        <p style={{width: "8.3rem"}}>Search Homes</p>
        <p style={{width: "7.5rem"}}>Recent Sales</p>
      </div>
      <div className="footer-columnThree">
        <div className="broker-bit">
          <div className="footerBroker-icon">
            <SiRealm  style={{color: 'white', height: "3rem", width: "3rem"}}/>
          </div>
          <div className="footer-midLine"></div>
          <div className="footer-brokerName">
            <p>AMBIT</p>
          </div>
        </div>
          <div className="footer-bottomLine"></div>
        <p className="footer-contact-title">STAY IN TOUCH</p>
        <div className="footerIconContainer">
          <AiOutlineInstagram style={{height: "2rem", width: "2rem", marginLeft:".3rem", marginRight:".3rem", color: "white"}} />
          <AiFillFacebook style={{height: "2rem", width: "2rem", marginLeft:".3rem", marginRight:".3rem", color: "white"}} />
          <AiFillLinkedin style={{height: "2rem", width: "2rem", marginLeft:".3rem", marginRight:".3rem", color: "white"}}/>
          <AiOutlineMail style={{height: "2rem", width: "2rem", marginLeft:".3rem", marginRight:".3rem", color: "white"}}/>
        </div>
      </div>

    </div>
    <div className="footer-bottom">
        <div className="copyright-Container">
            <p>© Copyright 2020</p>
            <p>Chantz Morris, AMBIT, DRE 01894675</p>
        </div>
    </div>
  </div>
  )
}

export default Footer;