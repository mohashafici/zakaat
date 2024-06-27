// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?islamic")' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-blue-500 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
      <div className="absolute top-0 right-0 p-4 z-20">
        <div className="space-x-4">
          <Link to="/signup" className="px-4 py-2 bg-blue-500 text-lg font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg">
            Sign Up
          </Link>
          <Link to="/signin" className="px-4 py-2 bg-yellow-500 text-lg font-semibold rounded-lg hover:bg-yellow-700 transition transform hover:scale-105 shadow-lg">
            Sign In
          </Link>
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow-lg">Zakaat Calculator</h1>
        <p className="text-2xl md:text-3xl mb-10 max-w-xl text-shadow-md">Effortlessly calculate your Zakaat with our easy-to-use and accurate calculator.</p>
        <Link to="/calculator" className="px-8 py-4 bg-green-500 text-2xl font-semibold rounded-lg hover:bg-green-700 transition transform hover:scale-110 shadow-lg">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
