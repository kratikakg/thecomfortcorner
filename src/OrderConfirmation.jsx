import React from "react";
import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-green-600">
        Order Confirmed! 🎉
      </h1>

      {/* Celebration animation (placeholder) */}
      <div className="animate-bounce text-5xl">&#127881;</div>

      <div className="mt-8">
        {/* Link to the home page */}
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
