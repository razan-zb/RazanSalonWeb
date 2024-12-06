import React from 'react';
import TopBar from './TopBar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Clients from './Clients';
import Booking from './Booking';
import { SafeAreaViewS, SmallContainer, Goods, GoodsText } from './adminStyling';
import { FaBox } from 'react-icons/fa'; // Import a box icon
import { useTranslation } from 'react-i18next';

const MainAdminPage = () => {
  const { t } = useTranslation();

  const handleExit = () => {
    console.log('Exit button clicked');
  };

  const handleSettings = () => {
    console.log('Settings button clicked');
    // Implement logic for opening settings
  };

  return (
    <>
      {/* TopBar */}
      <TopBar onExit={handleExit} onSettings={handleSettings} />

      {/* Main Content */}
      <SafeAreaViewS>
        <FirstSection />
        <SecondSection />
        <SmallContainer>
          <Clients />
          <Booking />
          <Goods>
            <FaBox size={30} color="white" />
            <GoodsText>{t('goods')}</GoodsText>
          </Goods>
        </SmallContainer>
      </SafeAreaViewS>
    </>
  );
};

export default MainAdminPage;