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
  const [loading, setLoading] = useState(true);

  const [bookingDetails, setBookingDetails] = useState({
    date: date,
    time: time,
    name: '',
    phoneNumber: '',
    service: '',
    client: '',
    stylist: '',
    price: 0,
    status: 'pending',
    notes: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedClient = localStorage.getItem('client');
        console.log(storedClient)
        const clientPhone = storedClient ? JSON.parse(storedClient) : '';
        const cachedClients = JSON.parse(localStorage.getItem('clients') || '[]');

        const currentClient = cachedClients.find(
          (c) => c?.phoneNumber === clientPhone
        );

        if (currentClient) {
          setBookingDetails((prev) => ({
            ...prev,
            name: currentClient.name || '',
            phoneNumber: currentClient.phoneNumber || '',
            client: currentClient._id || '',
          }));
        }
      } catch (e) {
        console.error(e);
        alert(t('Error') + ': ' + t('Failed to fetch data.'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  const handleSaveClient = async () => {
    const newClient = {
      _id: `client_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      name: bookingDetails.name,
      phoneNumber: bookingDetails.phoneNumber,
      fileOpeningDate: new Date().toISOString(),
      address: '',
      birthday: '',
      naturalHairColor: '',
      hairType: '',
      problemsOrNotes: '',
    };

    try {
      const createdClient = await Functions.featchsaveClient(newClient);

      if (createdClient) {
        const cachedClients = JSON.parse(localStorage.getItem('clients') || '[]');
        const updatedClients = [...cachedClients, newClient];
        localStorage.setItem('clients', JSON.stringify(updatedClients));
        return newClient;
      } else {
        alert(t('Error') + ': ' + t('Failed to save client.'));
        return null;
      }
    } catch (error) {
      console.error('Error saving client:', error);
      alert(t('Error') + ': ' + t('An error occurred while saving the client.'));
      return null;
    }
  };

  const handleSaveAppointment = async (clientId) => {
    try {
      const newBooking = {
        ...bookingDetails,
        client: clientId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const response = await Functions.featchCreateAppointment(newBooking);

      if (response) {
        const cachedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        cachedAppointments.push(newBooking);
        localStorage.setItem('appointments', JSON.stringify(cachedAppointments));

        alert(t('Success') + ': ' + t('Saved!'));
        navigate(-1);
      } else {
        alert(t('Error') + ': ' + t('Failed to save the appointment.'));
      }
    } catch (error) {
      console.error('Error saving appointment:', error);
      alert(t('Error') + ': ' + t('An error occurred while saving the appointment.'));
    }
  };

  const handleSave = async () => {
    if (!bookingDetails.name || !bookingDetails.phoneNumber || !bookingDetails.service) {
      alert(t('Error') + ': ' + t('Please fill in all required fields.'));
      return;
    }

    const clients = JSON.parse(localStorage.getItem('clients') || '[]');
    const foundClient = clients.find(
      (client) => client.phoneNumber === bookingDetails.phoneNumber
    );

    if (foundClient) {
      await handleSaveAppointment(foundClient._id);
    } else {
      const createdClient = await handleSaveClient();
      if (createdClient) {
        await handleSaveAppointment(createdClient._id);
      }
    }
  };

  if (loading) return <p>{t('Loading...')}</p>;

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
          value={bookingDetails.name}
          onChange={(e) =>
            setBookingDetails({ ...bookingDetails, name: e.target.value })
          }
          placeholder={t('Enter your name')}
        />

        <SC.Label2>{t('Phone Number')}</SC.Label2>
        <SC.Input2
          type="text"
          value={bookingDetails.phoneNumber}
          onChange={(e) =>
            setBookingDetails({ ...bookingDetails, phoneNumber: e.target.value })
          }
          placeholder={t('Enter your phone number')}
        />

        <SC.Label2>{t('Service')}</SC.Label2>
        <SC.Input2
          type="text"
          value={bookingDetails.service}
          onChange={(e) =>
            setBookingDetails({ ...bookingDetails, service: e.target.value })
          }
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