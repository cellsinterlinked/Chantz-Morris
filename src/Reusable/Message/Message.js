import React, { useState, useEffect, useContext } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import './Message.css';
import { useHistory } from 'react-router-dom';
import Modal from '../Modals/Modal';
import ErrorModal from '../Modals/ErrorModal';
import { useHttpClient } from "../Hooks/http-hook";
import { AuthContext } from '../../Context/auth-context';

const Message = (props) => {
  const auth = useContext(AuthContext);
  const [expanded, setExpanded] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [isRead, setIsRead] = useState(false);
  const history = useHistory();

  const messageExpand = () => {
    expanded ? setExpanded(false) : setExpanded(true);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const handleCheckboxChange = (event) => {
    setIsRead(!isRead);
  };

  

  useEffect(() => {
    if (isRead) {
      props.markReadHandler(props.messageId);
      console.log('is working');
    } else if (!isRead) {
      props.markUnreadHandler(props.messageId);
      console.log('is working again');
    }
  }, [isRead]);

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `${process.env.REACT_APP_DELETE_MESSAGES_URL}${props.messageId}`,
        'DELETE',
        null,
        {
          Authorization: `Brearer ${  auth.token}`,
        }
      );
      props.onDelete(props.messageId)
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler && clearError}
        header="ARE YOU SURE?"
        children={<p>Do You Want To Delete This Message?</p>}
        footerClass="deleteFooter"
        footer={
          <>
            <button onClick={cancelDeleteHandler}>Cancel</button>
            <button onClick={confirmDeleteHandler}>Delete</button>
          </>
        }
       />
      <div
        className={
          props.message.read || isRead === true
            ? 'message__Container__read'
            : 'message__Container__unread'
        }
      >
        <div className="messageDetails">
          <div className="messageClickCover" onClick={messageExpand} />
          <p id="messageDate">{props.date}</p>
          <p id="messageName">{`${props.firstName} ${props.lastName}`}</p>
          {props.read === false && (
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isRead}
             />
          )}
          <BsTrashFill
            id="messageTrashIcon"
            onClick={showDeleteWarningHandler}
          />
        </div>
        <div
          onClick={messageExpand}
          className={
            expanded ? 'messageContent__Large' : 'messageContent__Small'
          }
        >
          <div className="messageComment">
            <p>{props.message}</p>
          </div>
          <p id="messagePhone">{props.phone}</p>
          <p id="messageEmail">{props.email}</p>
          <div />
        </div>
      </div>
    </>
  );
};

export default Message;

