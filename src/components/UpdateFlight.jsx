import React from "react";

const UpdateFlight = () => {
  return (
    <div className="section" id="update-flight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Update Your Delayed Flight Information</h2>
        <form className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="flightId" className="block text-sm font-medium text-gray-700">
              FlightId
            </label>
            <input
              type="text"
              id="flightId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Flight ID"
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                From
              </label>
              <input
                type="text"
                id="from"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Origin Airport"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                To
              </label>
              <input
                type="text"
                id="to"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Destination Airport"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
              Dates
            </label>
            <input
              type="date"
              id="dates"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expectedDepartureTime" className="block text-sm font-medium text-gray-700">
              Expected Departure Time
            </label>
            <input
              type="time"
              id="expectedDepartureTime"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="realDepartureTime" className="block text-sm font-medium text-gray-700">
              Real Departure Time
            </label>
            <input
              type="time"
              id="realDepartureTime"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn">
              Update Flight
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateFlight;
