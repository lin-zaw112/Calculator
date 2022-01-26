import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Overlay from "./Overlay/Overlay";
import Modal from "./WindowModal/Modal";
const Error = (props) => {
  const [isValid, subValid] = useState(true);
  const subHandler = (event) => {
    subValid(true);
    props.valid(isValid);
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={subHandler} inValid={props.inValid} />,
        document.querySelector("body")
      )}
      {ReactDOM.createPortal(
        <Modal onClick={subHandler} inValid={props.inValid} />,
        document.querySelector("body")
      )}
    </Fragment>
  );
};

export default Error;
