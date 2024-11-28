import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './pages/WelcomeLS/MainScreen'; 
import SignUpScreen from './pages/WelcomeLS/SignUpScreen';
import LogInScreen from './pages/WelcomeLS/LogInScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LogInScreen />} />
      </Routes>
    </Router>
  );
};

export default App;

