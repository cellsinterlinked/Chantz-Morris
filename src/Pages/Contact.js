import React, { useState } from 'react';
import { Parallax, Background } from 'react-parallax';
import { NavLink } from 'react-router-dom';
import './Contact.css';
import './AllPage.css';
import './Landing.css';
import { FiPhone } from 'react-icons/fi';
import {CgFileDocument} from 'react-icons/cg';
import { AiOutlineInstagram , AiFillFacebook , AiOutlineMail , AiFillLinkedin } from 'react-icons/ai';
import Contactimg from '../Resources/relationshipblog.jpg';
import NavBar from '../Nav/NavBar';
import Profile from '../Resources/Chantz_blue shirt (1).jpg';
import Footer from '../Nav/Footer';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import ErrorModal from '../Reusable/Modals/ErrorModal';
import Modal from '../Reusable/Modals/Modal';
import LoadingSpinner from '../Reusable/Loading/LoadingSpinner';

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const backgroundStyle = {
  boxShadow: "inset 0 0 2000px rgba(255, 255, 255, 0.5)",
  filter: "blur(0px)",
 
  
  display: "block"
}

const Contact = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');
  const [message, setMessage] = useState('');
  const [fullPhone, setFullPhone] = useState('');
  const [showModal, setShowModal] = useState(false);

  const wait = (ms) => {
    const d = new Date();
    let d2 = null;
    do { d2 = new Date(); }
    while(d2 - d < ms);
}


  const fNameController = (event) => {
    setFName(event.target.value);
  };

  const lNameController = (event) => {
    setLName(event.target.value);
  };

  const emailController = (event) => {
    setEmail(event.target.value);
  };

  const oneController = (event) => {
    setPhone1(event.target.value);
  };

  const twoController = (event) => {
    setPhone2(event.target.value);
  };

  const threeController = (event) => {
    setPhone3(event.target.value);
  };

  const commentController = (event) => {
    setMessage(event.target.value);
  };

  const submitHandler = async event => {
    
    event.preventDefault();
    const today = new Date();
    const date =
      `${today.getFullYear() 
      }-${ 
      today.getMonth() + 1 
      }-${ 
      today.getDate()}`;
    const time = `${today.getHours()  }:${  today.getMinutes()}`;
    const total = `${date  } ${  time}`;
    console.log(total);
    const phone = `${phone1}-${phone2}-${phone3}`;
    
    try {
 
      await sendRequest(
        `${process.env.REACT_APP_GET_MESSAGES_URL}`,
        'POST',
        JSON.stringify({
          fName,
          lName,
          email,
          phone,
          content: message,
          date: total,
        }),
        { 'Content-Type': 'application/json' }
      );
      console.log('success! I think...');
      wait(1000);
      // redirect user to a different page, cause pop up/rerender
    } catch (err) { setShowModal(false)}  
    // this was changed above if problems ensue 
    setShowModal(true);
  };

  const confirmModal = () => {
    setShowModal(false)
  }

  

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showModal}
        onCancel={confirmModal}
        header="MESSAGE SENT!"
        footerClass="deleteFooter"
        footer={
          <>
          <button onClick={confirmModal}>
          <NavLink to="/" exact style={{ textDecoration: 'none' }}>
          <p>Got It!</p>
          </NavLink>
          </button> 
          </>
        }
        >
          <p>Please Allow Chantz 1 - 2 Business Days to Reply!</p>
          </Modal>
      <div className="contactContainer">
        <Parallax className="testBanner"  strength={500}>
        <Background className="topBackground">
        <div className="testParent">
          <img src={Contactimg} alt="client" className="childImage" />
        </div>
        </Background>
          <div className="image-cover">
            <div style={{ height: 600 }}>
              <NavBar />
              <div style={introStyle} className="pageHead">
                <h1>Let's Work Together</h1>
              </div>
            </div>
          </div>
        </Parallax>
        <div className="contactPicAndInfo">
          <div className="imgContainer__Contact">
            <img src={Profile} alt="me" className="profileImg__Contact" />
          </div>
          <div className="realtorInfo__Contact">
            <h1 className="realtorName__Contact">CHANTZ MORRIS | REALTOR&trade;</h1>
            <div className="contactPersonal">
              <div className="iconInfo__Contact">
                <FiPhone style={{ marginRight: '.5rem' }} />
                <p>812.592.7785</p>
              </div>
              <div className="iconInfo__Contact">
                <AiOutlineMail style={{ marginRight: '.5rem' }} />
                <p>chantz@themodglingroup.com</p>
              </div>
              <div className="iconInfo__Contact">
                <CgFileDocument style={{ marginRight: '.5rem'}} />
                <p>License #:RB20001606</p>
                </div>
            </div>
            <div className="contactSquareContainer">
            
            <a className="iconSquare" href="mailto:chantz@themodglingroup.com" target="_blank">
              <AiOutlineMail className="bigIcon" />
            </a>
            <a className="iconSquare" href="https://www.linkedin.com/in/chantz-morris-8bb3471bb/" target="_blank">
              <AiFillLinkedin className="bigIcon" />
            </a>
            {/* <a className="iconSquare" href="https://www.facebook.com/chantz.morris.79" target="_blank">
              <AiFillFacebook className="bigIcon" />
            </a> */}
            </div>




            {/* <h1 className="visit__Contact"> VISIT ME:</h1>

            <div className="brokerInfo__Contact">
              <p>AMBIT</p>
              <p>555 Hillside Dr.</p>
              <p>Duluth, GA 30096</p>
            </div> */}
          </div>
        </div>
        <form className="contactForm" onSubmit={submitHandler}>
          <div className="contactIntro">
          <p>
            If you're not sure how to take the first step in a new home search, not
            sure which tactics to use to sell your house, or just have a random
            question about real estate, call, email, text me anytime. I’m here
            for you 24/7!
          </p>
          </div>

          <div className="contactName__Container">
            <p style={{ letterSpacing: '1px' }}>Name *</p>
            <div className="contactName__smallBox">
              <div className="fname__Form">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  onChange={fNameController}
                  value={message.firstName}
                 />
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="lname__Form">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  onChange={lNameController}
                  value={message.lastName}
                 />
                <label htmlFor="lname">Last Name</label>
              </div>
            </div>
            <div className="emailContainer">
              <div>
                <p>Email *</p>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={emailController}
                  value={message.email}
                 />
              </div>
            </div>
          </div>
          <div className="contactFormPhone__Container">
            <div className="iHateYou">
              <p>Phone * </p>
            </div>
            <div className="phone-boxes__Container">
              <div className="phoneFormBox">
                <input
                  type="number"
                  id="fnumber"
                  name="fnumber"
                  onChange={oneController}
                  value={message.phone1}
                 />
                <label htmlFor="fnumber">###</label>
              </div>
              <div className="phoneFormBox">
                <input
                  type="number"
                  id="snumber"
                  name="snumber"
                  onChange={twoController}
                  value={message.phone2}
                 />
                <label htmlFor="snumber">###</label>
              </div>
              <div className="phoneFormBox">
                <input
                  type="number"
                  id="tnumber"
                  name="tnumber"
                  onChange={threeController}
                  value={message.phone3}
                 />
                <label htmlFor="tnumber">####</label>
              </div>
            </div>
          </div>
          <div className="personalMessage__Container">
            <p>What can I do for you? *</p>
            <textarea
              id="message"
              name="message"
              onChange={commentController}
              value={message.comment}
             />
          </div>
          <div className="contactButton__Container">
            <button className="submitButton" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
