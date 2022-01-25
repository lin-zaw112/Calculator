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
        setsum(eval(sum.join("").replace(/x/g, "*")) && setValid(false));
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
  );
};
export default App;
