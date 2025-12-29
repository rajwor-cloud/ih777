// src/components/SearchPanel.js
import React from 'react';

const SearchPanel = ({ onFilterChange, searchTerm, setSearchTerm, filters }) => {
  return (
    <aside className="search-panel">
      <div className="search-input">
        <input 
          type="text" 
          placeholder="Search treatments or hospitals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="filter-section">
        <h3>Filters</h3>
        
        <div className="filter-group">
          <label>Price Range (₹)</label>
          <input type="range" min="0" max="20000" />
          <div className="range-display">₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}</div>
        </div>

        <div className="filter-group">
          <label>Cities</label>
          <label><input type="checkbox" /> Chennai</label>
          <label><input type="checkbox" /> Delhi</label>
          <label><input type="checkbox" /> Bangalore</label>
          <label><input type="checkbox" /> Gurugram</label>
        </div>

        <div className="filter-group">
          <label>Accreditations</label>
          <label><input type="checkbox" /> JCI</label>
          <label><input type="checkbox" /> NABH</label>
          <label><input type="checkbox" /> ISO</label>
        </div>

        <button className="apply-filters">Apply Filters</button>
      </div>

      <div className="partners">
        <h4>Partners</h4>
        <div className="partner-logos">
          <span>Apollo</span>
          <span>Fortis</span>
          <span>Max</span>
          <span>Cigna</span>
        </div>
      </div>
    </aside>
  );
};

export default SearchPanel;
