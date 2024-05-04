import React, { useState } from "react";
import Title from "../components/Title";
import MinatoImg from "./img/minato-fights-the-tailed-beasts.avif";

export default function LikeMyPhoto() {
  const [like, setLike] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center">
      <Title text={"Like My Photo"} classes={"title mb-4"} />
      <Title classes={"subtitle"} text={`Likes: ${count}`} />
      <div className="card card-dark"></div>
    </div>
  );
}
