// src/context/ZakaatContext.js
import React, { createContext, useState } from 'react';

export const ZakaatContext = createContext();

export const ZakaatProvider = ({ children }) => {
  const [data, setData] = useState({
    gold: '',
    silver: '',
    cash: '',
    receivables: '',
    businessStock: '',
    shares: '',
    pensions: '',
    arrears: '',
    bills: '',
    longTermDebts: ''
  });

  return (
    <ZakaatContext.Provider value={{ data, setData }}>
      {children}
    </ZakaatContext.Provider>
  );
};
