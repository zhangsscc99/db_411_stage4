import React from "react";

const AlternativeFlights = () => {
  return (
    <div className="section" id="alternative-flights">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Search for Flights</h2>
        <form className="w-full max-w-lg mx-auto mb-8">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="flightId" className="block text-sm font-medium text-gray-700">
                FlightId
              </label>
              <input
                type="text"
                id="flightId"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Flight ID"
              />
            </div>
            <div className="w-full md:w-1/4 px-3">
              <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="text"
                id="from"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Origin"
              />
            </div>
            <div className="w-full md:w-1/4 px-3">
              <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="text"
                id="to"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Destination"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
                Dates
              </label>
              <input
                type="date"
                id="dates"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label htmlFor="departureTime" className="block text-sm font-medium text-gray-700">
                Departure Time
              </label>
              <input
                type="time"
                id="departureTime"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn">
              Search Flights
            </button>
          </div>
        </form>
        <div className="alternative-flight-info bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Alternative Flight Information:</h3>
          {/* Placeholder for alternative flight information output */}
          <p className="font-medium text-gray-800">Alter FlightId: [Output Here]</p>
          <p className="font-medium text-gray-800">Departure Time: [Output Here]</p>
          <p className="font-medium text-gray-800">Arrival Time: [Output Here]</p>
          <p className="font-medium text-gray-800">Airlines Name: [Output Here]</p>
          {/* Output elements would be populated here based on the search */}
        </div>
      </div>
    </div>
  );
};

export default AlternativeFlights;
