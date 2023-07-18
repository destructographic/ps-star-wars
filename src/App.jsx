// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import { getAllStarships } from './services/sw-api';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    // fetch all starships and update the state
    getAllStarships()
      .then((data) => setStarships(data.results))
      .catch((error) => console.error('Error fetching starships:', error));
  }, []);

  return (
    <div className="app">
      <Navbar title="Star Wars Starships" />
      <div className="card-container">
        {starships.map((starship) => (
          <Card key={starship.name} name={starship.name} model={starship.model} />
        ))}
      </div>
    </div>
  );
};

export default App;
