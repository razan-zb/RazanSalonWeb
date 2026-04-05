import React, { useEffect, useState } from 'react';
import * as SC from './visitorMainPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTimesCircle, FaSpinner } from 'react-icons/fa';
import * as Functions from '../../../assest/helpers/api';
import { format } from 'date-fns';

const CancelBookingPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dir =
    i18n.dir?.() || (['ar', 'he'].includes(i18n.language) ? 'rtl' : 'ltr');

  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [cancelLoadingId, setCancelLoadingId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientPhone = JSON.parse(localStorage.getItem('client')) || '';
        const cachedClients = JSON.parse(localStorage.getItem('clients') || '[]');

        const currentClient = cachedClients.find(
          (c) => c?.phoneNumber === clientPhone
        );
        const currentClientId = currentClient?._id;

        if (!currentClientId) {
          setAppointments([]);
          return;
        }

        const cachedAppointments = JSON.parse(
          localStorage.getItem('appointments') || '[]'
        );

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const cachedForClient = cachedAppointments
          .filter(
            (a) =>
              a?.client === currentClientId &&
              a?.status === 'pending' &&
              new Date(a.date) >= today
          )
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        if (cachedForClient.length > 0) {
          setAppointments(cachedForClient);
        }

        const appointmentData = await Functions.fetchAppointmentsData();
        localStorage.setItem('appointments', JSON.stringify(appointmentData));

        const freshForClient = appointmentData
          .filter(
            (a) =>
              a?.client === currentClientId &&
              a?.status === 'pending' &&
              new Date(a.date) >= today
          )
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        setAppointments(freshForClient);
      } catch (e) {
        console.error(e);
        alert(t('Error') + ': ' + t('Failed to fetch data.'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  const handleCancel = async (appointment) => {
    const confirmCancel = window.confirm(
      t('Are you sure you want to cancel this booking?')
    );
    if (!confirmCancel) return;
  
    try {
      setCancelLoadingId(appointment._id);
  
      const cancelledBooking = {
        _id: appointment._id,
        date: appointment.date,
        time: appointment.time,
        service: appointment.service || '',
        client: appointment.client || '',
        stylist: appointment.stylist || 'canceled',
        price: appointment.price || 0,
        status: 'canceled',
        notes: appointment.notes || 'canceled',
        createdAt: appointment.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
  
      const response = await Functions.fetchUpdateAppointment(cancelledBooking);
    
      if (response) {
        const cachedAppointments = JSON.parse(
          localStorage.getItem('appointments') || '[]'
        );
  
        const updatedAppointments = cachedAppointments.map((a) =>
          a._id === appointment._id ? cancelledBooking : a
        );
  
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  
        setAppointments((prev) => prev.filter((a) => a._id !== appointment._id));
  
        alert(t('Booking has been cancelled'));
      } else {
        alert(t('Failed to cancel booking'));
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
      alert(t('An error occurred while cancelling the booking.'));
    } finally {
      setCancelLoadingId(null);
    }
  };

  if (loading) return <p>{t('Loading...')}</p>;

  return (
    <SC.Container2 dir={dir}>
      <SC.TopBar2>
        <FaArrowLeft
          size={22}
          color="#227439"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer' }}
        />
        <SC.PageTitle>
          <FaTimesCircle style={{ marginInlineEnd: 8, color: '#b91c1c' }} />
          {t('Cancel Booking')}
        </SC.PageTitle>
      </SC.TopBar2>

      <SC.List>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <SC.ListItem1 key={appointment._id}>
              <SC.DateText>
                {t('Date')}: {format(new Date(appointment.date), 'yyyy-MM-dd')}
              </SC.DateText>

              <SC.DateText>
                {t('Time')}: {appointment.time}
              </SC.DateText>

              <SC.CancelButton
                onClick={() => handleCancel(appointment)}
                disabled={cancelLoadingId === appointment._id}
              >
                {cancelLoadingId === appointment._id ? (
                  <>
                    <FaSpinner className="spin" style={{ marginRight: '8px' }} />
                    {t('Cancelling...')}
                  </>
                ) : (
                  t('Cancel')
                )}
              </SC.CancelButton>
            </SC.ListItem1>
          ))
        ) : (
          <SC.DateText>{t('No future bookings found')}</SC.DateText>
        )}
      </SC.List>
    </SC.Container2>
  );
};

export default CancelBookingPage;