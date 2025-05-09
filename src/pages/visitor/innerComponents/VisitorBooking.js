import React, { useState, useEffect } from 'react';
import * as SC from './styleForBookingCalendar';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Functions from '../../../assest/helpers/api';
import { FaArrowLeft } from 'react-icons/fa'; 

const VisitorBooking = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time } = location.state || {};

  const [bookingDetails, setBookingDetails] = useState({
    date: date,
    time: time,
    service: '',
    clientName: '',
    phoneNumber: '',
    stylist: '',
    price: 0,
    status: 'pending',
    notes: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const handleSave = async () => {
    if (!bookingDetails.clientName || !bookingDetails.service || !bookingDetails.phoneNumber) {
      alert(t('Error') + ': ' + t('Please fill in all required fields.'));
      return;
    }

    try {
      const response = await Functions.featchCreateAppointment(bookingDetails);
      
      if (response) {
          // Update the local cache
          const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
          localStorage.setItem('appointments', JSON.stringify([...cachedAppointments, bookingDetails]));
  
          alert(t('Success') + ': ' + t('Saved!'));
          navigate(-1); // Navigate back
        } else {
          alert(t('Error') + ': ' + t('Failed to save the appointment.'));
        }
  } catch (error) {
      console.error('Error saving appointment:', error);
      alert(t('Error') + ': ' + t('An error occurred while saving the appointment.'));
  }
  };

  return (
    <SC.Container>
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#227439"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer', marginBottom: '10px' }}
        />
      </SC.Con>

      <SC.Title2>{t('Booking Details')}</SC.Title2>

      <SC.DetailContainer>
        <SC.Label2>{t('Client Name')}</SC.Label2>
        <SC.Input2
          type="text"
          value={bookingDetails.clientName}
          onChange={(e) => setBookingDetails({ ...bookingDetails, clientName: e.target.value })}
          placeholder={t('Enter your name')}
        />

        <SC.Label2>{t('Phone Number')}</SC.Label2>
        <SC.Input2
          type="text"
          value={bookingDetails.phoneNumber}
          onChange={(e) => setBookingDetails({ ...bookingDetails, phoneNumber: e.target.value })}
          placeholder={t('Enter your phone number')}
        />

        <SC.Label2>{t('Service')}</SC.Label2>
        <SC.Input2
          type="text"
          value={bookingDetails.service}
          onChange={(e) => setBookingDetails({ ...bookingDetails, service: e.target.value })}
          placeholder={t('Enter service')}
        />

        <SC.Label2>{t('Date')}</SC.Label2>
        <SC.Value2>{date}</SC.Value2>

        <SC.Label2>{t('Time')}</SC.Label2>
        <SC.Value2>{time}</SC.Value2>

        <SC.ButtonContainer>
          <SC.Button onClick={handleSave}>{t('Save')}</SC.Button>
        </SC.ButtonContainer>
      </SC.DetailContainer>
    </SC.Container>
  );
};

export default VisitorBooking;