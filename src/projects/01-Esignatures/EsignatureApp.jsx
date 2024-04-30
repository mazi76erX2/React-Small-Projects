import React, { useState } from "react";
import Title from "../components/Title";

export default function EsignatureApp() {
  const [name, setName] = useState("Your Signature");
  const [date, setDate] = useState("DoB");

  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    // console.log(e.target.value);
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };

  document.body.style.background = "#eee";

  return (
    <div className="container text-center">
      <Title classes={"title text-center"} text={name} />
      <Title
        classes={"main-title text-center mb-4"}
        text={!date ? "DoB" : date}
      />
      <p>
        Quis duis aliqua culpa do ullamco dolor exercitation in laboris elit
        labore enim duis anim. Laborum voluptate dolore sint consequat. Deserunt
        et consectetur reprehenderit amet excepteur sit culpa laboris. Elit
        incididunt culpa id elit enim. Sunt non enim Lorem amet dolor cillum
        dolor ea minim aliquip magna. Mollit cillum enim excepteur veniam magna
        est excepteur deserunt eiusmod fugiat ut veniam laborum laboris. Laborum
        ipsum anim incididunt esse Lorem cillum do esse anim laborum consequat
        do aute dolor.
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={handleDateChange}
        ></input>
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        ></input>
      </footer>
    </div>
  );
}
