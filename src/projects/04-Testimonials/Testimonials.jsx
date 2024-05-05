import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([""]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text={"Testimonials"} />
      <Button
        text={"Posts"}
        btnClass="btn-info btn-lg"
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials("Posts")}
      />
      <Button
        text={"Users"}
        btnClass="btn-info btn-lg"
        icon={<AiOutlineUser />}
        onClick={() => setTestimonials("Users")}
      />
      <Button
        text={"Comments"}
        btnClass="btn-info btn-lg"
        icon={<AiOutlineComment />}
        onClick={() => setTestimonials("Comments")}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-2" key={item.id}>
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.body}</p>
                  {item.email && (
                    <small
                      className="card-footer"
                      style={{ display: "block", marginTop: "15px" }}
                    >
                      {item.email}
                    </small>
                  )}
                </div>
              </div>
            );
          })}
    </div>
  );
}
