// components/Card/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ name, model }) => {
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      {model && <p className="starship-model">Model: {model}</p>}
    </div>
  );
};

export default Card;