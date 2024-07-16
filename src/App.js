// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ZakaatCalculator from './components/ZakaatCalculator';
import AboutZakaat from './pages/AboutZakaat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calculator" element={<ZakaatCalculator />} />
        <Route path="/about" element={<AboutZakaat />} />
      </Routes>
    </Router>
  );
};

export default App;
