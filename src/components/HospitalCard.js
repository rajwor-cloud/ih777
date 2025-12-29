// src/components/HospitalCard.js
import React from 'react';

const HospitalCard = ({ hospital }) => (
  <div className="hospital-card">
    <div className="hospital-header">
      <div className="hospital-info">
        <h3>{hospital.hospital}</h3>
        <div className="location">{hospital.city}</div>
        <div className="rating">⭐ {hospital.rating}/5 ({hospital.reviews} reviews)</div>
      </div>
      <div className="price-tag">
        <div className="total-price">₹{hospital.total.toLocaleString()}</div>
        <div className="savings">Save 65% vs USA</div>
      </div>
    </div>

    <div className="cost-breakdown">
      <div className="cost-item">
        <span>Surgery:</span>
        <span>₹{hospital.surgery.toLocaleString()}</span>
      </div>
      <div className="cost-item">
        <span>Medication:</span>
        <span>₹{hospital.medication.toLocaleString()}</span>
      </div>
      <div className="cost-item">
        <span>Hospital Stay ({hospital.days} days):</span>
        <span>₹{hospital.hospitalStay.toLocaleString()}</span>
      </div>
      <div className="cost-item">
        <span>Travel + Visa:</span>
        <span>₹{hospital.travel.toLocaleString()}</span>
      </div>
      <div className="cost-item">
        <span>Accommodation + Food:</span>
        <span>₹{hospital.accommodation.toLocaleString()}</span>
      </div>
    </div>

    <div className="hospital-features">
      <span className={`accreditation ${hospital.accreditations.jci ? 'active' : ''}`}>JCI</span>
      <span className={`accreditation ${hospital.accreditations.nabh ? 'active' : ''}`}>NABH</span>
      <span>{hospital.waitTime} wait time</span>
    </div>

    <button className="cta-button">Get Quote</button>
  </div>
);

export default HospitalCard;
