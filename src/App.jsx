// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import { getAllStarships } from './services/sw-api';

const App = () => {
  const [starships, setStarships] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStarship, setSelectedStarship] = useState(null);
  const [starshipsCount, setStarshipsCount] = useState(0); // Add a new state for starshipsCount

  useEffect(() => {
    getAllStarships()
      .then((data) => {
        console.log('Fetched starships data:', data);
        setStarships(data);
        setStarshipsCount(data.count); // Set the starshipsCount from the API data
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching starships:', error);
        setIsLoading(false);
      });
  }, []);

  const handleCardClick = (starship) => {
    setSelectedStarship(starship);
  };

  return (
    <div className="app">
      <Navbar title="Star Wars Starships" starshipsCount={starshipsCount} />
      <div className="card-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          starships.map((starship) => (
            <Card key={starship.name} name={starship.name} model={starship.model} onClick={() => handleCardClick(starship)} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
