import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { RiCelsiusFill } from "react-icons/ri";

const TemperatureController = () => {
  const [temperature, setTemperature] = useState(0);

  const handlePlusClick = () => {
    setTemperature(temperature + 1);
  };

  const handleMinusClick = () => {
    setTemperature(temperature - 1);
  };

  return (
    <div className="container mt-3 text-center">
      <Title text={"Temperature Controller"} />
      <div className="card bg-light m-auto" style={{ width: 200 }}>
        <h1
          className={`text-light card border-50 ${
            temperature > 0 ? "bg-danger" : "bg-info"
          }`}
          style={{
            height: 150,
            width: 150,
            border: "2px solid #666",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {temperature} <RiCelsiusFill style={{ marginLeft: 5 }} />
        </h1>
        <div className="d-flet my-2">
          <Button
            text={"-"}
            btnClass={"btn-lg"}
            onClick={handleMinusClick}
          />
          <Button
            text={"+"}
            btnClass={"btn-lg"}
            onClick={handlePlusClick}
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureController;
