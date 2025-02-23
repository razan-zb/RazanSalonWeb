import React, { useEffect, useState } from 'react';
import * as SC from './visitorsPageStyling'; // Import styled components
import { useTranslation } from 'react-i18next';
import TopBar from './TopBar';
import SalonServices from './innerComponents/SalonServices';
import mario2 from '../../assest/images/mario2.jpeg';
import { FaInstagram, FaPhone, FaMapMarkerAlt, FaClock, FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom';

const VisitorsPage = ({ navigation }) => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [timeSlots, setTimeSlots] = useState({
    0: { start: '', end: '' },  // Sunday
    1: { start: '', end: '' },  // Monday
    2: { start: '', end: '' },  // Tuesday
    3: { start: '', end: '' },  // Wednesday
    4: { start: '', end: '' },  // Thursday
    5: { start: '', end: '' },  // Friday
    6: { start: '', end: '' },  // Saturday
  });

  const [todayHours, setTodayHours] = useState('');

  const formatTimeSlots = (slotsArray) => {
    const formattedSlots = {};
    slotsArray.forEach((slot) => {
      formattedSlots[slot.day] = { start: slot.startTime, end: slot.endTime };
    });
    return formattedSlots;
  };

  
  useEffect(() => {
    const fetchData = () => {
      try {
        const userData = localStorage.getItem('user'); // Fetch from local storage
        if (userData) {
          const data = JSON.parse(userData);
          if (data.timeSlots) {
            const formattedSlots = formatTimeSlots(data.timeSlots);
            setTimeSlots((prev) => ({ ...prev, ...formattedSlots }));
          }
          setUser(data);
        }
      } catch (error) {
        console.error('Error:', 'Failed to fetch data. Please try again.');
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const today = new Date().getDay();
    const { start, end } = timeSlots[today];
    if (start === end) {
      setTodayHours(t('Closed'));
    } else {
      setTodayHours(`${start} - ${end}`);
    }
  }, [t, timeSlots]);

  const handleWhatsApp = () => {
    if (user?.phone) {
      const phoneNumber = user.phone.replace(/\s+/g, '');
      const message = encodeURIComponent("Hello, I'm interested in your services!");
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(url, '_blank');
    } else {
      window.alert(t('Error'), t('Phone number not available.'));
    }
  };

  const openAddressInMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(url, '_blank');
  };

  const handleSettings = () => {
    navigate('/client-settings');
  };

  const onExit = () => {
    navigate('/');
  };

  const handleInstagram = () => {
    const instagramUsername = 'your_instagram'; // Replace with actual username
    const url = `https://www.instagram.com/${instagramUsername}`;
    window.open(url, '_blank');
  };

  return (
    <SC.Container1>
      <TopBar onExit={onExit} onSettings={handleSettings} />

      <SC.Container>
        <SC.Section>
          <SC.Title>{t('Welcome to Our Salon')}</SC.Title>
          <SC.Description>{t('Description')}</SC.Description>
          <SC.Image src={mario2} alt="Salon" />

          <SC.InfoRow>
            <FaMapMarkerAlt size={20} color="#BF9F00" />
            <SC.InfoText onClick={() => openAddressInMaps(user?.address)}>
              {t('Salon Muna Bathesh')}
            </SC.InfoText>
          </SC.InfoRow>

          <SC.InfoRow>
            <FaPhone size={20} color="#BF9F00" />
            <SC.InfoText onClick={handleWhatsApp}>{user?.phone || t('No phone number')}</SC.InfoText>
          </SC.InfoRow>

          <SC.InfoRow>
            <FaClock size={20} color="#BF9F00" />
            <SC.InfoText>{t('Opening Hours')}: {todayHours}</SC.InfoText>
          </SC.InfoRow>

          <SC.InfoRow>
            <FaInstagram size={25} color="#BF9F00" onClick={handleInstagram} />
            <SC.InfoText>Muna Bathish Ispanioly</SC.InfoText>
          </SC.InfoRow>
        </SC.Section>

        <SC.Section1>
          <SC.SubTitle onClick={() => navigate('/hairstylists')}>
            {t('Meet Our Hairstylists')}
          </SC.SubTitle>
          <FaArrowLeft size={25} color="#BF9F00" onClick={() => navigate('/hairstylists')} />
        </SC.Section1>

        {/* Services Section */}
        <SC.Section1>
          <SC.SubTitle>{t('Our Services')}</SC.SubTitle>
          <SalonServices />
        </SC.Section1>

        {/* Gallery Section */}
        <SC.Section1>
          <SC.SubTitle onClick={() => navigate('/gallery')}>{t('Gallery')}</SC.SubTitle>
          <FaArrowLeft size={25} color="#BF9F00" onClick={() => navigate('/gallery')} />
        </SC.Section1>
      </SC.Container>
    </SC.Container1>
  );
};

export default VisitorsPage;