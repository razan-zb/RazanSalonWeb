import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import a user icon
import { ClientsContainer, Temp } from './adminStyling';
import { useTranslation } from 'react-i18next';

const Clients = () => {
  const { t } = useTranslation();

  return (
    <ClientsContainer>
      <FaUser size={30} color="white" />
      <Temp>{t('clients')}</Temp>
    </ClientsContainer>
  );
};

export default Clients;