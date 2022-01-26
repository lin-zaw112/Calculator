import classes from "./App.module.css";
import React, { useState } from "react";
import Sun from "./Assets/Sun";
import Moon from "./Assets/Moon";
import Error from "./Assets/ErrorOverlay/Error";
const App = () => {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operator = [".", "=", "+", "-", "x", "/", "C", "(", ")", "AC"];
  const [sum, setsum] = useState([]);
  const [theme, setTheme] = useState(true);
  const [Valid, setValid] = useState(true);
  const Strs = [...number, ...operator, theme ? Sun : Moon];
  const clickHandler = (event) => {
    event.preventDefault();
    const input = event.target.outerText;
    if (event.target.id === "svg") {
      setTheme(theme ? false : true);
    }
    switch (input) {
      case "AC":
        setsum([]);
        break;
      case "C":
        {
          let arr = [...sum];
          arr.pop();
          setsum([...arr]);
        }
        break;
      case "=":
        {
          if (isNaN(eval(sum.join("").replace(/x/g, "*")))) {
            setValid(false);
            return;
          } else {
            setsum(String(eval(sum.join("").replace(/x/g, "*"))));
          }
        }
        break;
      default:
        setsum([...sum, input]);
        break;
    }
    // const isValidHandler = (event) => {
    //   setValid(event);
    // };
  };
  return (
    <React.Fragment>
      <div className={classes[`ripple-background`]}>
        <div
          className={`${classes.circle} ${classes.xxlarge} ${classes.shade1}`}
        ></div>
        <div
          className={`${classes.circle} ${classes.xlarge} ${classes.shade2}`}
        ></div>
        <div
          className={`${classes.circle} ${classes.large} ${classes.shade3}`}
        ></div>
        <div
          className={`${classes.circle} ${classes.mediun} ${classes.shade4}`}
        ></div>
        <div
          className={`${classes.circle} ${classes.small} ${classes.shade5}`}
        ></div>
      </div>

      <div className={classes.calc}>
        <h1 className={classes.countedNum}>{sum}</h1>
        <div className={classes["col-1"]}>
          {Strs.map((str) => {
            return (
              <button
                type="button"
                className={classes.card}
                onClick={clickHandler}
                key={str}
              >
                {str !== Sun && str !== Moon ? str : <div id="svg">{str}</div>}
              </button>
            );
          })}
        </div>
        <Error valid={setValid} inValid={Valid}></Error>
      </div>
    </React.Fragment>
  );
};
export default App;
