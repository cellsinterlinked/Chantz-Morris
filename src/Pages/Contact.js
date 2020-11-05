import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import './Contact.css';
import './AllPage.css';
import './Landing.css';
import Contactimg from '../Resources/professional.jpg';
import NavBar from '../Nav/NavBar';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import Profile from '../Resources/Chantz Cut out.png';
import Footer from '../Nav/Footer';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import ErrorModal from '../Reusable/Modals/ErrorModal';

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

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

  const submitHandler = (event) => {
    event.preventDefault();
    let today = new Date();
    let date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    let time = today.getHours() + ':' + today.getMinutes();
    let total = date + ' ' + time;
    console.log(total);
    const phone = `${phone1}-${phone2}-${phone3}`;
    try {
      sendRequest(
        'http://localhost:5000/api/messages',
        'POST',
        JSON.stringify({
          fName: fName,
          lName: lName,
          email: email,
          phone: phone,
          content: message,
          date: total,
        }),
        { 'Content-Type': 'application/json' }
      );
      console.log('success! I think...');
      //redirect user to a different page, cause pop up/rerender
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="contactContainer">
        <Parallax bgImage={Contactimg} strength={500}>
          <div className="image-cover">
            <div style={{ height: 600 }}>
              <NavBar />
              <div style={introStyle} className="pageHead">
                <h1>Lets Work Together</h1>
              </div>
            </div>
          </div>
        </Parallax>
        <div className="contactPicAndInfo">
          <div className="imgContainer__Contact">
            <img src={Profile} alt="me" className="profileImg__Contact" />
          </div>
          <div className="realtorInfo__Contact">
            <h1 className="realtorName__Contact">CHANTZ MORRIS | REALTOR</h1>
            <div className="contactPersonal">
              <div className="iconInfo__Contact">
                <FiPhone style={{ marginRight: '.5rem' }} />
                <p>812.592.7785</p>
              </div>
              <div className="iconInfo__Contact">
                <AiOutlineMail style={{ marginRight: '.5rem' }} />
                <p>cmorris@ambit.com</p>
              </div>
              <p className="contact-basic-text">DRE 01894675</p>
            </div>

            <h1 className="visit__Contact"> VISIT ME:</h1>

            <div className="brokerInfo__Contact">
              <p>AMBIT</p>
              <p>555 Hillside Dr.</p>
              <p>Duluth, GA 30096</p>
            </div>
          </div>
        </div>
        <form className="contactForm" onSubmit={submitHandler}>
          <p>
            If you not sure how to take the first step in a new home search, not
            sure which tactics to use to sell your house, or just have a random
            question about real estate, call, email, text me anytime. I’m here
            for you 24/7!
          </p>
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
                ></input>
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="lname__Form">
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  onChange={lNameController}
                  value={message.lastName}
                ></input>
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
                ></input>
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
                ></input>
                <label htmlFor="fnumber">###</label>
              </div>
              <div className="phoneFormBox">
                <input
                  type="number"
                  id="snumber"
                  name="snumber"
                  onChange={twoController}
                  value={message.phone2}
                ></input>
                <label htmlFor="snumber">###</label>
              </div>
              <div className="phoneFormBox">
                <input
                  type="number"
                  id="tnumber"
                  name="tnumber"
                  onChange={threeController}
                  value={message.phone3}
                ></input>
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
            ></textarea>
          </div>
          <div className="contactButton__Container">
            <button className="submitButton" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
