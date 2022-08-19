import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import { CSSTransition } from 'react-transition-group';
import './VideoModal.css';
import {AiOutlineClose} from 'react-icons/ai';

const ModalOverlay = props => {
  
  const content = (
    <div className={`modal ${props.modalStyle && "alternate-modal"}`} >
    <div className="escape" onClick={props.onCancel}>
        <AiOutlineClose className="close" />
    </div>
    <video 
    className="video"
    controls="controls"
    preload="none"
    autoPlay
    onClick="this.play()"
    >
    <source type="video/webm" src={props.video} />
        
    </video>                                      
    </div>
    );                                                                   
    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));  
  };
  
  const Modal = props => {
    return (
      <React.Fragment>
        {props.show && <Backdrop onClick={props.onCancel} />}
        <CSSTransition 
          in={props.show} 
          mountOnEnter 
          unmountOnExit 
          timeout={200} 
          classNames={"modal alternate-modal"} 
          >
            <ModalOverlay {...props} />
          </CSSTransition>
      </React.Fragment>
    )
  }
  
  export default Modal;
    

