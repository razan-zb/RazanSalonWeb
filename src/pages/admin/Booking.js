import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Import a calendar icon
import { BookingContainer, Temp } from './adminStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <BookingContainer onClick={() => navigate('/booking-calendar')} >
      <FaCalendarAlt size={30} color="#227439" />
      <Temp>{t('booking')}</Temp>
    </BookingContainer>
  );
};

export default Booking;