// components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';
import InfoTable from '../InfoTable/InfoTable';

const Navbar = ({ title, starshipsCount }) => {
  // date in the format "yyyy-mm-dd"
  const today = new Date().toISOString().slice(0, 10);

  return (
    <header className="navbar">
      <div className="navbar-title">{title}</div>
      <InfoTable 
        data={[
          { header: 'today', value: today },
          { header: 'starships', value: starshipsCount },
        ]}
      />
    </header>
  );
};

export default Navbar;
