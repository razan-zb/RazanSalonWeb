import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaBirthdayCake } from 'react-icons/fa'; 
import { MdPerson } from 'react-icons/md'; 
import { GiCash } from 'react-icons/gi';
import {SecondSectionContainer2, SecondSectionContainer, StatText, Container1, Title } from './adminStyling';

const SecondSection = () => {
  const totalClients = 25;
  const totalEarnings = 1500;
  const { t } = useTranslation();

  const clients = [
    { name: 'Amera Asma', birthday: '2024-12-05' },
    { name: 'Ali Ahmad', birthday: '2024-12-06' },
    { name: 'Sara Omar', birthday: '2024-12-05' },
  ];

  const handleBirthdayPress = () => {
    alert(
      birthdaysToday.length
        ? `Today's birthdays:\n${birthdaysToday.map((c) => c.name).join(', ')}`
        : 'No birthdays today!'
    );
  };

  const today = new Date().toISOString().slice(0, 10); // Current date in YYYY-MM-DD format
  const birthdaysToday = clients.filter((client) => client.birthday === today);

  return (
    <SecondSectionContainer>
      <Title>{t('weeklySummary')}</Title>
      <SecondSectionContainer2>
        <Container1>
          <MdPerson size={70} color="#935B16" />
          <StatText>{t('totalClients')}: {totalClients}</StatText>
        </Container1>

        <Container1>
          <FaBirthdayCake size={70} color="#935B16" onClick={handleBirthdayPress} />
          <StatText>{t('Birthdays Today')}: {birthdaysToday.length}</StatText>
        </Container1>

        <Container1>
          <GiCash size={70} color="#935B16" />
          <StatText>{t('totalEarnings')}: {totalEarnings} {t('currency')}</StatText>
        </Container1>

      </SecondSectionContainer2>
      
    </SecondSectionContainer>
  );
};

export default SecondSection;