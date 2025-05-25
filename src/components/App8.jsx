import React, { useState } from "react";

export default function App8() {
  const [count, setCount] = useState(10); 

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 20px", fontSize: "24px" }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
