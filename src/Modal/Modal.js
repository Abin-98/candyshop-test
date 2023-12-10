import React from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css'
const Backdrop = (props) => {

  return <div onClick={props.onClick} className={classes.backdrop}>
  </div>
};
const Modal = (props) => {

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
      <div className={classes.modal}>
        {props.children}
      </div>
      , document.getElementById("overlay"))}
    </>
  );
};

export default Modal;
