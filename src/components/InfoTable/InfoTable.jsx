// components/InfoTable/InfoTable.jsx
import React from 'react';
import './InfoTable.css';

const InfoTable = ({ data }) => {
  return (
    <div className="table-container">
      <table className="info-table">
        <tbody>
          {data.map((item) => (
            <tr key={item.header}>
              <th>{item.header}</th>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
