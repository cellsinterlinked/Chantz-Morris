import React, { useState, useEffect, useContext } from 'react';
import './CoolMessage.css';
import { IoIosMail } from 'react-icons/io';
import Modal from '../Reusable/Modals/Modal';
import ErrorModal from '../Reusable/Modals/ErrorModal';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import { AuthContext } from '../Context/auth-context';
import MessageModal from '../Reusable/Modals/MessageModal';

const CoolMessage = (props) => {
  const [showModal, setShowModal] = useState(false);
  const fullName = `${props.firstName} ${props.lastName}`;
  const coolTime = props.date.slice(11)
  const coolDate = props.date.slice(0, 11)
  // const auth = useContext(AuthContext);
  // const [showConfirmModal, setShowConfirmModal] = useState(false);
  // const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const display = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }

  const confirmDeleteHandler = async () => {
    try {
      await sendRequest(
        `${process.env.REACT_APP_DELETE_MESSAGES_URL}${props.messageId}`,
        'DELETE',
        null,
        {
          Authorization: `Brearer ${  auth.token}`,
        }
      );
      props.delete(props.messageId)
    } catch (err) {}
  };
  
    return (
      <>
      <MessageModal
        close={closeModal}
        show={showModal}
        onCancel={closeModal}
        header={fullName}
        >
        <p>{props.message}</p>
      </MessageModal>
      <div className="coolMessageSurround" />
      <div className='coolMessageDiv1'>
        <button className="iHateYou" type="button" onClick={display}/>
      <div className="coolMessageIcon"><IoIosMail className="coolEnvelope"/></div>
    <p className="messageName">{fullName}</p>
    <p className="coolEmail">{props.email}</p>
    <p className="coolDate">{coolDate}</p>
    <p className="coolTime">{coolTime}</p>
      
      </div>
      </>
    )
}

export default CoolMessage; 