import React from "react";
import SliderComp from "./SliderComp";
import Title from "../components/Title";

const SliderToGrow = () => {
  const [slideValue, setSlideValue] = useState(0);
  const handleSliderValueChange = (e) => {
    setSlideValue(e.target.value);
  };

  let bgColor;
  let textColor;

  if (slideValue < 25) {
    bgColor = "red";
    textColor = "green";
  }
  if (slideValue > 25 && slideValue <= 50) {
    bgColor = "blue";
  }
  if (slideValue > 50 && slideValue <= 75) {
    bgColor = "green";
    textColor = "white";
  }
  if (slideValue > 75) {
    bgColor = "orange";
    textColor = "white";
  }
  if (slideValue == 100) {
    bgColor = "red";
  }
  return (
    <div className="container text-center">
      <Title text={"Slide To Grow"} />
      <SliderComp
        setValue={slideValue}
        handleInput={handleSliderValueChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
};

export default SliderToGrow;
