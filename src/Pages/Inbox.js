import React, { useState, useEffect } from "react";
import "./Inbox.css";
import Message from "../Reusable/Message/Message";
import NavBar from "../Nav/NavBar";
import Footer from "../Nav/Footer";
import { IoIosMail } from "react-icons/io";
import { useHttpClient } from "../Reusable/Hooks/http-hook";
import ErrorModal from "../Reusable/Modals/ErrorModal";
import Modal from "../Reusable/Modals/Modal";

const Inbox = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [messages, setMessages] = useState();
  const [readMessages, setReadMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:5000/api/messages"
        ); //doesnt need method or headers because it is default get

        setMessages(responseData.allMessages);
      } catch (err) {}
    };

    fetchMessages();
  }, [sendRequest]);

  const messageDeleteHandler = deletedMessageId => {
    setMessages(prevMessages =>
      prevMessages.filter(message => message._id !== deletedMessageId)
    );
  };

  const patchReadHandler = () => {
    // this will send list of id's to patch.
  };

  const markReadHandler = messageId => {
    console.log("mark read handler: ", readMessages);
    const messages = [messageId, ...readMessages]
    setReadMessages(messages);
  };

  const markUnreadHandler = messageId => {
    console.log("mark Unread handler: ", readMessages);
    setReadMessages(readMessages.filter(message => message !== messageId));
  };

  return (
    <React.Fragment>
      <div className="inboxPageContainer">
        <NavBar />
        <div className="inbox__Container">
          <div className="inboxIcon__Container">
            <IoIosMail id="inboxMail__Icon" />
            <h1>Inbox</h1>
          </div>

          <div className="inboxTitle__Container">
            <p id="titleDate">Date:</p>
            <p id="titleName">Name:</p>
            <button id="titleRead">MARK READ</button>
            <p id="titleDelete">Delete</p>
          </div>
          {!isLoading && messages && (
            <div className="messages__Container">
              {messages.map(message => (
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
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Inbox;
