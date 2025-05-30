import React, { useState } from 'react';
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
    client: '',
    stylist: '',
    price: 0,
    status: 'pending',
    notes: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  });




  const handleSaveClient = async () => {
  
    const newClient = {
      _id: `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: bookingDetails.client,
      phoneNumber: bookingDetails.phoneNumber,
      fileOpeningDate: new Date().toISOString(),
      address: 'a',
      birthday: '1/1/2000',
      naturalHairColor: 'a',
      hairType: 'a',
      problemsOrNotes: 'a',
    };
    try {
      // Update the client on the server
      const createdClient = await Functions.featchsaveClient(newClient);
      if (createdClient) {
  
          // Update local cache
          const cachedClients = JSON.parse(localStorage.getItem('clients')) || [];
          const updatedClients = cachedClients.map((client) =>
              client._id === newClient._id ? newClient : client
          );
          
          // If the client is new, add it to the cache
          if (!cachedClients.some(client => client._id === newClient._id)) {
              updatedClients.push(newClient);
          }
  
          // Save the updated cache
          localStorage.setItem('clients', JSON.stringify(updatedClients));
          return newClient;
  
      } else {
          alert(t('Error') + ': ' + t('Failed to update client. Please try again.'));
          return null;
      }
  } catch (error) {
      console.error('Error updating client:', error);
      alert(t('Error') + ': ' + t('An error occurred while updating the client.'));
  }
  };

  const handleSaveAppointment = async (selectedClient) => {

    try {
        // Prepare the new booking details
        const newBooking = {
            ...bookingDetails,
            client: selectedClient,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
  
        // Send to server
        const response = await Functions.featchCreateAppointment(newBooking);
  
        if (response) {
            // Update local cache
            const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
            cachedAppointments.push(newBooking);
            localStorage.setItem('appointments', JSON.stringify(cachedAppointments));
  
            alert(t('Success') + ': ' + t('Saved!'));
            navigate(-1); // Go back to the previous page
        } else {
            alert(t('Error') + ': ' + t('Failed to save the appointment.'));
        }
    } catch (error) {
        console.error('Error saving appointment:', error);
        alert(t('Error') + ': ' + t('An error occurred while saving the appointment.'));
    }
  };


  const handleSave = async () => {
    if (!bookingDetails.client || !bookingDetails.service || !bookingDetails.phoneNumber) {
      alert(t('Error') + ': ' + t('Please fill in all required fields.'));
      return;
    }
    const clients = JSON.parse(localStorage.getItem('clients')) || [];
    const foundClient = clients.find(client => client.phoneNumber === bookingDetails.phoneNumber);
    if(foundClient){
      handleSaveAppointment(foundClient);
    }
    else{
      const Client= await handleSaveClient();
      if(Client)
        handleSaveAppointment(Client);
    }
    
  }

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
          value={bookingDetails.client}
          onChange={(e) => setBookingDetails({ ...bookingDetails, client: e.target.value })}
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