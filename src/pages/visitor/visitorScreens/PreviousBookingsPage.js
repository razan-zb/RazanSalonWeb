import React from 'react';
import * as SC from './visitorMainPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarAlt } from 'react-icons/fa';

const PreviousBookingsPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const dir = i18n.dir?.() || (['ar', 'he'].includes(i18n.language) ? 'rtl' : 'ltr');

  // Temporary hard-coded appointments
  const bookings = [
    { id: 1, date: '2025-08-20' },
    { id: 2, date: '2025-08-15' },
    { id: 3, date: '2025-08-10' }
  ];

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
        {bookings.map((b) => (
          <SC.ListItem key={b.id}>
            {t('Date')}: {b.date}
          </SC.ListItem>
        ))}
      </SC.List>
    </SC.Container2>
  );
};

export default PreviousBookingsPage;