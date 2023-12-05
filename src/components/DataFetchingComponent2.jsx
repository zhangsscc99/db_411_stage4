import React, { useState } from 'react';

export default function DataFetchingComponent() {
  const [data, setData] = useState([]);

  // 模拟数据
  const mockData = [
    { your_column_name1: 'Mock Data 1' },
    { your_column_name2: 'Mock Data 2' },
    { your_column_name3: 'Mock Data 3' },
  ];

  const fetchData = () => {
    // 使用模拟数据更新状态
    setData(mockData);
  };

  return (
    <div>
      <button onClick={fetchData}>Load Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.your_column_name1}</li>
        ))}
      </ul>
    </div>
  );
}
