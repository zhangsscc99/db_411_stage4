import React, { useState } from 'react';

const DeleteUser = () => {
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
      const response = await fetch('http://localhost:3001/api/deleteUser', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('User deleted successfully');
      } else {
        setMessage(data.error || 'Failed to delete the user. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to delete the user. Please try again later.');
    }
  };

  return (
    <div className="section" id="deleteUser">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">Delete User</h2>
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
          <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Delete User
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

export default DeleteUser;
