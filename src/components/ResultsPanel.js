// src/components/ResultsPanel.js
import React from 'react';
import HospitalCard from './HospitalCard';

const ResultsPanel = ({ hospitals }) => (
  <section className="results-panel">
    <div className="results-header">
      <h2>{hospitals.length} Hospitals Found</h2>
      <div className="sort-options">
        <button>Sort by Price ↑</button>
        <button>Sort by Rating ↓</button>
      </div>
    </div>
    
    <div className="hospitals-grid">
      {hospitals.map((hospital, index) => (
        <HospitalCard key={index} hospital={hospital} />
      ))}
    </div>
  </section>
);

export default ResultsPanel;
