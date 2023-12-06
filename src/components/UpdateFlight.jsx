import React, { useState } from "react";

const UpdateFlight = () => {
  const [FlightID, setFlightID] = useState("");
  const [NewDepartureTime, setNewDepartureTime] = useState("");
  const [DepartureAirportID, setDepartureAirportID] = useState("");
  const [DestinationAirportID, setDestinationAirportID] = useState("");
  const [delayDuration, setDelayDuration] = useState(null);
  const [originalValues, setOriginalValues] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 构建请求体
    const requestData = {
      FlightID,
      NewDepartureTime,
      DepartureAirportID,
      DestinationAirportID,
    };

    try {
      // 发送POST请求到后端API
      const response = await fetch("http://localhost:3001/api/update-flight-delay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        // 获取API响应并更新延误时长
        const data = await response.json();
        setDelayDuration(data.DelayDuration);
        setOriginalValues(requestData);
        setError(null); // 清除错误
      } else {
        // 处理错误情况
        const errorData = await response.json();
        setError(errorData.error);
        setDelayDuration(null);
        setOriginalValues(requestData); // 保留原始输入字段值
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setError("An error occurred while updating the flight delay.");
      setDelayDuration(null);
      setOriginalValues(requestData); // 保留原始输入字段值
    }
  };

  return (
    <div className="section" id="update-flight">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Update Your Delayed Flight Information</h2>
        <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="flightId" className="block text-sm font-medium text-gray-700">
              FlightId
            </label>
            <input
              type="text"
              id="flightId"
              value={FlightID}
              onChange={(e) => setFlightID(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* 保留其他输入字段，不要省略 */}
          <div className="mb-4">
            <label htmlFor="newDepartureTime" className="block text-sm font-medium text-gray-700">
              New Departure Time
            </label>
            <input
              type="text"
              id="newDepartureTime"
              value={NewDepartureTime}
              onChange={(e) => setNewDepartureTime(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label htmlFor="departureAirportID" className="block text-sm font-medium text-gray-700">
                Departure Airport ID
              </label>
              <input
                type="text"
                id="departureAirportID"
                value={DepartureAirportID}
                onChange={(e) => setDepartureAirportID(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label htmlFor="destinationAirportID" className="block text-sm font-medium text-gray-700">
                Destination Airport ID
              </label>
              <input
                type="text"
                id="destinationAirportID"
                value={DestinationAirportID}
                onChange={(e) => setDestinationAirportID(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn">
              Update Flight
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 text-center text-red-500">{error}</div>
        )}

        {delayDuration !== null && originalValues !== null && (
          <div className="mt-4 text-center">
            <p>Updated Delay Duration: {delayDuration} minutes</p>
            <p>New Flight Information:</p>
            <ul>
              <li>Flight ID: {originalValues.FlightID}</li>
              <li>New Departure Time: {originalValues.NewDepartureTime}</li>
              <li>Departure Airport ID: {originalValues.DepartureAirportID}</li>
              <li>Destination Airport ID: {originalValues.DestinationAirportID}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdateFlight;


// import React, { useState } from "react";

// const UpdateFlight = () => {
//   const [FlightID, setFlightID] = useState("");
//   const [NewDepartureTime, setNewDepartureTime] = useState("");
//   const [DepartureAirportID, setDepartureAirportID] = useState("");
//   const [DestinationAirportID, setDestinationAirportID] = useState("");
//   const [delayDuration, setDelayDuration] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 构建请求体
//     const requestData = {
//       FlightID,
//       NewDepartureTime,
//       DepartureAirportID,
//       DestinationAirportID,
//     };

//     try {
//       // 发送POST请求到后端API
//       const response = await fetch("/api/update-flight-delay", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       });

//       if (response.ok) {
//         // 获取API响应并更新延误时长
//         const data = await response.json();
//         setDelayDuration(data.DelayDuration);
//       } else {
//         // 处理错误情况
//         console.error("Failed to update flight delay.");
//         setDelayDuration(null);
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//       setDelayDuration(null);
//     }
//   };

//   return (
//     <div className="section" id="update-flight">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Update Your Delayed Flight Information</h2>
//         <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="FlightID" className="block text-sm font-medium text-gray-700">
//               Flight ID
//             </label>
//             <input
//               type="text"
//               id="FlightID"
//               value={FlightID}
//               onChange={(e) => setFlightID(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter Flight ID"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="NewDepartureTime" className="block text-sm font-medium text-gray-700">
//               New Departure Time
//             </label>
//             <input
//               type="time"
//               id="NewDepartureTime"
//               value={NewDepartureTime}
//               onChange={(e) => setNewDepartureTime(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="DepartureAirportID" className="block text-sm font-medium text-gray-700">
//               Departure Airport ID
//             </label>
//             <input
//               type="text"
//               id="DepartureAirportID"
//               value={DepartureAirportID}
//               onChange={(e) => setDepartureAirportID(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter Departure Airport ID"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="DestinationAirportID" className="block text-sm font-medium text-gray-700">
//               Destination Airport ID
//             </label>
//             <input
//               type="text"
//               id="DestinationAirportID"
//               value={DestinationAirportID}
//               onChange={(e) => setDestinationAirportID(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter Destination Airport ID"
//             />
//           </div>
//           <div className="flex justify-center">
//             <button type="submit" className="btn">
//               Update Flight
//             </button>
//           </div>
//         </form>

//         {delayDuration !== null && (
//           <div className="mt-4 text-center">
//             <p>Updated Delay Duration: {delayDuration} minutes</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpdateFlight;


// import React, { useState } from "react";

// const UpdateFlight = () => {
//   const [flightId, setFlightId] = useState("");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [dates, setDates] = useState("");
//   const [expectedDepartureTime, setExpectedDepartureTime] = useState("");
//   const [realDepartureTime, setRealDepartureTime] = useState("");
//   const [delayDuration, setDelayDuration] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // 构建请求体
//     const requestData = {
//       FlightID: flightId,
//       NewDepartureTime: realDepartureTime,
//       DepartureAirportID: from,
//       DestinationAirportID: to,
//     };

//     try {
//       // 发送POST请求到后端API
//       const response = await fetch("/api/update-flight-delay", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(requestData),
//       });

//       if (response.ok) {
//         // 获取API响应并更新延误时长
//         const data = await response.json();
//         setDelayDuration(data.DelayDuration);
//       } else {
//         // 处理错误情况
//         console.error("Failed to update flight delay.");
//         setDelayDuration(null);
//       }
//     } catch (error) {
//       console.error("An error occurred:", error);
//       setDelayDuration(null);
//     }
//   };

//   return (
//     <div className="section" id="update-flight">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Update Your Delayed Flight Information</h2>
//         <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="flightId" className="block text-sm font-medium text-gray-700">
//               Flight ID
//             </label>
//             <input
//               type="text"
//               id="flightId"
//               value={flightId}
//               onChange={(e) => setFlightId(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter Flight ID"
//             />
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label htmlFor="from" className="block text-sm font-medium text-gray-700">
//                 From
//               </label>
//               <input
//                 type="text"
//                 id="from"
//                 value={from}
//                 onChange={(e) => setFrom(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Origin Airport"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label htmlFor="to" className="block text-sm font-medium text-gray-700">
//                 To
//               </label>
//               <input
//                 type="text"
//                 id="to"
//                 value={to}
//                 onChange={(e) => setTo(e.target.value)}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Destination Airport"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
//               Dates
//             </label>
//             <input
//               type="date"
//               id="dates"
//               value={dates}
//               onChange={(e) => setDates(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="expectedDepartureTime" className="block text-sm font-medium text-gray-700">
//               Expected Departure Time
//             </label>
//             <input
//               type="time"
//               id="expectedDepartureTime"
//               value={expectedDepartureTime}
//               onChange={(e) => setExpectedDepartureTime(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="realDepartureTime" className="block text-sm font-medium text-gray-700">
//               Real Departure Time
//             </label>
//             <input
//               type="time"
//               id="realDepartureTime"
//               value={realDepartureTime}
//               onChange={(e) => setRealDepartureTime(e.target.value)}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="flex justify-center">
//             <button type="submit" className="btn">
//               Update Flight
//             </button>
//           </div>
//         </form>

//         {delayDuration !== null && (
//           <div className="mt-4 text-center">
//             <p>Updated Delay Duration: {delayDuration} minutes</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UpdateFlight;


// import React from "react";

// const UpdateFlight = () => {
//   return (
//     <div className="section" id="update-flight">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Update Your Delayed Flight Information</h2>
//         <form className="w-full max-w-lg mx-auto">
//           <div className="mb-4">
//             <label htmlFor="flightId" className="block text-sm font-medium text-gray-700">
//               FlightId
//             </label>
//             <input
//               type="text"
//               id="flightId"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter Flight ID"
//             />
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label htmlFor="from" className="block text-sm font-medium text-gray-700">
//                 From
//               </label>
//               <input
//                 type="text"
//                 id="from"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Origin Airport"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3">
//               <label htmlFor="to" className="block text-sm font-medium text-gray-700">
//                 To
//               </label>
//               <input
//                 type="text"
//                 id="to"
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Destination Airport"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label htmlFor="dates" className="block text-sm font-medium text-gray-700">
//               Dates
//             </label>
//             <input
//               type="date"
//               id="dates"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="expectedDepartureTime" className="block text-sm font-medium text-gray-700">
//               Expected Departure Time
//             </label>
//             <input
//               type="time"
//               id="expectedDepartureTime"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="realDepartureTime" className="block text-sm font-medium text-gray-700">
//               Real Departure Time
//             </label>
//             <input
//               type="time"
//               id="realDepartureTime"
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="flex justify-center">
//             <button type="submit" className="btn">
//               Update Flight
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateFlight;
