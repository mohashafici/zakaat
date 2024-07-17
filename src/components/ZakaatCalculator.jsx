// ZakaatCalculator.jsx
import React, { useState, useEffect, useContext } from 'react';
import { ZakaatContext } from '../ZakaatContext';
import { goldPrice as mockGoldPrice, silverPrice as mockSilverPrice, cashValue as mockCashValue } from '../mockData'; // Mock data for initial values

const ZakaatCalculator = () => {
  const [step, setStep] = useState(1); // State for tracking the current step in the form
  const { data, setData } = useContext(ZakaatContext); // Context for managing form data

  useEffect(() => {
    // Update state with mock data initially
    setData(prevData => ({
      ...prevData,
      gold: mockGoldPrice,
      silver: mockSilverPrice,
      cash: mockCashValue
    }));
  }, [setData]);

  // Function to proceed to the next step
  const nextStep = () => setStep(step + 1);

  // Function to go back to the previous step
  const prevStep = () => setStep(step - 1);

  // Function to handle input changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Calculate total assets
  const totalAssets = [data.gold, data.silver, data.cash, data.receivables, data.businessStock, data.shares, data.pensions].reduce(
    (acc, item) => acc + parseFloat(item || 0), 0);

  // Calculate total debts
  const totalDebts = [data.arrears, data.bills, data.longTermDebts].reduce((acc, item) => acc + parseFloat(item || 0), 0);

  // Calculate net assets and Zakaat amount
  const netAssets = totalAssets - totalDebts;
  const zakaat = netAssets * 0.025;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-6xl flex flex-col items-center border border-gray-300" style={{ backgroundColor: '#F9FAFB' }}>
        <h1 className="text-3xl font-bold text-center mb-4">Zakat Calculator</h1>
        <div className="w-full h-1 bg-green-500 mb-8"></div>
        
        {step === 1 && (
          <div className="w-full flex justify-center">
            <div className="w-1/3 px-4">
              <h2 className="text-lg font-semibold text-green-500 mb-4">1/3 Enter your Zakatable Assets</h2>
              <form className="space-y-4">
                {[
                  { label: 'Gold', name: 'gold', value: data.gold },
                  { label: 'Silver', name: 'silver', value: data.silver },
                  { label: 'Cash', name: 'cash', value: data.cash },
                  { label: 'Receivables', name: 'receivables', value: data.receivables },
                  { label: 'Business stock', name: 'businessStock', value: data.businessStock },
                  { label: 'Shares', name: 'shares', value: data.shares },
                  { label: 'Pensions', name: 'pensions', value: data.pensions }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-700">{field.label}:</label>
                    <input
                      type="number"
                      name={field.name}
                      value={field.value}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded"
                      placeholder={`Add the current value of your ${field.label.toLowerCase()}`}
                    />
                  </div>
                ))}
                <div className="flex justify-between font-bold">
                  <span>Total assets:</span>
                  <span>£{totalAssets.toFixed(2)}</span>
                </div>
                <button
                  type="button"
                  onClick={nextStep}
                  className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105"
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="w-full flex justify-center">
            <div className="w-1/3 px-4">
              <h2 className="text-lg font-semibold text-green-500 mb-4">2/3 Enter your deductible debts</h2>
              <form className="space-y-4">
                {[
                  { label: 'Arrears', name: 'arrears', value: data.arrears },
                  { label: 'Bills', name: 'bills', value: data.bills },
                  { label: 'Long-term debts', name: 'longTermDebts', value: data.longTermDebts }
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-gray-700">{field.label}:</label>
                    <input
                      type="number"
                      name={field.name}
                      value={field.value}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded"
                      placeholder={`Add the current value of your ${field.label.toLowerCase()}`}
                    />
                  </div>
                ))}
                <div className="flex justify-between font-bold">
                  <span>Total debts:</span>
                  <span>£{totalDebts.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="py-3 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="w-full flex justify-center">
            <div className="w-1/3 px-4">
              <h2 className="text-lg font-semibold text-green-500 mb-4">3/3 Your calculation</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Total assets:</span>
                  <span>£{totalAssets.toFixed(2)}</span>
                </li>
                <li className="flex justify-between">
                  <span>Minus total debts:</span>
                  <span>-£{totalDebts.toFixed(2)}</span>
                </li>
                <li className="flex justify-between font-bold">
                  <span>NET Zakatable assets:</span>
                  <span>£{netAssets.toFixed(2)}</span>
                </li>
                <li className="flex justify-between text-green-600 font-bold">
                  <span>Zakat amount due:</span>
                  <span>£{zakaat.toFixed(2)}</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="mt-6 w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105"
              >
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZakaatCalculator;
