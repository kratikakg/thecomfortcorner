// App.js

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Cart from "./Cart";
import Payment from "./Payment"; // You need to create a Payment component
import Home from "./Home"; // You need to create a Home component for the root path
import OrderConfirmation from "./OrderConfirmation";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import { auth } from "./firebase";
const App = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Router>
        {/* Include the Header component at the top level */}
        <Header name={userName} />

        {/* Define routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                setCartItems={setCartItems}
                name={userName}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/cart/payment"
            element={<Payment cartItems={cartItems} />}
          />
          <Route path="order" element={<OrderConfirmation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
