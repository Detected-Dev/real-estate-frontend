import React from "react";
import SuggestionCard from "./SuggestionCard";
import SectionTitle from "./SectionTitle";

const Hero = () => {
  return (
    <>
      <div className="homePage">
        <div className="hero">
          <img src="../Images/heroImage.jpeg" alt="" />
          <div className="descouvre">
            <h1>Find a Place You'll Love to Call Home</h1>
            <p>
              Discover beautiful homes, apartments, and properties in the best
              locations. Whether you're looking to buy or rent, find the perfect
              place that fits your lifestyle.
            </p>
            <a href="#he">DECOUVRIR</a>
          </div>
        </div>
        <SectionTitle
            title="Featured Properties"
            subtitle="Explore our hand-picked selection of exceptional properties in the most desirable locations."
          />
        <div className="Suggestion container">
            <SuggestionCard
            image=""
            title="Modern Villa"
            location="Casablanca"
            price="15,200,000 DH"
          />
          <SuggestionCard
            image=""
            title="luxury Apartement"
            location="Rabat"
            price="2,500,000 DH"
          />
          <SuggestionCard
            image=""
            title="Modern House"
            location="Mohammedia"
            price="1,800,000 DH"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
