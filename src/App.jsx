// App.jsx

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <h1>Hello Star Wars API!</h1>
      {/* Add other components and content here */}
    </div>
  );
};

export default App;
