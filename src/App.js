import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './pages/WelcomeLS/MainScreen'; 
import SignUpScreen from './pages/WelcomeLS/SignUpScreen';
import LogInScreen from './pages/WelcomeLS/LogInScreen';
import MainAdminPage from './pages/admin/MainAdminPage';
import ClientsList from './pages/behindMainAdminPage/ClientsList';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {


  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/login" element={<LogInScreen />} />
          <Route path="/admin" element={<MainAdminPage />} />
          <Route path="/clients-list" element={<ClientsList />} />

        </Routes>
      </Router>
    </I18nextProvider>

  );
};

export default App;

