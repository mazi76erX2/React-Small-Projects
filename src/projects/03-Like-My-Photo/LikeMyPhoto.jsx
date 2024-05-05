import React, { useState } from "react";

import { GiGluttonousSmile, GiBugleCall } from "react-icons/gi";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

import Title from "../components/Title";
import MinatoImg from "./img/minato-fights-the-tailed-beasts.avif";

export default function LikeMyPhoto() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () =>
    !like
      ? setLike(true) & setCount(count + 1)
      : setLike(false) & setCount(count - 1);

  return (
    <div className="container text-center">
      <Title text={"Like My Photo"} />
      <Title classes={"subtitle"} text={`Likes: ${count}`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          <GiGluttonousSmile className="mr-2" />
          <small>Minato Fights the Tailed Beasts</small>
        </div>
        <img
          src={MinatoImg}
          alt="Minato Fights the Tailed Beasts"
          style={{ height: "fit-content" }}
          onDoubleClick={toggleLike}
        />
        <div className="card-footer">
          <GiBugleCall />
          {like ? (
            <AiTwotoneHeart className="text-danger" />
          ) : (
            <AiOutlineHeart className="fs-lg" />
          )}
        </div>
      </div>
    </div>
  );
}
