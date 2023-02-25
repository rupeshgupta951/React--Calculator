import "./Calculator.css";
import React from "react";
import { useState, useRef, useEffect } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(input);
  }, [input]);

  const handleResetclick = (e) => {
    e.preventDefault();
    setInput("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (input !== typeof Number) {
      setInput("Not Valid");
    } else if (input === "") {
      setInput("");
    }
    let result = eval(input);
    setInput(result);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setInput((preValue) => preValue + value);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <input type="text" value={input} onChange={handleChange} ref={inputRef} placeholder="Enter Number" />
      <div id="eval">
        <button className="buttons" onClick={handleClick}>
          =
        </button>
        <button className="buttons" onClick={handleResetclick}>
        &#10227;

        </button>
        <button className="buttons" value="+" onClick={handleButtonClick}>
          +
        </button>
        <button className="buttons" value="-" onClick={handleButtonClick}>
          &ndash;
        </button>
        <button className="buttons" value="1" onClick={handleButtonClick}>
          1
        </button>
        <button className="buttons" value="2" onClick={handleButtonClick}>
          2
        </button>
        <button className="buttons" value="3" onClick={handleButtonClick}>
          3
        </button>
        <button className="buttons" value="*" onClick={handleButtonClick}>
          X
        </button>
        <button className="buttons" value="4" onClick={handleButtonClick}>
          4
        </button>
        <button className="buttons" value="5" onClick={handleButtonClick}>
          5
        </button>
        <button className="buttons" value="6" onClick={handleButtonClick}>
          6
        </button>
        <button className="buttons" value="/" onClick={handleButtonClick}>
          /
        </button>
        <button className="buttons" value="7" onClick={handleButtonClick}>
          7
        </button>
        <button className="buttons" value="8" onClick={handleButtonClick}>
          8
        </button>
        <button className="buttons" value="9" onClick={handleButtonClick}>
          9
        </button>
        <button className="buttons" value="0" onClick={handleButtonClick}>
          0
        </button>
      </div>
    </div>
  );
}

export default Calculator;
