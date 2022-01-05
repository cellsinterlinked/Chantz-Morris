import React from 'react'
import ReactDOM from 'react-dom';
import Backdrop from '../../Nav/Backdrop';
import "./MessageModal.css";
import { CSSTransition } from 'react-transition-group';
import { MdPersonPin } from 'react-icons/md';

const MessageModalOverlay = (props) => {
  const content = (
    <div className="messageModal">
      <div className="coolMessageStructure">
        <header className="messageModalHeader">
          <MdPersonPin className="coolSilhouette"/>
          <h2>Message From: {props.header}</h2>
        </header>
        <div className="coolDivide" />
      <div className="messageModalContent">{props.children}</div>
        </div>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
        >
        <footer className="messageModalFooter">
          <div className="coolModalDelete">
            <button type="button">Delete</button>
          </div>
          <div className="coolModalClose">
            <button onClick={props.close}type="button">Close</button>
          </div>

        </footer>
      </form>

    </div>
  )
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'))
};

const MessageModal = (props) => {
  return (
    <>
     {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <MessageModalOverlay {...props} />
      </CSSTransition>
    </>
  )
}

export default MessageModal;