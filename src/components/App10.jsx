import React, { useState } from "react";

export default function App10() {
  const [products, setProducts] = useState([
    { id: 1, name: "Apples", price: 23 },
    { id: 2, name: "Mangoes", price: 45 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}{" "}
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      ))}

      <hr />

      <h2>My Cart</h2>
      {cart.length === 0 && <p>Cart is empty.</p>}
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ${item.price}{" "}
          <button onClick={() => decrement(item.id)}>-</button>{" "}
          {item.qty}{" "}
          <button onClick={() => increment(item.id)}>+</button> - $
          {item.price * item.qty}
        </div>
      ))}
    </div>
  );
}
