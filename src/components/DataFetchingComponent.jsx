// DataFetchingComponent.jsx
import React, { useState } from 'react';

export default function DataFetchingComponent() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3001/api/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <button onClick={fetchData}>Load Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.your_column_name}</li>
        ))}
      </ul>
    </div>
  );
}
