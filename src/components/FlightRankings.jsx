import React from "react";

const FlightRankings = () => {
  return (
    <div className="section" id="flight-rankings">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Flight Rankings</h2>
        <div className="mb-4">
          <label htmlFor="rankingType" className="block text-sm font-medium text-gray-700">
            Select the Rankings:
          </label>
          <select
            id="rankingType"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="cancellationRate">Ranking of Cancellation Rate</option>
            <option value="delayLength">Ranking of Total Delay Length</option>
            {/* Add more ranking options here as needed */}
          </select>
        </div>
        <div className="ranking-output bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Ranking</h3>
          {/* Placeholder for ranking output */}
          <p className="font-medium text-gray-800">[Ranking Output Here]</p>
          {/* Output elements would be populated here based on the selected ranking */}
        </div>
      </div>
    </div>
  );
};

export default FlightRankings;
