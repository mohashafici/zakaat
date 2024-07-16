// // src/components/Step3.jsx
// import React from 'react';

// const Step3 = ({ data, prevStep }) => {
//   const {
//     gold,
//     silver,
//     cash,
//     receivables,
//     businessStock,
//     shares,
//     pensions,
//     arrears,
//     bills,
//     longTermDebts
//   } = data;

//   const totalAssets = [gold, silver, cash, receivables, businessStock, shares, pensions].reduce((acc, item) => acc + parseFloat(item || 0), 0);
//   const totalDebts = [arrears, bills, longTermDebts].reduce((acc, item) => acc + parseFloat(item || 0), 0);
//   const netAssets = totalAssets - totalDebts;
//   const zakaat = netAssets * 0.025;

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6">3/3 Your calculation</h1>
//         <ul className="space-y-2">
//           <li className="flex justify-between">
//             <span>Total assets:</span>
//             <span>£{totalAssets.toFixed(2)}</span>
//           </li>
//           <li className="flex justify-between">
//             <span>Minus total debts:</span>
//             <span>-£{totalDebts.toFixed(2)}</span>
//           </li>
//           <li className="flex justify-between font-bold">
//             <span>NET Zakatable assets:</span>
//             <span>£{netAssets.toFixed(2)}</span>
//           </li>
//           <li className="flex justify-between text-green-600 font-bold">
//             <span>Zakat amount due:</span>
//             <span>£{zakaat.toFixed(2)}</span>
//           </li>
//         </ul>
//         <button
//           type="button"
//           onClick={prevStep}
//           className="mt-6 w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105"
//         >
//           Start over
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Step3;
