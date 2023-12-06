import React, { useState } from "react";

const AlternativeFlights = () => {
  const [inputs, setInputs] = useState({
    FlightID: '',
    DepartureAirportID: '',
    DestinationAirportID: '',
    DepartureTime: ''
  });
  const [alternativeFlights, setAlternativeFlights] = useState([]);

  // Handle input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the backend
    fetch('http://localhost:3001/api/find-alternative-flights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check for errors in the response
        if (data.error) {
          console.error(data.error);
        } else {
          // Set the alternative flights state
          setAlternativeFlights(data);
        }
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  return (
    <div className="section" id="alternative-flights">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Find Alternative Flights</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="FlightID" className="block text-sm font-medium text-gray-700">
              Flight ID
            </label>
            <input
              type="text"
              id="FlightID"
              name="FlightID"
              value={inputs.FlightID}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Flight ID"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="DepartureAirportID" className="block text-sm font-medium text-gray-700">
              Departure Airport ID
            </label>
            <input
              type="text"
              id="DepartureAirportID"
              name="DepartureAirportID"
              value={inputs.DepartureAirportID}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Departure Airport ID"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="DestinationAirportID" className="block text-sm font-medium text-gray-700">
              Destination Airport ID
            </label>
            <input
              type="text"
              id="DestinationAirportID"
              name="DestinationAirportID"
              value={inputs.DestinationAirportID}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Destination Airport ID"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="DepartureTime" className="block text-sm font-medium text-gray-700">
              Departure Time
            </label>
            <input
              type="text"
              id="DepartureTime"
              name="DepartureTime"
              value={inputs.DepartureTime}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Departure Time"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Find Alternative Flights
            </button>
          </div>
        </form>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Alternative Flights:</h3>
          {alternativeFlights.length > 0 ? (
            <div className="bg-gray-100 p-4 rounded-lg">
              {alternativeFlights.map((flight) => (
                <div key={flight.AlternativeFlightID}>
                  <p className="font-medium text-gray-800">
                    Alternative Flight ID: {flight.AlternativeFlightID}
                  </p>
                  <p className="font-medium text-gray-800">
                    Alternative Departure Time: {flight.AlternativeDepartureTime}
                  </p>
                  <p className="font-medium text-gray-800">
                    Alternative Arrival Time: {flight.AlternativeArrivalTime}
                  </p>
                  <p className="font-medium text-gray-800">
                    Alternative Airline: {flight.AlternativeAirline}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No alternative flights found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlternativeFlights;


// import React, { useState } from "react";

// const AlternativeFlights = () => {
//   const [inputs, setInputs] = useState({
//     flightId: '',
//     departureAirportId: '',
//     destinationAirportId: '',
//     departureTime: ''
//   });
//   const [alternativeFlight, setAlternativeFlight] = useState(null);

//   // 处理输入字段的变化
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setInputs(prev => ({ ...prev, [name]: value }));
//   };

//   // 处理表单提交
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // 发送 POST 请求到后端
//     fetch('http://localhost:3001/api/find-alternative-flights', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(inputs),
//     })
//     .then(response => response.json())
//     .then(data => {
//       // 如果返回错误信息
//       if (data.error) {
//         console.error(data.error);
//       } else {
//         // 设置替代航班信息状态
//         setAlternativeFlight(data[0]); // 假设返回的是一个数组
//       }
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
//   };

//   return (
//     <div className="section" id="alternative-flights">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Search for Flights</h2>
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mb-8">
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label htmlFor="flightId" className="block text-sm font-medium text-gray-700">
//                 FlightId
//               </label>
//               <input
//                 type="text"
//                 id="flightId"
//                 name="flightId"
//                 value={inputs.flightId}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Flight ID"
//               />
//             </div>
//             <div className="w-full md:w-1/4 px-3">
//               <label htmlFor="departureAirportId" className="block text-sm font-medium text-gray-700">
//                 Departure Airport ID
//               </label>
//               <input
//                 type="text"
//                 id="departureAirportId"
//                 name="departureAirportId"
//                 value={inputs.departureAirportId}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Departure Airport ID"
//               />
//             </div>
//             <div className="w-full md:w-1/4 px-3">
//               <label htmlFor="destinationAirportId" className="block text-sm font-medium text-gray-700">
//                 Destination Airport ID
//               </label>
//               <input
//                 type="text"
//                 id="destinationAirportId"
//                 name="destinationAirportId"
//                 value={inputs.destinationAirportId}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Destination Airport ID"
//               />
//             </div>
//             <div className="w-full md:w-1/4 px-3">
//               <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700">
//                 Departure Time
//               </label>
//               <input
//                 type="text"
//                 id="departureTime"
//                 name="departureTime"
//                 value={inputs.departureTime}
//                 onChange={handleChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Departure Time"
//               />
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button type="submit" className="btn">
//               Search Flights
//             </button>
//           </div>
//         </form>
//         <div className="alternative-flight-info bg-gray-100 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-4">Alternative Flight Information:</h3>
//           {alternativeFlight && (
//             <div>
//               <p className="font-medium text-gray-800">Alter FlightId: {alternativeFlight.AlternativeFlightID}</p>
//               <p className="font-medium text-gray-800">Departure Time: {alternativeFlight.AlternativeDepartureTime}</p>
//               <p className="font-medium text-gray-800">Arrival Time: {alternativeFlight.AlternativeArrivalTime}</p>
//               <p className="font-medium text-gray-800">Airlines Name: {alternativeFlight.AlternativeAirline}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlternativeFlights;



// import React from "react";

// const AlternativeFlights = () => {
//   return (
//     <div className="section" id="alternative-flights">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Search for Flights</h2>
//         <form className="w-full max-w-lg mx-auto mb-8">
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label htmlFor="flightId" className="block text-sm font-medium text-gray-700">
//                 FlightId
//               </label>
//               <input
//                 type="text"
//                 id="flightId"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Flight ID"
//               />
//             </div>
//             <div className="w-full md:w-1/4 px-3">
//               <label htmlFor="from" className="block text-sm font-medium text-gray-700">
//                 From
//               </label>
//               <input
//                 type="text"
//                 id="from"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Origin"
//               />
//             </div>
//             <div className="w-full md:w-1/4 px-3">
//               <label htmlFor="to" className="block text-sm font-medium text-gray-700">
//                 To
//               </label>
//               <input
//                 type="text"
//                 id="to"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Destination"
//               />
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
//                 Dates
//               </label>
//               <input
//                 type="date"
//                 id="dates"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700">
//                 Departure Time
//               </label>
//               <input
//                 type="time"
//                 id="departureTime"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button type="submit" className="btn">
//               Search Flights
//             </button>
//           </div>
//         </form>
//         <div className="alternative-flight-info bg-gray-100 p-4 rounded-lg">
//           <h3 className="text-xl font-semibold mb-4">Alternative Flight Information:</h3>
//           {/* Placeholder for alternative flight information output */}
//           <p className="font-medium text-gray-800">Alter FlightId: [Output Here]</p>
//           <p className="font-medium text-gray-800">Departure Time: [Output Here]</p>
//           <p className="font-medium text-gray-800">Arrival Time: [Output Here]</p>
//           <p className="font-medium text-gray-800">Airlines Name: [Output Here]</p>
//           {/* Output elements would be populated here based on the search */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlternativeFlights;
