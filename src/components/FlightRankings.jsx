
import React, { useState, useEffect } from 'react';


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const dropdownContainerStyle = {
  marginBottom: '20px',
};

const FlightRankings = () => {
  const [selectedRanking, setSelectedRanking] = useState(null);
  const [rankingsData, setRankingsData] = useState({
    'averageDelayRanking': [],
    'cancelledFlightsRanking': [],
    'flightFrequencyRanking': [],
    'weatherDelaysRanking': [],
    'airlineDelaysRanking': [],
  });

  useEffect(() => {
    // Fetch data from each of the APIs and store it in rankingsData state
    const fetchRankingsData = async () => {
      try {
        const averageDelayResponse = await fetch('http://localhost:3001/api/rank-by-average-delay');
        const averageDelayData = await averageDelayResponse.json();

        const cancelledFlightsResponse = await fetch('http://localhost:3001/api/rank-by-cancelled-flights');
        const cancelledFlightsData = await cancelledFlightsResponse.json();

        const flightFrequencyResponse = await fetch('http://localhost:3001/api/rank-by-flight-frequency');
        const flightFrequencyData = await flightFrequencyResponse.json();

        const weatherDelaysResponse = await fetch('http://localhost:3001/api/rank-by-weather-delays');
        const weatherDelaysData = await weatherDelaysResponse.json();

        const airlineDelaysResponse = await fetch('http://localhost:3001/api/rank-by-airline-delays');
        const airlineDelaysData = await airlineDelaysResponse.json();

        setRankingsData({
          'averageDelayRanking': averageDelayData,
          'cancelledFlightsRanking': cancelledFlightsData,
          'flightFrequencyRanking': flightFrequencyData,
          'weatherDelaysRanking': weatherDelaysData,
          'airlineDelaysRanking': airlineDelaysData,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRankingsData();
  }, []);

  const handleDropdownChange = (event) => {
    setSelectedRanking(event.target.value);
  };

  return (
    

<div style={{ fontFamily: 'Arial, sans-serif', border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
<h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Flight Rankings</h2>

<div style={{ marginBottom: '20px' }}>
  <label style={{ fontWeight: 'bold' }}>Select Ranking:</label>
  <select onChange={handleDropdownChange} style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}>
    <option value="averageDelayRanking">Rank by Average Delay</option>
    <option value="cancelledFlightsRanking">Rank by Cancelled Flights</option>
    <option value="flightFrequencyRanking">Rank by Flight Frequency</option>
    <option value="weatherDelaysRanking">Rank by Weather Delays</option>
    <option value="airlineDelaysRanking">Rank by Airline Delays</option>
  </select>
</div>

{selectedRanking && (
  <div>
    <h3 style={{ fontSize: '20px', marginTop: '20px' }}>
      {selectedRanking === "averageDelayRanking"
        ? "Rank by Average Delay"
        : selectedRanking === "cancelledFlightsRanking"
        ? "Rank by Cancelled Flights"
        : selectedRanking === "flightFrequencyRanking"
        ? "Rank by Flight Frequency"
        : selectedRanking === "weatherDelaysRanking"
        ? "Rank by Weather Delays"
        : "Rank by Airline Delays"}
    </h3>
    <ul style={{ listStyle: 'none', padding: '0' }}>
      {rankingsData[selectedRanking].map((item, index) => (
        <li key={index} style={{ marginBottom: '10px' }}>
          {selectedRanking === "averageDelayRanking"
            ? `Airline: ${item.AirlineName}, Average Delay: ${item.AverageDelay}`
            : selectedRanking === "cancelledFlightsRanking"
            ? `Airline: ${item.AirlineName}, Total Flights: ${item.TotalFlights}, Cancelled Flights: ${item.CancelledFlights}, Cancelled Percentage: ${item.CancelledPercentage}`
            : selectedRanking === "flightFrequencyRanking"
            ? `Airline: ${item.AirlineName}, Total Flights: ${item.TotalFlights}`
            : selectedRanking === "weatherDelaysRanking"
            ? `Airline: ${item.AirlineName}, Weather Delays: ${item.WeatherDelays}`
            : `Airline: ${item.AirlineName}, Airline Delays: ${item.AirlineDelays}`
          }
        </li>
      ))}
    </ul>
  </div>
)}
</div>

  );
};

export default FlightRankings;


// import React, { useState, useEffect } from 'react';

// const FlightRankings = () => {
//   const [averageDelayRanking, setAverageDelayRanking] = useState([]);
//   const [cancelledFlightsRanking, setCancelledFlightsRanking] = useState([]);
//   const [flightFrequencyRanking, setFlightFrequencyRanking] = useState([]);
//   const [weatherDelaysRanking, setWeatherDelaysRanking] = useState([]);
//   const [airlineDelaysRanking, setAirlineDelaysRanking] = useState([]);

//   useEffect(() => {
//     // Fetch data from the 'rank-by-average-delay' API
//     fetch('http://localhost:3001/api/rank-by-average-delay')
//       .then(response => response.json())
//       .then(data => setAverageDelayRanking(data))
//       .catch(error => console.error('Error fetching average delay data:', error));

//     // Fetch data from the 'rank-by-cancelled-flights' API
//     fetch("http://localhost:3001/api/rank-by-cancelled-flights")
//       .then((response) => response.json())
//       .then((data) => {
//         setCancelledFlightsRanking(data);
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });
    
    
//     fetch("http://localhost:3001/api/rank-by-flight-frequency")
//       .then((response) => response.json())
//       .then((data) => {
//         setFlightFrequencyRanking(data);
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });

//     fetch("http://localhost:3001/api/rank-by-weather-delays")
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherDelaysRanking(data);
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });

