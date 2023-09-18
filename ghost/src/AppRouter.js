import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App'; 
import ResultPage from './Result'; 

const AppRouter = () => {
  return (

      <Routes>
        {/* Route for the main app */}
        <Route path="/" element={<App />} />

        {/* Route for the result page */}
        <Route path="/result" element={<ResultPage />} />

        {/* Add more routes as needed */}
      </Routes>

  );
};

export default AppRouter;
