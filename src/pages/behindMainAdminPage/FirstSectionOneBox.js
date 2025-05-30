import React, { useState, useEffect } from 'react';
import * as SC from './behindAdminPageStyling';
import { useTranslation } from 'react-i18next';
import { IoChevronBack } from 'react-icons/io5';
import { format } from 'date-fns';
import * as Functions from '../../assest/helpers/api';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const FirstSectionOneBox = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [status, setStatus] = useState('pending');
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');
  const [service, setService] = useState('');
  const [time, setTime] = useState('');
  const [clients, setClients] = useState([]);
  const location = useLocation();
  const { appointment } = location.state || {};
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            // Load cached clients first
            const cachedClients = JSON.parse(localStorage.getItem('clients')) || [];

            if (cachedClients.length > 0) {
                setClients(cachedClients);
            }

            // Fetch fresh clients data
            const clientsData = await Functions.fetchClientsData();
            setClients(clientsData);

            // Update the cache
            localStorage.setItem('clients', JSON.stringify(clientsData));

            // Set appointment details
            setTime(appointment.time);
            setService(appointment.service);
            setNotes(appointment.notes);
            setPrice(appointment.price);
            setStatus(appointment.status);

        } catch (error) {
            console.error('Error fetching data:', error);
            alert(t('Error') + ': ' + t('Failed to fetch data.'));
        }
    };

    fetchData();
}, []);

const handleDelete = async () => {
  const confirmDelete = window.confirm(t('Are you sure you want to delete this appointment?'));
  if (!confirmDelete) return;

  try {
    const response = await Functions.fetchDeleteAppointment(appointment._id);
    if (response) {
      // עדכון הזיכרון המקומי
      const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      const updatedAppointments = cachedAppointments.filter(app => app._id !== appointment._id);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

      alert(t('Appointment has been deleted.'));
      navigate(-1); // חזרה לעמוד הקודם
    } else {
      alert(t('Failed to delete appointment.'));
    }
  } catch (error) {
    console.error('Error deleting appointment:', error);
    alert(t('An error occurred while deleting the appointment.'));
  }
};

  const handleSave = async () => {
    if (!status || !price) {
      alert(t('Please fill in all required fields.'));
      return;
    }
  
  
    const updatedAppointment = {
      ...appointment,
      status,
      price: Number(price),
      notes,
      time,
      service,
      updatedAt: new Date().toISOString(),
    };

   
    try {
      const response = await Functions.fetchUpdateAppointment(updatedAppointment);
      
      if (response) {
          // Update the cached appointments
          const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
          
          // Find and update the specific appointment in the cache
          const updatedAppointments = cachedAppointments.map((app) => 
              app._id === updatedAppointment._id ? updatedAppointment : app
          );

          // Save the updated appointments back to cache
          localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

          alert(t('Appointment details have been updated.'));
          navigate(-1); // Navigate back
      } else {
          alert(t('Failed to update appointment. Please try again.'));
      }
    } catch (error) {
        console.error('Error updating appointment:', error);
        alert(t('An error occurred while updating the appointment.'));
    }
  };

  const getClientName = (clientId) => {
    const client = clients.find((client) => client._id === clientId);
    return client ? client.name : 'Unknown';
  };

  if (!appointment) {
    return <p>Loading...</p>;
  }

  return (
    <SC.Container>
      <div style={{ overflow: 'auto', paddingBottom: '20px' }}>
        {/* Back Button */}
        <SC.BackButton onClick={() => navigate(-1)}>
          <IoChevronBack size={30} color="#227439" />
        </SC.BackButton>

        {/* Title */}
        <SC.Title>{t('Booking Details')}</SC.Title>

        {/* Client Details (Non-editable fields) */}
        <SC.DetailContainer2>
          <SC.Label>{t('Client Name')}</SC.Label>
          <SC.Value>{getClientName(appointment?.client)}</SC.Value>
          
          <SC.Label>{t('Date')}</SC.Label>
          <SC.Value>{format(new Date(appointment.date), 'yyyy-MM-dd')}</SC.Value>

          <SC.Label>{t('Time')}</SC.Label>
          <SC.Input
            type="text"
            value={appointment.time}
            onChange={(e) => setTime(e.target.value)}
            placeholder={t('Enter time')}
          />

          <SC.Label>{t('Service')}</SC.Label>
          <SC.Input
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder={t('Enter service')}
          />
        </SC.DetailContainer2>

        {/* Editable Fields */}
        <SC.DetailContainer>
          <SC.Label>{t('Price')}</SC.Label>
          <SC.Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={t('Enter price')}
          />

          <SC.Label>{t('Notes')}</SC.Label>
          <SC.TextArea2
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={t('Enter notes')}
            rows={4}
          />

          <SC.Label>{t('Status')}</SC.Label>
          <SC.SelectContainer>
            <SC.StyledPicker
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="done">{t('Done')}</option>
              <option value="canceled">{t('Canceled')}</option>
              <option value="pending">{t('Pending')}</option>
            </SC.StyledPicker>
          </SC.SelectContainer>
        </SC.DetailContainer>

        {/* Save Button */}
        <SC.Button4 onClick={handleSave}>
          <SC.ButtonText>{t('Save')}</SC.ButtonText>
        </SC.Button4>
        <SC.Button4 onClick={handleDelete} style={{ backgroundColor: '#e74c3c', marginTop: '10px' }}>
          <SC.ButtonText>{t('Delete Appointment')}</SC.ButtonText>
        </SC.Button4>
      </div>
    </SC.Container>
  );
};

export default FirstSectionOneBox;