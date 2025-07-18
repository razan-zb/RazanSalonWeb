import React, { useState, useEffect } from 'react';
import * as SC from './adminSettingsPageStyling'; // Import styled-components
import { useTranslation } from 'react-i18next';
import * as Functions from '../../assest/helpers/api';
import { FaArrowLeft } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const AdminSettingsPage = ({ history }) => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [timeSlots, setTimeSlots] = useState({
    0: { start: '', end: '', blocked: [] },  // Sunday
    1: { start: '', end: '', blocked: [] },  // Monday
    2: { start: '', end: '', blocked: [] },  // Tuesday
    3: { start: '', end: '', blocked: [] },  // Wednesday
    4: { start: '', end: '', blocked: [] },  // Thursday
    5: { start: '', end: '', blocked: [] },  // Friday
    6: { start: '', end: '', blocked: [] },  // Saturday
  });
  // Fetch user data and time slots
  useEffect(() => {
    
    const fetchTimeSlots = async () => {
      try {
        const cachedUser = JSON.parse(localStorage.getItem('user'));

        // Use cached data if available
        if (cachedUser) {
            setUser(cachedUser);
        }
        if (cachedUser?.timeSlots) {
          const formattedSlots = formatTimeSlots(cachedUser.timeSlots);
          setTimeSlots((prev) => ({ ...prev, ...formattedSlots }));

        }
        // Fetch fresh data from the server
        const freshUserData = await Functions.fetchUserData('razanSalon@gmail.com');

        // Update local cache with fresh data
        localStorage.setItem('user', JSON.stringify(freshUserData));
        setUser(freshUserData);

      } catch (error) {
        console.error('Error fetching time slots:', error);
        alert(t('Error: Failed to fetch time slots.'));
      }
    };

    fetchTimeSlots();
  }, [t]);

  // Convert API format to state format
  const formatTimeSlots = (slotsArray) => {
    const formattedSlots = {};
    slotsArray.forEach((slot) => {
      formattedSlots[slot.day] = { start: slot.startTime, end: slot.endTime,blocked: slot.blockedSlots || [],  };
    });
    return formattedSlots;
  };

  // Change language function
  const changeLanguage = async (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    window.location.reload(); // Refresh to apply RTL/LTR changes
  };

  const handleBack = () => {
    navigate(-1)
  };
  // Save time slots
  const handleSaveTimeSlots = async () => {
    const formattedTimeSlots = Object.entries(timeSlots).map(([day, slot]) => ({
      day: parseInt(day),
      startTime: slot.start,
      endTime: slot.end,
      blockedSlots: slot.blocked || [],
    }));

    const updatedUser = {
      ...user,
      timeSlots: formattedTimeSlots,
    };

    setUser(updatedUser);
    try {
      const response = await Functions.fetchUpdateUser(updatedUser);
      
      if (response) {
          // Update the cached user data
          const cachedUser = JSON.parse(localStorage.getItem('user')) || {};
          const updatedUserData = { ...cachedUser, ...updatedUser };
  
          // Save the updated data to localStorage
          localStorage.setItem('user', JSON.stringify(updatedUserData));
  
          // Update the user state if you have it
          setUser(updatedUserData);
  
          alert(t('Success: Time slots updated successfully.'));
      } else {
          alert(t('Error: Failed to update time slots.'));
      }
    } catch (error) {
        console.error('Error updating time slots:', error);
        alert(t('Error: An error occurred while updating time slots.'));
    }
  };



  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
  
    if (confirmLogout) {
      localStorage.removeItem('authToken'); // Remove authentication token
      history.push('/login'); // Navigate to login page
    }
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

      <SC.SectionTitle    style={{
          marginBottom: '15px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }} >{t('Set Working Hours')}
      
      </SC.SectionTitle>
      <SC.TimeSlotContainer>
        {Object.keys(timeSlots).map((day) => (
          <div  key={day}   style={{
            marginBottom: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <SC.Label>{t(`Day ${day}`)}</SC.Label>
            <SC.InputField
              type="text"
              placeholder={t('Start Time (e.g., 09:00)')}
              value={timeSlots[day].start}
              onChange={(e) => setTimeSlots({ ...timeSlots, [day]: { ...timeSlots[day], start: e.target.value } })}
            />
            <SC.InputField
              type="text"
              placeholder={t('End Time (e.g., 17:00)')}
              value={timeSlots[day].end}
              onChange={(e) => setTimeSlots({ ...timeSlots, [day]: { ...timeSlots[day], end: e.target.value } })}
            />
          </div>
        ))}
      </SC.TimeSlotContainer>

      <SC.ButtonsContainer>
        <SC.Button onClick={handleSaveTimeSlots}>
          <SC.ButtonText>{t('Save Changes')}</SC.ButtonText>
        </SC.Button>

        {/* Logout Button */}
        <SC.LogoutButton onClick={handleLogout}>
          <SC.ButtonText>{t('Log Out')}</SC.ButtonText>
        </SC.LogoutButton>
      </SC.ButtonsContainer>
     
    </SC.Container>
  );
};

export default AdminSettingsPage;