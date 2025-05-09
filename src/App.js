import React, { useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

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
import BookingCalendarVisitor from './pages/visitor/innerComponents/BookingCalendarVisitor';
import VisitorBooking from './pages/visitor/innerComponents/VisitorBooking';

// Import Helper Functions
import * as Functions from './assest/helpers/api';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetchData();
    loadLanguage();
  }, []);

  const fetchData = async () => {
    try {
        // Check for cached data
        const cachedClients = JSON.parse(localStorage.getItem('clients')) || [];
        const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const cachedUser = JSON.parse(localStorage.getItem('user')) || null;
        const cachedSuppliers = JSON.parse(localStorage.getItem('suppliers')) || [];
        const cachedGoods = JSON.parse(localStorage.getItem('goods')) || [];

        // If all caches are filled, stop loading immediately
        if (cachedClients.length && cachedAppointments.length && cachedUser && cachedSuppliers.length && cachedGoods.length) {
            setIsLoading(false);
        }

        // Fetch fresh data in the background
        const [freshClients, freshAppointments, freshUser, freshSuppliers, freshGoods] = await Promise.all([
            Functions.fetchClientsData(),
            Functions.fetchAppointmentsData(),
            Functions.fetchUserData('razanSalon@gmail.com'),
            Functions.fetchSuppliersData(),
            Functions.fetchGoodsData(),
        ]);

        // Update the caches
        localStorage.setItem('clients', JSON.stringify(freshClients));
        localStorage.setItem('appointments', JSON.stringify(freshAppointments));
        localStorage.setItem('user', JSON.stringify(freshUser));
        localStorage.setItem('suppliers', JSON.stringify(freshSuppliers));
        localStorage.setItem('goods', JSON.stringify(freshGoods));

        // Log the updated counts
        console.log('Clients:', freshClients.length);
        console.log('Appointments:', freshAppointments.length);
        console.log('User:', freshUser.name);
        console.log('Suppliers:', freshSuppliers.length);
        console.log('Goods:', freshGoods.length);

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        // Ensure loading stops if it was still active
        setIsLoading(false);
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
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ fontSize: '24px', color: '#227439' }}>
          {t('Loading...')}
        </div>
      </div>
    );
  }

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
          <Route path="/booking-calendar-visitor" element={<BookingCalendarVisitor />} />
          <Route path="/visitor-booking" element={<VisitorBooking/>} />

          
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </I18nextProvider>
  );
};

export default App;