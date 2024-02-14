import React, { useState } from "react";
import Hero from "./Hero";
import Features from "./Features";
import NewItems from "./NewItems";
import FeaturesSecond from "./FeaturesSecond";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

const Home = ({ cartItems, setCartItems, userName }) => {
  return (
    <div>
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
