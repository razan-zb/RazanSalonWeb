import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Import Pages
import MainScreen from './pages/WelcomeLS/MainScreen';
import LoginScreen from './pages/WelcomeLS/LogInScreen';
import SignUpScreen from './pages/WelcomeLS/SignUpScreen';
import MainAdminPage from './pages/admin/MainAdminPage';
import ClientsList from './pages/behindMainAdminPage/ClientsList';
import OneClient from './pages/behindMainAdminPage/OneClient';
import NewOneClient from './pages/behindMainAdminPage/NewOneClient';
import BookingForOne from './pages/behindMainAdminPage/BookingForOne';
import BookingCalendar from './pages/behindMainAdminPage/BookingCalendar';
import FirstSectionList from './pages/behindMainAdminPage/FirstSectionList';
import FirstSectionOneBox from './pages/behindMainAdminPage/FirstSectionOneBox';
import GoodsAndSuppliers from './pages/behindMainAdminPage/GoodsAndSuppliers';
import EditSupplier from './pages/behindMainAdminPage/innerComponents/EditSupplier';
import EditGoods from './pages/behindMainAdminPage/innerComponents/EditGoods';
import GoodsModal from './pages/behindMainAdminPage/innerComponents/GoodsModal';
import SupplierModal from './pages/behindMainAdminPage/innerComponents/SupplierModal';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import VisitorsPage from './pages/visitor/VisitorsPage';
import RevenueStatistics from './pages/behindMainAdminPage/revenueStatistics/RevenueStatistics';
import HairstylistsScreen from './pages/visitor/HairstylistsScreen';
import ClientSettingsPage from './pages/visitor/ClientSettingsPage';
import Gallery from './pages/visitor/innerComponents/Gallery';

// Import Helper Functions
import * as Functions from './assest/helpers/api';

const App = () => {
  
  useEffect(() => {
    fetchData();
    loadLanguage();
  }, []);

  // Fetch Data (Simulating AsyncStorage in Web)
  const fetchData = async () => {
    try {
      const clients = await Functions.fetchClientsData();
      console.log('Clients:', clients.length);

      const appointments = await Functions.fetchAppointmentsData();
      console.log('Appointments:', appointments.length);

      const user = await Functions.fetchUserData('razanSalon@gmail.com');
      localStorage.setItem('user', JSON.stringify(user)); // Replace AsyncStorage with localStorage
      console.log('User:', user.name);

      const suppliers = await Functions.fetchSuppliersData();
      console.log('Suppliers:', suppliers.length);

      const goods = await Functions.fetchGoodsData();
      console.log('Goods:', goods.length);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Change Language Function (Replacing AsyncStorage with localStorage)
  const changeLanguage = async (lng) => {
    try {
      localStorage.setItem('language', lng);
      i18n.changeLanguage(lng);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  // Load Persisted Language
  const loadLanguage = () => {
    try {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    } catch (error) {
      console.error('Error loading language:', error);
    }
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          {/* Pass changeLanguage prop where needed */}
          <Route path="/" element={<MainScreen changeLanguage={changeLanguage} />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/admin" element={<MainAdminPage />} />
          <Route path="/clients-list" element={<ClientsList />} />
          <Route path="/one-client" element={<OneClient />} />
          <Route path="/new-one-client" element={<NewOneClient />} />
          <Route path="/booking-for-one" element={<BookingForOne />} />
          <Route path="/booking-calendar" element={<BookingCalendar />} />
          <Route path="/first-section-list" element={<FirstSectionList />} />
          <Route path="/first-section-one-box" element={<FirstSectionOneBox />} />
          <Route path="/goods-and-suppliers" element={<GoodsAndSuppliers />} />
          <Route path="/edit-supplier" element={<EditSupplier />} />
          <Route path="/edit-goods" element={<EditGoods />} />
          <Route path="/goods-modal" element={<GoodsModal />} />
          <Route path="/supplier-modal" element={<SupplierModal />} />
          <Route path="/admin-settings" element={<AdminSettingsPage />} />
          <Route path="/visitors" element={<VisitorsPage />} />
          <Route path="/revenue-statistics" element={<RevenueStatistics />} />
          <Route path="/hairstylists" element={<HairstylistsScreen />} />
          <Route path="/client-settings" element={<ClientSettingsPage />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;