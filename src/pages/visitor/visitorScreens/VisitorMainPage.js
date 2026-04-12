import React from 'react';
import * as SC from './visitorMainPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCalendarPlus, FaSearch, FaTimesCircle } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const VisitorMainPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [clientName, setClientName] = useState('');
  // Optional: adapt layout direction to current language
  const dir = i18n.dir?.() || (['ar', 'he'].includes(i18n.language) ? 'rtl' : 'ltr');

  useEffect(() => {
    try {
      //getting the client user
      const storedClient = localStorage.getItem('client');
      const clientPhone = storedClient ? JSON.parse(storedClient) : '';
  
      const cachedClients = JSON.parse(localStorage.getItem('clients') || '[]');
  
      const currentClient = cachedClients.find(
        (c) => c?.phoneNumber === clientPhone
      );
 
      if (currentClient) {
        setClientName(currentClient.name);
      }
    } catch (error) {
      console.error('Error loading client name:', error);
    }
  }, []);

  return (
    <SC.Container dir={dir}>
      {/* Back */}
      <SC.TopBar>
        <FaArrowLeft
          size={28}
          color="#227439"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer' }}
          aria-label={t('Back')}
          title={t('Back')}
        />
      </SC.TopBar>

      {/* Title */}
      <SC.Title>{t('Welcome to Razan Salon')}</SC.Title>
      {clientName && (
        <SC.SubTitle>
          {t('Hello')}, {clientName} 👋
        </SC.SubTitle>
      )}
      <SC.SubTitle>{t('How can we help you today?')}</SC.SubTitle>

      {/* Actions */}
      <SC.ButtonGrid>
        <SC.ActionButton onClick={() => navigate('/booking-calendar-visitor')}>
          <FaCalendarPlus size={30} />
          <SC.ButtonText>{t('New Booking')}</SC.ButtonText>
          <SC.ButtonHint>{t('Choose service, stylist & time')}</SC.ButtonHint>
        </SC.ActionButton>

        <SC.ActionButton onClick={() => navigate('/previous-booking')}>
          <FaSearch size={30} />
          <SC.ButtonText>{t('Previous Booking')}</SC.ButtonText>
          <SC.ButtonHint>{t('View your last reservations')}</SC.ButtonHint>
        </SC.ActionButton>

        <SC.ActionButton onClick={() => navigate('/cancel-booking')}>
          <FaTimesCircle size={30} />
          <SC.ButtonText>{t('Cancel Booking')}</SC.ButtonText>
          <SC.ButtonHint>{t('Cancel with phone & code')}</SC.ButtonHint>
        </SC.ActionButton>
      </SC.ButtonGrid>

      {/* Footer (optional info / policies link) */}
      <SC.FooterNote>
        {t('Need help?')} <SC.FooterLink onClick={() => navigate('/contact')}>{t('Contact us')}</SC.FooterLink>
      </SC.FooterNote>
    </SC.Container>
  );
};

export default VisitorMainPage;