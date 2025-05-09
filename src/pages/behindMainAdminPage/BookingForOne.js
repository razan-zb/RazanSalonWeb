import React, { useState, useEffect } from 'react';
import * as SC from './behindAdminPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate,useLocation } from 'react-router-dom';
import * as Functions from '../../assest/helpers/api';
import { format } from 'date-fns';
import { FaArrowLeft } from 'react-icons/fa'; 

const BookingForOne = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time } = location.state || {}; 
  const [selectedClient, setSelectedClient] = useState('');
  const [dropdownItems, setDropdownItems] = useState([]);

  const [bookingDetails, setBookingDetails] = useState({
    date: date,
    time: time,
    service: '',
    client: '',
    stylist: '',
    price:0,
    status: 'pending',
    notes: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  useEffect(() => {
    const fetchClientsAndAppointments = async () => {
        try {
            // Load clients from cache
            const cachedClients = JSON.parse(localStorage.getItem('clients')) || [];
            if (cachedClients.length > 0) {
                setDropdownItems(cachedClients.map(client => ({
                    label: client.name,
                    value: client._id,
                })));
            }

            // Load appointments from cache
            const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
            if (cachedAppointments.length > 0) {
                const temp = cachedAppointments.filter(
                    (appointment) =>
                        format(new Date(appointment.date), 'yyyy-MM-dd') === format(new Date(date), 'yyyy-MM-dd')
                );
                const appointmentForTime = temp.find((appointment) => appointment.time === time);

                if (appointmentForTime) {
                    setBookingDetails(prev => ({
                        ...prev,
                        service: appointmentForTime.service || '',
                    }));
                    setSelectedClient(appointmentForTime.client);
                }
            }

            // Fetch fresh clients data
            const freshClients = await Functions.fetchClientsData();
            if (freshClients) {
                setDropdownItems(freshClients.map(client => ({
                    label: client.name,
                    value: client._id,
                })));
                localStorage.setItem('clients', JSON.stringify(freshClients));
            }

            // Fetch fresh appointments data
            const freshAppointments = await Functions.fetchAppointmentsData();
            if (freshAppointments) {
                const temp = freshAppointments.filter(
                    (appointment) =>
                        format(new Date(appointment.date), 'yyyy-MM-dd') === format(new Date(date), 'yyyy-MM-dd')
                );
                const appointmentForTime = temp.find((appointment) => appointment.time === time);

                if (appointmentForTime) {
                    setBookingDetails(prev => ({
                        ...prev,
                        service: appointmentForTime.service || '',
                    }));
                    setSelectedClient(appointmentForTime.client);
                }
                
                localStorage.setItem('appointments', JSON.stringify(freshAppointments));
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            alert('Error: Failed to fetch data. Please try again.');
        }
    };

    fetchClientsAndAppointments();
}, [date, time]);

const handleSave = async () => {
  if (!selectedClient || !bookingDetails.service) {
      alert(t('Error') + ': ' + t('Please select a client and enter a service.'));
      return;
  }

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
  const handleBack = () => {
    navigate(-1)
  };


  return (
    <SC.Container>
      {/* Back Button */}
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#227439"
          onClick={handleBack}
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>

      {/* Page Title */}
      <SC.Title2>{t('Booking Details')}</SC.Title2>

      {/* Booking Details */}
      <SC.DetailContainer>
        <SC.Label2>{t('Client Name')}</SC.Label2>
        <SC.Select value={selectedClient} onChange={(e) => setSelectedClient(e.target.value)}>
          <option value="">{t('Select a client')}</option>
          {dropdownItems.map(client => (
            <option key={client.value} value={client.value}>
              {client.label}
            </option>
          ))}
        </SC.Select>

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

export default BookingForOne;