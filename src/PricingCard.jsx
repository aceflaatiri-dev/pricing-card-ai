import React from 'react';
import './PricingCard.css';

export default function PricingCard({ title, price, features, onClick }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <span className="card-price">{price}</span>
      <ul className="card-features">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <button className="card-button" onClick={onClick}>
        Get Started
      </button>
    </div>
  );
}