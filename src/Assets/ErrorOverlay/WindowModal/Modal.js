import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div className={`${classes.modal} ${props.inValid && classes.hidden}`}>
      <h1>Invalid input</h1>
      <p>Please enter a valid Number(non-enpty values).</p>
      <button className={classes["close-modal"]} onClick={props.onClick}>
        OKay
      </button>
    </div>
  );
};
export default Modal;
