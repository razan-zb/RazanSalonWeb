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
    const fetchClients = async () => {
      const clientsData = await Functions.fetchClientsData();
      setClients(clientsData);
      const appointmentsData = await Functions.fetchAppointmentsData();
      setAppointments(appointmentsData);
    };
    fetchClients();
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
          <MdPerson size={70} color="#BF9F00" />
          <StatText>{t('totalClients')}: {clients.length}</StatText>
        </Container1>

        <Container1>
          <FaBirthdayCake size={70} color="#BF9F00" onClick={handleBirthdayPress} />
          <StatText>{t('Birthdays Today')}: {getTodayBirthdayClients().length}</StatText>
        </Container1>

        <Container1>
          <GiCash size={70} color="#BF9F00" onClick={() => navigate('/revenue-statistics')}  />
          <StatText>{t('totalEarnings')}: {getTotalEarnings()} {t('currency')}</StatText>
        </Container1>
      </SecondSectionContainer2>
    </SecondSectionContainer>
  );
};

export default SecondSection;
