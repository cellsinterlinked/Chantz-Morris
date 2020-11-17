import React, { useState, useEffect, useContext } from 'react';
import './Inbox.css';
import { IoIosMail } from 'react-icons/io';
import { AuthContext } from '../Context/auth-context';
import Message from '../Reusable/Message/Message';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import LoadingSpinner from '../Reusable/Loading/LoadingSpinner';
import ErrorModal from '../Reusable/Modals/ErrorModal';
import Modal from '../Reusable/Modals/Modal';
import Auth from './Auth';

const Inbox = (props) => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [messages, setMessages] = useState();
  const [readMessages, setReadMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_GET_MESSAGES_URL}`,
          // 'http://localhost:5000/api/messages',
          'GET',
          null,
          {
            Authorization: `Bearer ${  auth.token}`,
          }
        );

        setMessages(responseData.allMessages.reverse());
        
      } catch (err) {}
    };

    fetchMessages();
  }, [sendRequest]);

  const messageDeleteHandler = (deletedMessageId) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message._id !== deletedMessageId)
    );
  };

  useEffect(() => {
    console.log(readMessages);
  }, [readMessages]);

  // test patch start

  const patchReadHandler = (event) => {
    event.preventDefault();
    console.log(messages.reverse());
    // event.preventDefault();
    // const idArray = readMessages;
    // try {
    //   sendRequest(
    //     'http://localhost:5000/api/messages',
    //     'PATCH',
    //     JSON.stringify({
    //       idArray,
    //     }),
    //     {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${  auth.token}`,
    //     }
    //   );
    //   console.log('patch sent');
    // } catch (err) {}
  };

  // test patch end

  const markReadHandler = (messageId) => {
    const messages = [messageId, ...readMessages];
    setReadMessages(messages);
  };

  const markUnreadHandler = (messageId) => {
    setReadMessages(readMessages.filter((message) => message !== messageId));
  };

  return (
    <>
    {isLoading && <LoadingSpinner />}
      {!isLoading && <div className="inboxPageContainer">
        <NavBar />
        <div className="inbox__Container">
          <div className="inboxIcon__Container">
            <IoIosMail id="inboxMail__Icon" />
            <h1>Inbox</h1>
          </div>

          <div className="inboxTitle__Container">
            <p id="titleDate">Date:</p>
            <p id="titleName">Name:</p>
            {/* <form onSubmit={patchReadHandler} className="solo_button">
              <button id="titleRead" type="submit">
                MARK READ
              </button>
            </form> */}
            <p id="titleRead">Read</p>
            <p id="titleDelete">Delete</p>
          </div>
          {!isLoading && messages && (
            <div className="messages__Container">
              {messages.reverse().map((message) => (
                <Message
                  key={message._id}
                  messageId={message._id}
                  date={message.date}
                  firstName={message.fName}
                  lastName={message.lName}
                  email={message.email}
                  phone={message.phone}
                  message={message.content}
                  read={false}
                  onDelete={messageDeleteHandler}
                  markReadHandler={markReadHandler}
                  markUnreadHandler={markUnreadHandler}
                />
              ))}
            </div>
          )}
        </div>
      </div>}
      <Footer />
    </>
  );
};

export default Inbox;
