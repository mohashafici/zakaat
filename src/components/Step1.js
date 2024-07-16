// // src/components/Step1.jsx
// import React from 'react';

// const Step1 = ({ nextStep, handleChange, data }) => {
//   const fields = [
//     { label: 'Gold', name: 'gold', value: data.gold },
//     { label: 'Silver', name: 'silver', value: data.silver },
//     { label: 'Cash', name: 'cash', value: data.cash },
//     { label: 'Receivables', name: 'receivables', value: data.receivables },
//     { label: 'Business stock', name: 'businessStock', value: data.businessStock },
//     { label: 'Shares', name: 'shares', value: data.shares },
//     { label: 'Pensions', name: 'pensions', value: data.pensions }
//   ];

//   const totalAssets = fields.reduce((acc, field) => acc + (parseFloat(field.value) || 0), 0);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6">1/3 Enter your Zakatable Assets</h1>
//         <form className="space-y-4">
//           {fields.map((field) => (
//             <div key={field.name}>
//               <label className="block text-gray-700">{field.label}:</label>
//               <input
//                 type="number"
//                 name={field.name}
//                 value={field.value}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border border-gray-300 rounded"
//                 placeholder={`Add the current value of your ${field.label.toLowerCase()}`}
//               />
//             </div>
//           ))}
//           <div className="flex justify-between font-bold">
//             <span>Total assets:</span>
//             <span>£{totalAssets.toFixed(2)}</span>
//           </div>
//           <button
//             type="button"
//             onClick={nextStep}
//             className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105"
//           >
//             Continue
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Step1;
