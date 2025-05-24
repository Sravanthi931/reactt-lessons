import React from "react";
import "./Fruit.css";

export default function Fruit({ name }) {
  return (
    <div className="fruit-box">
      {name}
    </div>
  );
}
