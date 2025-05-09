import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import { GiCash } from 'react-icons/gi';
import { format, differenceInDays, parseISO } from 'date-fns';
import { SecondSectionContainer2, SecondSectionContainer, StatText, Container1, Title } from './adminStyling';
import * as Functions from '../../assest/helpers/api';
import { useNavigate } from 'react-router-dom'; 

const SecondSection = () => {
  const { t } = useTranslation();
  const [clients, setClients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate(); 


  useEffect(() => {
    const fetchData = async () => {
        try {
            // Load cached data if available
            const cachedClients = JSON.parse(localStorage.getItem('clients')) || [];
            const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
            
            // Set state with cached data immediately if available
            if (cachedClients.length > 0) {
                setClients(cachedClients);
            }
            if (cachedAppointments.length > 0) {
                setAppointments(cachedAppointments);
            }

            // Fetch fresh data in the background
            const freshClients = await Functions.fetchClientsData();
            const freshAppointments = await Functions.fetchAppointmentsData();

            // Update state with fresh data
            setClients(freshClients);
            setAppointments(freshAppointments);

            // Update cache
            localStorage.setItem('clients', JSON.stringify(freshClients));
            localStorage.setItem('appointments', JSON.stringify(freshAppointments));
        } catch (error) {
            console.error('Error fetching clients or appointments:', error);
        }
    };

    fetchData();
}, []);

  const handleBirthdayPress = () => {
    const birthdaysToday = getTodayBirthdayClients();
    alert(
      birthdaysToday.length
        ? `${t("Today's birthdays:")}\n${birthdaysToday.map((c) => c.name).join(', ')}`
        : t('No birthdays today!')
    );
  };

  const getTotalEarnings = () => {
    const today = new Date();
    return appointments
      .filter((appointment) => {
        const appointmentDate = parseISO(appointment.date);
        return differenceInDays(today, appointmentDate) <= 7;
      })
      .reduce((total, appointment) => total + (Number(appointment.price) || 0), 0);
  };

  const getTodayBirthdayClients = () => {
    const today = format(new Date(), 'MM-dd');
    return clients.filter(client => {
      if (!client.birthday) return false;
      return format(new Date(client.birthday), 'MM-dd') === today;
    });
  };

  return (
    <SecondSectionContainer>
      <Title>{t('weeklySummary')}</Title>
      <SecondSectionContainer2>
        <Container1>
          <div style={{ display: 'inline-block' }}>
           <MdPerson size={70} color="#227439" />
          </div>       
          <StatText>{t('totalClients')}: {clients.length}</StatText>
        </Container1>

        <Container1>
        <div onClick={handleBirthdayPress} style={{ display: 'inline-block', cursor: 'pointer' }}>
          <FaBirthdayCake size={70} color="#227439" />
        </div>       
       <StatText>{t('Birthdays Today')}: {getTodayBirthdayClients().length}</StatText>
        </Container1>

        <Container1>
        <div onClick={() => navigate('/revenue-statistics')} style={{ display: 'inline-block', cursor: 'pointer' }}>
         <GiCash size={70} color="#227439" onClick={() => navigate('/revenue-statistics')}  />
          </div>  
          <StatText>{t('totalEarnings')}: {getTotalEarnings()} {t('currency')}</StatText>
        </Container1>
      </SecondSectionContainer2>
    </SecondSectionContainer>
  );
};

export default SecondSection;
