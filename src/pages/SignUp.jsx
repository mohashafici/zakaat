// src/pages/SignUp.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Sign Up</h1>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-700">
          Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
