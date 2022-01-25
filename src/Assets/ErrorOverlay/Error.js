import { Fragment, useState } from "react";
import classes from "./Error.module.css";
import ReactDOM from "react-dom";
const Error = (props) => {
  const [isValid, subValid] = useState(true);
  const subHandler = (event) => {
    subValid(true);
    props.valid(isValid);
  };
  const Overlay = (props) => {
    return (
      <div
        className={`${classes.overlay} ${props.inValid && classes.hidden}`}
        onClick={subHandler}
      ></div>
    );
  };
  const Modal = (props) => {
    return (
      <div className={`${classes.modal} ${props.inValid && classes.hidden}`}>
        <h1>Invalid input</h1>
        <p>Please enter a valid name and age(non-enpty values).</p>
        <button className={classes["close-modal"]} onClick={subHandler}>
          OKay
        </button>
      </div>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={subHandler} inValid={props.inValid} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Modal onClick={subHandler} inValid={props.inValid} />,
        document.getElementById("Modal-root")
      )}
    </Fragment>
  );
};

export default Error;
