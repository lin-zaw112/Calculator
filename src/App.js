import "./App.css";
import React, { useState } from "react";
import Sun from "./Assets/Sun";
import Moon from "./Assets/Moon";

const App = () => {
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operator = [".", "=", "+", "-", "x", "/", "C", "(", ")", "AC"];
  const [sum, setsum] = useState([]);
  const [theme, setTheme] = useState(true);
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
        setsum(eval(sum.join("").replace(/x/g, "*")));
        break;
      default:
        setsum([...sum, input]);
        break;
    }
  };
  return (
    <div className="calc">
      <h1 className="countedNum">{sum}</h1>
      <div className="col-1">
        {Strs.map((str) => {
          return (
            <button
              type="button"
              className="card"
              onClick={clickHandler}
              key={str}
            >
              {str !== Sun && str !== Moon ? str : <div id="svg">{str}</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
