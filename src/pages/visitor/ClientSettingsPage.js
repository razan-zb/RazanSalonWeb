import React, { useState, useEffect } from 'react';
import * as SC from './clientSettingsPageStyling';
import { useTranslation } from 'react-i18next';
import * as Functions from '../../assest/helpers/api';
import { useNavigate } from 'react-router-dom';
import {  FaArrowLeft } from 'react-icons/fa'; 

const ClientSettingsPage = () => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);
  const [timeSlots, setTimeSlots] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        const userData = await Functions.fetchUserData('munabathesh@gmail.com');
        setUser(userData);
        if (userData?.timeSlots) {
          const formattedSlots = userData.timeSlots.reduce((acc, slot) => {
            acc[slot.day] = { start: slot.startTime, end: slot.endTime };
            return acc;
          }, {});
          setTimeSlots(formattedSlots);
        }
      } catch (error) {
        console.error('Error fetching time slots:', error);
        alert(t('Error') + ': ' + t('Failed to fetch time slots.'));
      }
    };

    fetchTimeSlots();
  }, [t]);


    // Change language function
    const changeLanguage = async (lng) => {
      i18n.changeLanguage(lng);
      localStorage.setItem('language', lng);
      window.location.reload(); // Refresh to apply RTL/LTR changes
    };
  
  const formatTimeSlot = (day) => {
    return timeSlots[day].start === timeSlots[day].end 
      ? t('عطله ') 
      : `${timeSlots[day].start} - ${timeSlots[day].end}`;
  };
  return (
    <SC.Container>
      {/* Back Button */}

      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#BF9F00"
          onClick={() => navigate(-1)}  
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>

      {/* Page Title */}
      <SC.Title>{t('Admin Settings')}</SC.Title>

      {/* Language Selection */}
      <SC.SectionTitle>{t('Change Language')}</SC.SectionTitle>
      <SC.ButtonContainer>
        <SC.LanguageButton onClick={() => changeLanguage('en')}>
          <SC.ButtonText>English</SC.ButtonText>
        </SC.LanguageButton>
        <SC.LanguageButton onClick={() => changeLanguage('ar')}>
          <SC.ButtonText>العربية</SC.ButtonText>
        </SC.LanguageButton>
        <SC.LanguageButton onClick={() => changeLanguage('he')}>
          <SC.ButtonText>עברית</SC.ButtonText>
        </SC.LanguageButton>
      </SC.ButtonContainer>

      {/* Display Working Hours */}
      <SC.SectionTitle>{t('Working Hours')}</SC.SectionTitle>
      <SC.ScrollContainer>
        {Object.keys(timeSlots).map((day) => (
          <SC.TimeSlotContainer key={day}>
            <SC.Label> {t(`Day ${day}`)} </SC.Label>
            <SC.Label>{formatTimeSlot(day)}</SC.Label>
          </SC.TimeSlotContainer>
        ))}
      </SC.ScrollContainer>
    </SC.Container>
  );
};

export default ClientSettingsPage;