//     fetch("http://localhost:3001/api/rank-by-airline-delays")
//       .then((response) => response.json())
//       .then((data) => {
//         setAirlineDelaysRanking(data);
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });
   
//   }, []);

//   return (
//     <div>
//       <h2>Flight Rankings</h2>

//       <h3>Rank by Average Delay</h3>
//       <ul>
//         {averageDelayRanking.map((item, index) => (
//           <li key={index}>
//             {`Airline: ${item.AirlineName}, Average Delay: ${item.AverageDelay}`}
//           </li>
//         ))}
//       </ul>

//       <h3>Rank by Cancelled Flights</h3>
//       <ul>
//         {cancelledFlightsRanking.map((item, index) => (
//           <li key={index}>
//             {`Airline: ${item.AirlineName}, Total Flights:${item.TotalFlights}, Cancelled Flights:${item.CancelledFlights}, Cancelled Percentage:${item.CancelledPercentage}`}
//           </li>
//         ))}
//       </ul>
      

      


//       <h4>Rank by Flight Frequency</h4>
//       <ul>
//         {flightFrequencyRanking.map((item2, index2) => (
//           <li key2={index2}>
//             {`Airline: ${item2.AirlineName}, Total Flights: ${item2.TotalFlights}`}
//           </li>
//         ))}
//       </ul>
      
//       <h5>Rank by Weather Delays</h5>
//       <ul>
//         {weatherDelaysRanking.map((item2, index2) => (
//           <li key2={index2}>
//             {`Airline: ${item2.AirlineName}, Weather Delays: ${item2.WeatherDelays}`}
//           </li>
//         ))}
//       </ul>

//       <h3>Rank by Airline Delays</h3>
//       <ul>
//         {airlineDelaysRanking.map((item2, index2) => (
//           <li key2={index2}>
//             {`Airline: ${item2.AirlineName}, Airline Delays: ${item2.AirlineDelays}`}
//           </li>
//         ))}
//       </ul>


     


      



   
      
//     </div>
//   );
// };

// export default FlightRankings;



//第二版本
// import React, { useState, useEffect } from "react";

// const FlightRankings = () => {
//   const [rankingType, setRankingType] = useState("cancellationRate"); // 默认选择取消率
//   const [rankingData, setRankingData] = useState([]); // 用于存储排名数据

//   // 定义排名类型选项
//   const rankingOptions = [
//     { value: "cancellationRate", label: "Ranking of Cancellation Rate" },
//     { value: "delayLength", label: "Ranking of Total Delay Length" },
//     { value: "flightFrequency", label: "Ranking of Flight Frequency" },
//     { value: "weatherDelays", label: "Ranking of Weather Delays" },
//     { value: "airlineDelays", label: "Ranking of Airline Delays" },
//   ];

//   // 处理下拉菜单选择变化
//   const handleRankingTypeChange = (event) => {
//     setRankingType(event.target.value);
//   };

//   // 模拟从后端获取排名数据的函数，实际上应该使用API请求从后端获取数据
//   const fetchRankingData = async () => {
//     try {
//       let endpoint = "";

//       // 根据选择的排名类型确定API请求的端点
//       switch (rankingType) {
//         case "cancellationRate":
//           endpoint = "/api/rank-by-cancelled-flights";
//           break;
//         case "delayLength":
//           endpoint = "/api/rank-by-average-delay";
//           break;
//         case "flightFrequency":
//           endpoint = "/api/rank-by-flight-frequency";
//           break;
//         case "weatherDelays":
//           endpoint = "/api/rank-by-weather-delays";
//           break;
//         case "airlineDelays":
//           endpoint = "/api/rank-by-airline-delays";
//           break;
//         default:
//           break;
//       }

