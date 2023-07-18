// components/Card/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ name }) => {
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
    </div>
  );
};

export default Card;
