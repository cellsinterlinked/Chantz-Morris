import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from '../../Nav/Backdrop';
import './Modal.css';
import { CSSTransition } from 'react-transition-group';

const ModalOverlay = (props) => {
  const content = (
    <div className="modal">
      \
      <header className="modalHeader">
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className="modalContent">{props.children}</div>
        <footer className="modalFooter">{props.footer}</footer>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  return (
    <>
      {props.show && <Backdrop onCLick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
