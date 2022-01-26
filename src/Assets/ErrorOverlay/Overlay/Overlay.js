import classes from "./Overlay.module.css";
const Overlay = (props) => {
  return (
    <div
      className={`${classes.overlay} ${props.inValid && classes.hidden}`}
      onClick={props.onClick}
    ></div>
  );
};
export default Overlay;
