import React, { useRef } from "react";

const RefBasic = () => {
  const colour = useRef();

  const changeColor = () => {
    colour.current.style.color == "black"
      ? (colour.current.style.color = "red")
      : (colour.current.style.color = "black");
  };

  return (
    <>
      <h1 ref={colour}>Hello world</h1>
      <button onClick={changeColor} className="btn btn-dark">
        Change
      </button>
    </>
  );
};

export default RefBasic;
