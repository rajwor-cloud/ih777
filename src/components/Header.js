// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-content">
        <div className="logo">
          <h2>🩺 IntHealth</h2>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#compare">Compare</a>
          <a href="#hospitals">Hospitals</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