//       // 发起API请求获取排名数据
//       const response = await fetch(endpoint);
//       if (response.ok) {
//         const data = await response.json();
//         setRankingData(data);
//       } else {
//         console.error("Error fetching ranking data");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // 当rankingType发生变化时，获取排名数据
//   useEffect(() => {
//     fetchRankingData();
//   }, [rankingType]);

//   return (
//     <div className="section" id="flight-rankings">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Flight Rankings</h2>
//         <div className="mb-4">
//           <label htmlFor="rankingType" className="block text-sm font-medium text-gray-700">
//             Select the Rankings:
//           </label>
//           <select
//             id="rankingType"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             value={rankingType}
//             onChange={handleRankingTypeChange}
//           >
//             {/* 渲染排名类型选项 */}
//             {rankingOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="ranking-output bg-gray-100 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-4">Ranking</h3>
//           <ul>
//             {/* 显示排名数据 */}
//             {rankingData.map((item, index) => (
//               <li key={index} className="font-medium text-gray-800">
//                 {item.AirlineName}: {item.RankingValue}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightRankings;

//第一版本
// import React, { useState, useEffect } from "react";

// const FlightRankings = () => {
//   const [rankingType, setRankingType] = useState("cancellationRate"); // 默认选择取消率
//   const [rankingData, setRankingData] = useState([]); // 用于存储排名数据

//   // 定义排名类型选项
//   const rankingOptions = [
//     { value: "cancellationRate", label: "Ranking of Cancellation Rate" },
//     { value: "delayLength", label: "Ranking of Total Delay Length" },
//     { value: "flightFrequency", label: "Ranking of Flight Frequency" },
//     { value: "weatherDelays", label: "Ranking of Weather Delays" },
//     { value: "airlineDelays", label: "Ranking of Airline Delays" },
//   ];

//   // 处理下拉菜单选择变化
//   const handleRankingTypeChange = (event) => {
//     setRankingType(event.target.value);
//   };

//   // 模拟从后端获取排名数据的函数，实际上应该使用API请求从后端获取数据
//   const fetchRankingData = async () => {
//     // 这里应该发起API请求获取排名数据
//     // 示例数据格式：[{ AirlineName: "Airline 1", RankingValue: 1 }, { AirlineName: "Airline 2", RankingValue: 2 }]
//     const dummyData = [
//       { AirlineName: "Airline 1", RankingValue: 1 },
//       { AirlineName: "Airline 2", RankingValue: 2 },
//       { AirlineName: "Airline 3", RankingValue: 3 },
//     ];
//     setRankingData(dummyData); // 模拟设置排名数据
//   };

//   // 当rankingType发生变化时，获取排名数据
//   useEffect(() => {
//     fetchRankingData();
//   }, [rankingType]);

//   return (
//     <div className="section" id="flight-rankings">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Flight Rankings</h2>
//         <div className="mb-4">
//           <label htmlFor="rankingType" className="block text-sm font-medium text-gray-700">
//             Select the Rankings:
//           </label>
//           <select
//             id="rankingType"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             value={rankingType}
//             onChange={handleRankingTypeChange}
//           >
//             {/* 渲染排名类型选项 */}
//             {rankingOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="ranking-output bg-gray-100 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-4">Ranking</h3>
//           <ul>
//             {/* 显示排名数据 */}
//             {rankingData.map((item, index) => (
//               <li key={index} className="font-medium text-gray-800">
//                 {item.AirlineName}: {item.RankingValue}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightRankings;


// import React from "react";

// const FlightRankings = () => {
//   return (
//     <div className="section" id="flight-rankings">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Flight Rankings</h2>
//         <div className="mb-4">
//           <label htmlFor="rankingType" className="block text-sm font-medium text-gray-700">
//             Select the Rankings:
//           </label>
//           <select
//             id="rankingType"
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           >
//             <option value="cancellationRate">Ranking of Cancellation Rate</option>
//             <option value="delayLength">Ranking of Total Delay Length</option>
//             {/* Add more ranking options here as needed */}
//           </select>
//         </div>
//         <div className="ranking-output bg-gray-100 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-4">Ranking</h3>
//           {/* Placeholder for ranking output */}
//           <p className="font-medium text-gray-800">[Ranking Output Here]</p>
//           {/* Output elements would be populated here based on the selected ranking */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightRankings;
