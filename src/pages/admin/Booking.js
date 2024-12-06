import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Import a calendar icon
import { BookingContainer, Temp } from './adminStyling';
import { useTranslation } from 'react-i18next';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <BookingContainer>
      <FaCalendarAlt size={30} color="white" />
      <Temp>{t('booking')}</Temp>
    </BookingContainer>
  );
};

export default Booking;