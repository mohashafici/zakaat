// src/components/ZakaatCalculator.jsx

// Import necessary modules and mock data
import React, { useState, useEffect } from 'react';
import { goldPrice as mockGoldPrice, silverPrice as mockSilverPrice, cashValue as mockCashValue } from '../mockData'; // Correct path

const ZakaatCalculator = () => {
  // State variables to hold user input and results
  const [gold, setGold] = useState(''); // Value of gold in grams
  const [silver, setSilver] = useState(''); // Value of silver in grams
  const [cash, setCash] = useState(''); // Value of cash in currency units
  const [liabilities, setLiabilities] = useState(''); // Value of liabilities in currency units
  const [result, setResult] = useState(''); // Result of Zakaat calculation

  // State variables to hold mock data
  const [goldPrice, setGoldPrice] = useState(mockGoldPrice); // Use mock data for gold price per gram
  const [silverPrice, setSilverPrice] = useState(mockSilverPrice); // Use mock data for silver price per gram
  const [cashValue, setCashValue] = useState(mockCashValue); // Use mock data for initial cash value

  // useEffect hook to set initial values from mock data
  useEffect(() => {
    // No need to fetch data from an API, using mock data
    setGoldPrice(mockGoldPrice);
    setSilverPrice(mockSilverPrice);
    setCashValue(mockCashValue);
  }, []);

  // Function to calculate Zakaat based on user input and mock data
  const calculateZakaat = () => {
    const goldValue = parseFloat(gold) || 0; // Convert gold input to float or use 0 if invalid
    const silverValue = parseFloat(silver) || 0; // Convert silver input to float or use 0 if invalid
    const cashValue = parseFloat(cash) || 0; // Convert cash input to float or use 0 if invalid
    const liabilitiesValue = parseFloat(liabilities) || 0; // Convert liabilities input to float or use 0 if invalid

    // Calculate total assets by converting gold and silver to currency using their prices
    const totalAssets = (goldValue * goldPrice) + (silverValue * silverPrice) + cashValue;
    const netAssets = totalAssets - liabilitiesValue; // Calculate net assets by subtracting liabilities

    // Calculate Nisab value for gold and silver
    const nisabGold = 85 * goldPrice;
    const nisabSilver = 595 * silverPrice;
    const nisabValue = Math.min(nisabGold, nisabSilver); // Use the lesser of the two as Nisab

    // Determine if the user is eligible to pay Zakaat
    if (netAssets >= nisabValue) {
      const zakaat = netAssets * 0.025; // Calculate Zakaat as 2.5% of net assets
      setResult(`Zakaat to be paid: ${zakaat.toFixed(2)} currency units`); // Set the result with Zakaat amount
    } else {
      setResult('You are not eligible to pay Zakaat.'); // Set the result if not eligible
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Zakaat Calculator</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculateZakaat(); // Call calculateZakaat function on form submission
          }}
          className="space-y-4"
        >
          {/* Input field for gold value */}
          <div>
            <label className="block text-gray-700">Value of Gold (in grams):</label>
            <input
              type="number"
              value={gold}
              onChange={(e) => setGold(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          {/* Input field for silver value */}
          <div>
            <label className="block text-gray-700">Value of Silver (in grams):</label>
            <input
              type="number"
              value={silver}
              onChange={(e) => setSilver(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          {/* Input field for cash value */}
          <div>
            <label className="block text-gray-700">Cash in Hand/Bank (in currency):</label>
            <input
              type="number"
              value={cash}
              onChange={(e) => setCash(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          {/* Input field for liabilities */}
          <div>
            <label className="block text-gray-700">Liabilities (in currency):</label>
            <input
              type="number"
              value={liabilities}
              onChange={(e) => setLiabilities(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded"
            />
          </div>

          {/* Submit button to calculate Zakaat */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Calculate Zakaat
          </button>
        </form>

        {/* Display the result */}
        <h2 className="mt-4 text-gray-700 text-center">{result}</h2>
      </div>
    </div>
  );
};

export default ZakaatCalculator;
