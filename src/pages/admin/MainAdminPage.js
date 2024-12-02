import React from 'react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Clients from './Clients';
import Booking from './Booking';
import { SafeAreaViewS, SmallContainer,Goods, GoodsText } from './adminStyling';

const MainAdminPage = () => {
  return (
    <SafeAreaViewS>
      <FirstSection/>
      <SecondSection/>
      <SmallContainer>
        <Clients/>
        <Booking/>
        <Goods><GoodsText>Goods</GoodsText></Goods>
      </SmallContainer>

    </SafeAreaViewS>
  );
};



export default MainAdminPage;