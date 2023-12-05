// ServerMessage.jsx
import React, { useState, useEffect } from 'react';

const ServerMessage = () => {
  const [message, setMessage] = useState('');
  const [databases, setDatabases] = useState([]);
  const [flightDelays, setFlightDelays] = useState([]); // State to store flight delay data


  useEffect(() => {
    // Replace 'http://localhost:3001/hello' with your actual backend endpoint
    fetch('http://localhost:3001/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Assuming the response is plain text
      })
      .then(text => setMessage(text))
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

      // Fetch the list of databases
    fetch('http://localhost:3001/show-databases')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Assuming the response structure is an array of objects with a 'Database' property
      setDatabases(data.map(db => db.Database));
    })
    .catch(error => {
      console.error('There was a problem fetching the databases:', error);
    });
// 
    fetch('http://localhost:3001/api/delayed-flights')
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
    })
    .then(data => {
    setFlightDelays(data);
    })
    .catch(error => {
    console.error('There was a problem fetching flight delay data:', error);
    });
//
    

    // fetch('http://localhost:3001/api/get-user-reservation-info')
    // .then(response => {
    // if (!response.ok) {
    //     throw new Error('Network response was not ok');
    // }
    // return response.json();
    // })
    // .then(data => {
    // // 更新用户预订信息
    // setUserReservationInfo(data.map(item => ({
    //     userId: item.UserId,
    //     flightId: item.FlightID,
    //     bookingId: item.BookingID
    // })));
    // })
    // .catch(error => {
    // console.error('There was a problem with the fetch operation:', error);
    // });

      //

  }, []);


  return (
    <div>
      <div>{message}</div>
      <div>
        <h3>Databases:</h3>
        <ul>
          {databases.map((db, index) => (
            <li key={index}>{db}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Flight Delay Information:</h3>
        <ul>
          {flightDelays.map((delay, index) => (
            <li key={index}>
              {`City: ${delay.City}, Number of Delayed Flights: ${delay.NumberOfDelayedFlights}, Total Delay Length: ${delay.TotalDelayLength}, Average Delay Length: ${delay.AverageDelayLength}`}
            </li>
          ))}
        </ul>
      </div>

      
      

    </div>
  );

  //<div>{message}</div>;
};

export default ServerMessage;
