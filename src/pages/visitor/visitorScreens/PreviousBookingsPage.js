import React, { useState, useEffect } from 'react';
import * as SC from './visitorMainPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';
import * as Functions from '../../../assest/helpers/api';

const PreviousBookingsPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const dir =
    i18n.dir?.() || (['ar', 'he'].includes(i18n.language) ? 'rtl' : 'ltr');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1) Read phone as a plain string (no JSON.parse)
        const clientPhone = JSON.parse(localStorage.getItem('client')) || '';
        const cachedClients = JSON.parse(localStorage.getItem('clients') || '[]');

        const currentClient = cachedClients.find(
          (c) => c?.phoneNumber === clientPhone
        );
        const currentClientId = currentClient?._id;

        console.log(currentClient)

        if (!currentClientId) {
          setAppointments([]);
          return;
        }

        // 3) Try cached appointments first
        const cachedAppointments = JSON.parse(
          localStorage.getItem('appointments') || '[]'
        );
        const cachedForClient = cachedAppointments.filter(
          (a) => a?.client === currentClientId
        );
        if (cachedForClient.length) setAppointments(cachedForClient);

        // 4) Fetch fresh, update cache, then filter by the SAME ID
        const appointmentData = await Functions.fetchAppointmentsData();
        localStorage.setItem('appointments', JSON.stringify(appointmentData));

        const freshForClient = appointmentData
          .filter((a) => a?.client === currentClientId)
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        // Only overwrite if we actually have fresh data (optional)
        setAppointments(freshForClient.length ? freshForClient : cachedForClient);
      } catch (e) {
        console.error(e);
        alert(t('Error') + ': ' + t('Failed to fetch data.'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t, i18n.language]); // or just []

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
          <FaCalendarAlt style={{ marginInlineEnd: 8 }} />
          {t('Previous Booking')}
        </SC.PageTitle>
      </SC.TopBar2>

      <SC.List>
        {appointments.map((b) => (
          <SC.ListItem key={b._id || b.id}>
            {t('Date')}: {b.date}
          </SC.ListItem>
        ))}
      </SC.List>
    </SC.Container2>
  );
};

export default PreviousBookingsPage;