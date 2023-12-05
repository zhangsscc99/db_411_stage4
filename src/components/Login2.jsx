import React, { useState } from "react";

const Login2 = () => {
  const [reservationData, setReservationData] = useState(null);

  const handleFetchData = () => {
    // Simulated data that would come from a database query
    const fetchedData = {
      FlightId: "12345",
      AirportName: "Example Airport",
      AvgDelayLength: "45 minutes",
      DelayReason: "Weather conditions",
    };

    // Set the simulated data to state
    setReservationData(fetchedData);
  };

  return (
    <div className="section" id="login2">
      {/* ... other code ... */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Find your reservation:</h3>
        <button
          onClick={handleFetchData}
          className="mb-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Fetch Reservation Data
        </button>
        {reservationData && (
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-medium text-gray-800">FlightId: {reservationData.FlightId}</p>
            <p className="font-medium text-gray-800">AirportName: {reservationData.AirportName}</p>
            <p className="font-medium text-gray-800">Avg DelayLength: {reservationData.AvgDelayLength}</p>
            <p className="font-medium text-gray-800">Delay Reason: {reservationData.DelayReason}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login2;
