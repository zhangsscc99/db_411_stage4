import React, { useState } from 'react';

const RegisterUser = () => {
  const [inputs, setInputs] = useState({ userId: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/insertUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to register. Please try again later.');
    }
  };

  return (
    <div className="section" id="registerUser">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Register User</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              UserId
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={inputs.userId}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Register User
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center">
            <p className={`text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterUser;


// import React, { useState } from "react";

// const RegisterUser = () => {
//   const [inputs, setInputs] = useState({
//     userId: '',
//     password: ''
//   });
//   const [message, setMessage] = useState('');
//   // const [inputs, setInputs] = useState({
//   //   userId: '',
//   //   password: '',
//   //   bookingId: ''
//   // });
//   const [reservation, setReservation] = useState(null);

//   // 处理输入字段的变化
  
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setInputs(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://localhost:3001/api/insertUser', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(inputs),
//     })
//     .then(response => response.json())
//     .then(data => {
//       if (data.error) {
//         setMessage('Registration failed: ' + data.error);
//       } else {
//         setMessage('User registered successfully');
//       }
//     })
//     .catch(error => {
//       console.error('Error during registration:', error);
//       setMessage('An error occurred during registration.');
//     });
//   };

//   return (
//     <div className="section" id="register">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-center font-bold mb-8">Register New User</h2>
//         <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
//           <div className="mb-4">
//             <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
//               UserId
//             </label>
//             <input
//               type="text"
//               id="userId"
//               name="userId"
//               value={inputs.userId}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your UserId"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={inputs.password}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//               Register
//             </button>
//           </div>
//         </form>
//         {message && <div className="mt-4 text-center text-sm text-red-600">{message}</div>}
//       </div>
//     </div>
//   );
// };

// export default RegisterUser;

