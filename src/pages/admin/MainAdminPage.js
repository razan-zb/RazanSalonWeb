import React from 'react';
import TopBar from './TopBar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Clients from './Clients';
import Booking from './Booking';
import { SafeAreaViewS, SmallContainer, Goods, GoodsText,Con,SmallContainer2 } from './adminStyling';
import { FaBox } from 'react-icons/fa'; // Import a box icon
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Alert } from "react-native";

const MainAdminPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleExit = () => {
    Alert.alert(
      "Exit Confirmation",
      "Are you sure you want to exit the application?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onClick: () => navigate('/')}
      ]
    );
  };
  const handleSettings = () => {
    navigate('/admin-settings');
  };

  return (
    <Con>
      {/* TopBar */}
      <TopBar onExit={handleExit} onSettings={handleSettings} />

      {/* Main Content */}
      <SafeAreaViewS>
        <FirstSection />
        <SecondSection />
        <SmallContainer>
          <SmallContainer2>
             <Clients/>
             <Booking/>
          </SmallContainer2>
          <Goods onClick={() =>navigate('/goods-and-suppliers')}>
            <FaBox size={30} color="BF9F00" />
            <GoodsText>{t('goods')}</GoodsText>
          </Goods>
        </SmallContainer>
      </SafeAreaViewS>
    </Con>
  );
};

export default MainAdminPage;