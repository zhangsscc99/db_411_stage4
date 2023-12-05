import React, { useState, useEffect } from 'react';

const ServerMessage2 = () => {
  const [databases, setDatabases] = useState([]);

  useEffect(() => {
    // Fetch the list of databases
    fetch('http://localhost:3001/show-databases')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
      })
      .then(data => {
        // Assuming the response structure is an array of database names
        setDatabases(data.map(db => db.Database));
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <h3>Databases:</h3>
      <ul>
        {databases.map((db, index) => (
          <li key={index}>{db}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServerMessage2;
