import React from 'react';
import { FaUser } from 'react-icons/fa'; 
import { ClientsContainer, Temp } from './adminStyling';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Clients = () => {
  const { t } = useTranslation();

  return (
    <Link to="/clients-list" style={{ textDecoration: 'none' }}>
      <ClientsContainer>
        <FaUser size={30} color="#227439" />
        <Temp>{t('clients')}</Temp>
      </ClientsContainer>
    </Link>
  );
};

export default Clients;