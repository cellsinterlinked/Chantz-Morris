import React, { useState } from 'react';
import { Parallax, Background } from 'react-parallax';
import { NavLink } from 'react-router-dom';
import './Contact.css';
import './AllPage.css';
import './Landing.css';
import { FiPhone } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineMail,
  AiFillLinkedin,
} from 'react-icons/ai';
import Contactimg from '../Resources/relationshipblog.jpeg';
import NavBar from '../Nav/NavBar';
import Profile from '../Resources/AshleeChantz.jpeg';
import Footer from '../Nav/Footer';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import ErrorModal from '../Reusable/Modals/ErrorModal';
import Modal from '../Reusable/Modals/Modal';
import LoadingSpinner from '../Reusable/Loading/LoadingSpinner';
import emailjs from 'emailjs-com';

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
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone1: '',
    phone2: '',
    phone3: '',
    message: '',
    fullPhone: '',
  });

  const [incomplete, setIncomplete] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const firstNameController = (event) => {
    setData({ ...data, firstName: event.target.value });
  };

  const lastNameController = (event) => {
    setData({ ...data, lastName: event.target.value });
  };

  const emailController = (event) => {
    setData({ ...data, email: event.target.value });
  };

  const phone1Controller = (event) => {
    setData({ ...data, phone1: event.target.value });
  };

  const phone2Controller = (event) => {
    setData({ ...data, phone2: event.target.value });
  };

  const phone3Controller = (event) => {
    setData({ ...data, phone3: event.target.value });
  };

  const messageController = (event) => {
    setData({ ...data, message: event.target.value });
  };

  const submitHandler = (e) => {
    event.preventDefault();

    if (data.message && data.email && data.firstName && data.lastName) {
      emailjs
        .sendForm(
          'service_4rkj86x',
          'template_ldinmwh',
          e.target,
          'user_hbc7uXk6VzJ9iJYYOUNTt'
        )
        .then((res) => {
          console.log(res);
          setShowModal(true);
          setData({
            firstName: '',
            lastName: '',
            email: '',
            phone1: '',
            phone2: '',
            phone3: '',
            message: '',
            fullPhone: '',
          });
          document.getElementById('myForm').reset();
        })
        .catch((err) => {
          alert('failed', err);
        });
    } else {
      alert('please fill out all fields');
      setIncomplete(true);
      console.log(incomplete);
    }
  };

  const confirmModal = () => {
    setShowModal(false);
  };

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
        <Parallax className="testBanner" strength={500}>
          <Background className="custom-bg">
            <div className="fuckImage_container">
              <img
                src={Contactimg}
                alt="fill murray"
                className="fuckImage"
                style={{ filter: 'blur(10px)' }}
              />
              <div className="image-cover"></div>
            </div>
          </Background>

          <div className="height-controller">
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>Let's Work Together</h1>
            </div>
          </div>
        </Parallax>

        <div className="contactPicAndInfo">
          <div className="imgContainer__Contact">
            <img
              src={Profile}
              alt="Ashlee and Chantz"
              className="profileImg__Contact"
            />
          </div>
          <div className="realtorInfo__Contact">
            <h1 className="realtorName__Contact">
              CHANTZ MORRIS | REALTOR&trade;
            </h1>
            <div className="contactPersonal">
              <div className="iconInfo__Contact">
                <FiPhone style={{ marginRight: '.5rem' }} />
                <p>812.525.0325</p>
              </div>
              <div className="iconInfo__Contact">
                <AiOutlineMail style={{ marginRight: '.5rem' }} />
                <p>Chantz.morris@acmpropertymgnmt.com</p>
              </div>
              <div className="iconInfo__Contact">
                <CgFileDocument style={{ marginRight: '.5rem' }} />
                <p>License #:RB20001606</p>
              </div>
            </div>
            <div className="contactSquareContainer">
              <a
                className="iconSquare"
                href="mailto:Chantz.Morris@talktotucker.com"
                target="_blank"
              >
                <AiOutlineMail className="bigIcon" />
              </a>
              <a
                className="iconSquare"
                href="https://www.linkedin.com/in/chantz-morris-8bb3471bb/"
                target="_blank"
              >
                <AiFillLinkedin className="bigIcon" />
              </a>
              <a
                className="iconSquare"
                href="https://www.facebook.com/Chantzmorris.77"
                target="_blank"
              >
                <AiFillFacebook className="bigIcon" />
              </a>
            </div>

            <h1 className="realtorName__Contact">
              ASHLEE MORRIS | REALTOR&trade;
            </h1>
            <div className="contactPersonal">
              <div className="iconInfo__Contact">
                <FiPhone style={{ marginRight: '.5rem' }} />
                <p>812.525.0028</p>
              </div>
              <div className="iconInfo__Contact">
                <AiOutlineMail style={{ marginRight: '.5rem' }} />
                <p>Ashlee.morris@acmpropertymgnmt.com</p>
              </div>
              <div className="iconInfo__Contact">
                <CgFileDocument style={{ marginRight: '.5rem' }} />
                <p>License #:RB21002818</p>
              </div>
            </div>
            <div className="contactSquareContainer">
              <a
                className="iconSquare"
                href="mailto:Ashlee.Morris@talktotucker.com"
                target="_blank"
              >
                <AiOutlineMail className="bigIcon" />
              </a>
              {/* <a className="iconSquare" href="https://www.linkedin.com/in/chantz-morris-8bb3471bb/" target="_blank">
              <AiFillLinkedin className="bigIcon" />
            </a> */}
              <a
                className="iconSquare"
                href="https://www.facebook.com/AshleeMorris4"
                target="_blank"
              >
                <AiFillFacebook className="bigIcon" />
              </a>
            </div>
          </div>
        </div>
        <form className="contactForm" id="myForm" onSubmit={submitHandler}>
          <div className="contactIntro">
            <p>
              If you're not sure how to take the first step in a new home
              search, not sure which tactics to use to sell your house, or just
              have a random question about real estate, call, email, text either
              one, or both of us, anytime. We’re here for you 24/7!
            </p>
          </div>

          <div className="contactName__Container">
            <p style={{ letterSpacing: '1px' }}>Name *</p>
            <div className="contactName__smallBox">
              <div className="fname__Form">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={firstNameController}
                  value={data.firstName}
                  style={{
                    border:
                      incomplete && data.firstName === ''
                        ? '1px solid red'
                        : '1px solid rgb(216, 216, 216)',
                    fontSize: '16px',
                  }}
                />
                <label
                  htmlFor="firstName"
                  style={{
                    color:
                      incomplete && data.firstName === '' ? 'red' : 'black',
                  }}
                >
                  First Name
                </label>
              </div>
              <div className="lname__Form">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={lastNameController}
                  value={data.lastName}
                  style={{
                    border:
                      incomplete && data.lastName === ''
                        ? '1px solid red'
                        : '1px solid rgb(216, 216, 216)',
                    fontSize: '16px',
                  }}
                />
                <label
                  htmlFor="lastName"
                  style={{
                    color: incomplete && data.lastName === '' ? 'red' : 'black',
                  }}
                >
                  Last Name
                </label>
              </div>
            </div>
            <div className="emailContainer">
              <div>
                <p
                  style={{
                    color: incomplete && data.email === '' ? 'red' : 'black',
                  }}
                >
                  Email *
                </p>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={emailController}
                  value={data.email}
                  style={{
                    border:
                      incomplete && data.email === ''
                        ? '1px solid red'
                        : '1px solid rgb(216, 216, 216)',
                    fontSize: '16px',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="contactFormPhone__Container">
            <div>
              <p>Phone *</p>
            </div>
            <div className="phone-boxes__Container">
              <div className="phoneFormBox">
                <input
                  type="number"
                  id="phone1"
                  name="phone1"
                  onChange={phone1Controller}
                  value={data.phone1}
                  style={{
                    border:
                      incomplete && data.phone1 === ''
                        ? '1px solid red'
                        : '1px solid rgb(216, 216, 216)',
                    fontSize: '16px',
                  }}
                />
                <label
                  htmlFor="phone1"
                  style={{
                    color: incomplete && data.phone1 === '' ? 'red' : 'black',
                  }}
                >
                  ###
                </label>
              </div>
              <div className="phoneFormBox">
                <input
                  type="number"
                  id="phone2"
                  name="phone2"
                  onChange={phone2Controller}
                  value={data.phone2}
                  style={{
                    border:
                      incomplete && data.phone2 === ''
                        ? '1px solid red'
                        : '1px solid rgb(216, 216, 216)',
                    fontSize: '16px',
                  }}
                />
                <label
                  htmlFor="phone2"
                  style={{
                    color: incomplete && data.phone2 === '' ? 'red' : 'black',
                  }}
                >
                  ###
                </label>
              </div>
              <div className="phoneFormBox">
                <input
                  type="number"
                  id="phone3"
                  name="phone3"
                  onChange={phone3Controller}
                  value={data.phone3}
                  style={{
                    border:
                      incomplete && data.phone3 === ''
                        ? '1px solid red'
                        : '1px solid rgb(216, 216, 216)',
                    fontSize: '16px',
                  }}
                />
                <label
                  htmlFor="phone3"
                  style={{
                    color: incomplete && data.phone3 === '' ? 'red' : 'black',
                  }}
                >
                  ####
                </label>
              </div>
            </div>
          </div>
          <div className="personalMessage__Container">
            <p>What can I do for you? *</p>
            <textarea
              id="message"
              name="message"
              onChange={messageController}
              value={data.message}
              style={{
                border:
                  incomplete && data.message === ''
                    ? '1px solid red'
                    : '1px solid rgb(216, 216, 216)',
                fontSize: '16px',
              }}
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
