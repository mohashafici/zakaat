// src/pages/AboutZakaat.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AboutZakaat = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">About Zakaat Calculator</h1>
        <p className="mb-4">
          Zakaat is a form of almsgiving treated as a religious obligation or tax in Islam. It is considered a mandatory obligation for Muslims, alongside prayer. Our Zakaat Calculator helps you calculate your Zakaat easily and accurately.
        </p>
        <h2 className="text-xl font-bold mb-2">Nisab Threshold</h2>
        <p className="mb-4">
          The Nisab threshold for gold is 85 grams, and for silver, it is 595 grams. Ensure you meet the minimum threshold before calculating Zakaat. Other assets that can be considered include cash, business stock, receivables, shares, and pensions.
        </p>
        <h2 className="text-xl font-bold mb-2">Zakaat Calculation</h2>
        <p>
          The Zakaat is calculated at 2.5% of the net zakatable assets, which is the total assets minus total debts. Use our calculator to get an accurate figure of the Zakaat you need to pay.
        </p>
        <Link to="/" className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AboutZakaat;
