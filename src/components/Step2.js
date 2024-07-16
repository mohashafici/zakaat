// // src/components/Step2.jsx
// import React from 'react';

// const Step2 = ({ nextStep, prevStep, handleChange, data }) => {
//   const fields = [
//     { label: 'Arrears', name: 'arrears', value: data.arrears },
//     { label: 'Bills', name: 'bills', value: data.bills },
//     { label: 'Long-term debts', name: 'longTermDebts', value: data.longTermDebts }
//   ];

//   const totalDebts = fields.reduce((acc, field) => acc + (parseFloat(field.value) || 0), 0);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6">2/3 Enter your deductible debts</h1>
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
//             <span>Total debts:</span>
//             <span>£{totalDebts.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between">
//             <button
//               type="button"
//               onClick={prevStep}
//               className="py-3 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition transform hover:scale-105"
//             >
//               Back
//             </button>
//             <button
//               type="button"
//               onClick={nextStep}
//               className="py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105"
//             >
//               Finish
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Step2;
