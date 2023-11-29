import React from "react";

const Login = () => {
  return (
    <div className="section" id="login">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">User Login</h2>
        <form className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              UserId
            </label>
            <input
              type="text"
              id="userId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your UserId"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bookingId" className="block text-sm font-medium text-gray-700">
              BookingId
            </label>
            <input
              type="text"
              id="bookingId"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your BookingId"
            />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Find your reservation:</h3>
          {/* Placeholder for reservation information */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-medium text-gray-800">FlightId: [Output Here]</p>
            <p className="font-medium text-gray-800">AirportName: [Output Here]</p>
            <p className="font-medium text-gray-800">Avg DelayLength: [Output Here]</p>
            <p className="font-medium text-gray-800">Delay Reason: [Output Here]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
