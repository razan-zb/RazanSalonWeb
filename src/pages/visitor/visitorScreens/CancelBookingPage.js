import React from 'react';
import * as SC from './visitorMainPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTimesCircle } from 'react-icons/fa';

const CancelBookingPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const dir = i18n.dir?.() || (['ar', 'he'].includes(i18n.language) ? 'rtl' : 'ltr');

  // Temporary hard-coded appointments
  const bookings = [
    { id: 1, date: '2025-08-20' },
    { id: 2, date: '2025-08-15' },
    { id: 3, date: '2025-08-10' }
  ];

  const handleCancel = (id) => {
    alert(`${t('Booking')} ${id} ${t('has been cancelled')}`);
    // Later, replace this with actual API call to cancel
  };

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
        {bookings.map((b) => (
          <SC.ListItem1 key={b.id}>
            <SC.DateText>{t('Date')}: {b.date}</SC.DateText>
            <SC.CancelButton onClick={() => handleCancel(b.id)}>
              {t('Cancel')}
            </SC.CancelButton>
          </SC.ListItem1>
        ))}
      </SC.List>
    </SC.Container2>
  );
};

export default CancelBookingPage;