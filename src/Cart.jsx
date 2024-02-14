// Cart.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const addToCart = (productId, productName, productPrice, quantity) => {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        { id: productId, name: productName, price: productPrice, quantity },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
        : item
    );

    const finalCart = updatedCart.filter(
      (item) => !(item.quantity === 0 && item.id === productId)
    );

    setCartItems(finalCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        (item.price !== undefined && item.quantity !== undefined
          ? item.price * item.quantity
          : 0),
      0
    );
  };

  const handleProceedToPayment = () => {
    navigate("/cart/payment", { state: { cartItems } });
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-6">Trending Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Product
          id={1}
          name="MintyFresh Settee"
          price={599.99}
          imageSrc="assets/MintyFreshSettee.jpg"
          addToCart={() => addToCart(1, "MintyFresh Settee", 599.99, 1)}
        />
        <Product
          id={2}
          name="Elegant Twin Seating"
          price={499.99}
          imageSrc="assets/ElegantTwinSeating.jpg"
          addToCart={() => addToCart(2, "Elegant Twin Seating", 499.99, 1)}
        />
        <Product
          id={3}
          name="Powder Pink Perch"
          price={399.99}
          imageSrc="assets/PowderPinkPerch.jpg"
          addToCart={() => addToCart(3, "Powder Pink Perch", 399.99, 1)}
        />
        {/* Add more products as needed */}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart Summary</h2>
        <div className="overflow-y-auto max-h-48">
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{item.name}</span>
                <div className="flex items-center">
                  <span className="mr-4">${item.price.toFixed(2)}</span>
                  <span className="mr-4">Quantity: {item.quantity || 1}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <strong>Total: ${calculateTotal().toFixed(2)}</strong>
        </div>
        <button
          onClick={handleProceedToPayment}
          className="bg-green-500 text-white mt-4 py-2 px-4 rounded-full hover:bg-green-600"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
