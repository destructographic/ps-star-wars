// App.jsx
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import { getAllStarships } from './services/sw-api';

const App = () => {
  const [starshipsData, setStarshipsData] = useState(null); // Store the data object containing count and starships
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStarship, setSelectedStarship] = useState(null);

  useEffect(() => {
    getAllStarships()
      .then((data) => {
        console.log('Fetched starships data:', data);
        setStarshipsData(data); // Set the starshipsData object
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
      <Navbar title="Star Wars Starships" starshipsCount={starshipsData ? starshipsData.count : 0} />
      <div className="card-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          starshipsData && starshipsData.starships.map((starship) => (
            <Card key={starship.name} name={starship.name} model={starship.model} onClick={() => handleCardClick(starship)} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
