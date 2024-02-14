// Product.js

import React from "react";

const Product = ({ id, name, price, imageSrc, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={imageSrc || "https://placekitten.com/200/200"}
        alt={name}
        className="mb-4 rounded-lg border"
        style={{ width: "200px", height: "200px" }}
      />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(id, name, price, 1)} // Always add 1 quantity
        className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-full hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
