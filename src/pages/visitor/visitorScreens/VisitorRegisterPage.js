import React, { useState } from 'react';
import * as SC from './visitorRegisterPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaCog } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const VisitorRegisterPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dir = i18n.dir?.() || (['ar', 'he'].includes(i18n.language) ? 'rtl' : 'ltr');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const clean = phone.replace(/[^\d+]/g, '');
    if (!clean || clean.length < 7) {
      setError(t('Enter a valid phone number'));
      return;
    }
    console.log(clean);
    localStorage.setItem('client', JSON.stringify(clean)); // save

        navigate('/mainVisitorScreen'); // go to main visitor page
  };

  return (
    <SC.Screen dir={dir}>
      {/* Brand / Top bar */}
      <SC.BrandBar>
              <FaArrowLeft
            size={26}
            color="#fff"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(-1)} // go back
        />
      </SC.BrandBar>

      {/* Centered content */}
      <SC.CenterWrap>
        <SC.SmallLinkRow>
          <FaCog />
          <SC.SmallLink onClick={() => navigate('/language')}>
            {t('Change Language')}
          </SC.SmallLink>
        </SC.SmallLinkRow>

        <SC.Card as="form" onSubmit={handleRegister}>
          <SC.CardTitle>{t('Register')}</SC.CardTitle>

          <SC.InputWrap>
            <SC.Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('Enter your phone number')}
              aria-label={t('Enter your phone number')}
            />
            <SC.TrailingIcon>
              <FaPhoneAlt/>
            </SC.TrailingIcon>
          </SC.InputWrap>

          {error && <SC.ErrorText>{error}</SC.ErrorText>}

          <SC.SubmitButton type="submit">
            {t('Register & Continue')}
          </SC.SubmitButton>
        </SC.Card>

 
      </SC.CenterWrap>
    </SC.Screen>
  );
};

export default VisitorRegisterPage;