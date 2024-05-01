import React from "react";
import Title from "../components/Title";

export default function RandomizeColors() {
  const handleClick = (e) => {
    console.log("clicked the first button");
    console.log(e.target);
    console.log("Nothing had happened, try another one");
  };

  const handleSecClick = (e) => {
    let body = document.querySelector("body");
    let title = document.querySelector(".title");
    body.style.background = getRandomColor();
    title.style.color = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="RandomizeColors container m-auto text-center">
      <Title text={"Randomize Colors"} classes={"title mb-4"} />
      <button className="btn btn-danger" onClick={(e) => handleClick(e)}>
        Click me
      </button>
      <button className="btn btn-success" onClick={handleSecClick}>
        Click me
      </button>
      <button className="btn btn-primary" onClick={handleSecClick}>
        Click me
      </button>
      <button className="btn btn-warning" onClick={handleSecClick}>
        Click me
      </button>
    </div>
  );
}
