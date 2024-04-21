import React from "react";
import AnimatedBg from "../Components/AnimatedBg";
import CardsCarousel from "../Components/CardsCarousel";
import Header from "../Components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CardsCarousel />
      <AnimatedBg />
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
