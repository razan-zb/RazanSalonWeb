import React, { useState, useEffect } from 'react';
import * as SC from './behindAdminPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import * as Functions from '../../assest/helpers/api';
import { format } from 'date-fns';
import { FaArrowLeft } from 'react-icons/fa';
import { FaSpinner } from 'react-icons/fa';

const BookingForOne = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time } = location.state || {};
  const [selectedClient, setSelectedClient] = useState('');
  const [dropdownItems, setDropdownItems] = useState([]);
  const [saveLoading, setSaveLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

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

  useEffect(() => {
    const fetchClientsAndAppointments = async () => {
      try {
        const cachedClients = JSON.parse(localStorage.getItem('clients')) || [];
        if (cachedClients.length > 0) {
          setDropdownItems(
            cachedClients.map((client) => ({
              label: client.name,
              value: client._id,
            }))
          );
        }

        const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        if (cachedAppointments.length > 0) {
          const temp = cachedAppointments.filter(
            (appointment) =>
              format(new Date(appointment.date), 'yyyy-MM-dd') ===
              format(new Date(date), 'yyyy-MM-dd')
          );
          const appointmentForTime = temp.find((appointment) => appointment.time === time);

          if (appointmentForTime) {
            setBookingDetails((prev) => ({
              ...prev,
              service: appointmentForTime.service || '',
              _id: appointmentForTime._id || '',
            }));
            setSelectedClient(appointmentForTime.client);
          }
        }

        const freshClients = await Functions.fetchClientsData();
        if (freshClients) {
          setDropdownItems(
            freshClients.map((client) => ({
              label: client.name,
              value: client._id,
            }))
          );
          localStorage.setItem('clients', JSON.stringify(freshClients));
        }

        const freshAppointments = await Functions.fetchAppointmentsData();
        if (freshAppointments) {
          const temp = freshAppointments.filter(
            (appointment) =>
              format(new Date(appointment.date), 'yyyy-MM-dd') ===
              format(new Date(date), 'yyyy-MM-dd')
          );
          const appointmentForTime = temp.find((appointment) => appointment.time === time);

          if (appointmentForTime) {
            setBookingDetails((prev) => ({
              ...prev,
              service: appointmentForTime.service || '',
              _id: appointmentForTime._id || '',
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

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      t('Are you sure you want to delete this appointment?')
    );
    if (!confirmDelete) return;

    try {
      setDeleteLoading(true);

      const response = await Functions.fetchDeleteAppointment(bookingDetails._id);
      if (response) {
        const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const updatedAppointments = cachedAppointments.filter(
          (app) => app._id !== bookingDetails._id
        );
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

        alert(t('Appointment has been deleted.'));
        navigate(-1);
      } else {
        alert(t('Failed to delete appointment.'));
      }
    } catch (error) {
      console.error('Error deleting appointment:', error);
      alert(t('An error occurred while deleting the appointment.'));
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedClient || !bookingDetails.service) {
      alert(t('Error') + ': ' + t('Please select a client and enter a service.'));
      return;
    }

    try {
      setSaveLoading(true);

      const newBooking = {
        ...bookingDetails,
        client: selectedClient,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      const response = await Functions.featchCreateAppointment(newBooking);
      if (response) {
        const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
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
    } finally {
      setSaveLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <SC.Container>
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#227439"
          onClick={handleBack}
          style={{ cursor: 'pointer', marginBottom: '10px' }}
        />
      </SC.Con>

      <SC.Title2>{t('Booking Details')}</SC.Title2>

      <SC.DetailContainer>
        <SC.Label2>{t('Client Name')}</SC.Label2>
        <SC.Select
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          disabled={saveLoading || deleteLoading}
        >
          <option value="">{t('Select a client')}</option>
          {dropdownItems.map((client) => (
            <option key={client.value} value={client.value}>
              {client.label}
            </option>
          ))}
        </SC.Select>

        <SC.Label2>{t('Service')}</SC.Label2>
        <SC.Input2
          type="text"
          value={bookingDetails.service}
          onChange={(e) =>
            setBookingDetails({ ...bookingDetails, service: e.target.value })
          }
          placeholder={t('Enter service')}
          disabled={saveLoading || deleteLoading}
        />

        <SC.Label2>{t('Date')}</SC.Label2>
        <SC.Value2>{date}</SC.Value2>

        <SC.Label2>{t('Time')}</SC.Label2>
        <SC.Value2>{time}</SC.Value2>

        <SC.ButtonContainer>
          <SC.Button onClick={handleSave} disabled={saveLoading || deleteLoading}>
            {saveLoading ? (
              <>
                <FaSpinner className="spin" style={{ marginRight: '8px' }} />
                {t('Saving...')}
              </>
            ) : (
              t('Save')
            )}
          </SC.Button>
        </SC.ButtonContainer>

        <SC.ButtonContainer
          onClick={!deleteLoading && !saveLoading ? handleDelete : undefined}
          style={{ backgroundColor: '#e74c3c', marginTop: '10px' }}
        >
          <SC.Button disabled={deleteLoading || saveLoading}>
            {deleteLoading ? (
              <>
                <FaSpinner className="spin" style={{ marginRight: '8px' }} />
                {t('Deleting...')}
              </>
            ) : (
              t('Delete Appointment')
            )}
          </SC.Button>
        </SC.ButtonContainer>
      </SC.DetailContainer>
    </SC.Container>
  );
};

export default BookingForOne;