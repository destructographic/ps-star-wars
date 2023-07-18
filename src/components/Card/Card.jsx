// components/Card/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ name, model }) => {
  console.log('Model prop:', model); // Temporary debug log
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      {model && <p className="starship-model">{model}</p>}
    </div>
  );
};

export default Card;
