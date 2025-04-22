import React from 'react';
import '../App.css';

const Website = () => {
  return (
    <div>
      <HeroSection />
      <ProductSection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="search-container">
        <input type="text" placeholder="Search or enter website name" className="search-input" />
      </div>
      <div className="hero-content">
        <h1 className="logo">Gravity<span className="dot">.</span></h1>
        <h1 className="title">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </h1>
        <button className="start-btn">Let's get started</button>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <div className="product-section">
      <div className="product-card">
        <div className="text-content">
          <p className="tag">LATEST PRODUCT</p>
          <h2>Poisson Blanc</h2>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast
            of the Semantics, a large language ocean.
          </p>
        </div>
        <img
          className="product-img"
          src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1170&auto=format&fit=crop"
          alt="product"
        />
      </div>
    </div>
  );
};

export default Website;
