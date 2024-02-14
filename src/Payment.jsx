import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [isCODSelected, setIsCODSelected] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleConfirmOrder = () => {
    // if (!isCODSelected) {
    //   // If COD is not selected, show an alert or a pop-up message
    //   alert("Please select Cash On Delivery (COD) to proceed.");
    //   return;
    // }

    // Implement logic to store order details or perform other actions

    // For this example, let's log the entered information and COD option
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Contact Number:", contactNumber);
    console.log("Address:", address);
    console.log("Pincode:", pincode);
    // console.log("COD Selected:", isCODSelected);

    // You may redirect to a success page or perform other actions as needed
    navigate("/order");
  };

  const calculateTotal = () => {
    const cartItems = location.state?.cartItems || [];
    return cartItems.reduce(
      (total, item) =>
        total +
        (item.price !== undefined && item.quantity !== undefined
          ? item.price * item.quantity
          : 0),
      0
    );
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-6">Order Details</h1>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="contactNumber"
          className="block text-sm font-medium text-gray-700"
        >
          Contact Number
        </label>
        <input
          type="tel"
          id="contactNumber"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter your contact number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <textarea
          id="address"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows="4"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="pincode"
          className="block text-sm font-medium text-gray-700"
        >
          Pincode
        </label>
        <input
          type="text"
          id="pincode"
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          placeholder="Enter your pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          required
        />
      </div>

      {/* <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          <input
            type="checkbox"
            className="mr-2"
            checked={isCODSelected}
            onChange={() => setIsCODSelected(!isCODSelected)}
          />
          Cash On Delivery (COD)
        </label>
      </div> */}

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <div className="overflow-y-auto max-h-48">
          <ul>
            {location.state?.cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <span>{item.name}</span>
                <div className="flex items-center">
                  <span className="mr-4">${item.price.toFixed(2)}</span>
                  <span className="mr-4">Quantity: {item.quantity || 1}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <strong>Total: ${calculateTotal().toFixed(2)}</strong>
        </div>
      </div>

      <button
        type="button"
        onClick={handleConfirmOrder}
        className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Payment;
