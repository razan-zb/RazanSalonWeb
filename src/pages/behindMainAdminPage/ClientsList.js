import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ClientsListContainer,
  SearchBarContainer,
  SearchInput,
  ClientNameContainer,
  ClientName,
  PlusButton,
} from './behindAdminPageStyling';
import { FaPlus, FaArrowLeft, FaSearch } from 'react-icons/fa'; // React Icons for web

const ClientsList = ({ onBack }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();
  const [clients, setClients] = useState([
    'Razan Zbedy',
    'Ali Ahmad',
    'Sara Omar',
    'John Doe',
    'Alaa Karem',
    'Amera Asma',
    'Hana Awed',
  ]);

  const filteredClients = clients.filter((client) =>
    client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClient = () => {
    console.log('Add new client clicked');
  };

  return (
    <ClientsListContainer>
      <FaArrowLeft
        size={30}
        color="#935B16"
        onClick={onBack}
        style={{ cursor: 'pointer', marginBottom: '10px' }}
      />

      <SearchBarContainer>
        <FaSearch size={20} color="#935B16" />
        <SearchInput
          type="text"
          placeholder={t('Search for a client')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBarContainer>

      {filteredClients.map((client, index) => (
        <ClientNameContainer key={index}>
          <ClientName>{client}</ClientName>
        </ClientNameContainer>
      ))}

      {/* Plus Button */}
      <PlusButton onClick={handleAddClient}>
        <FaPlus />
      </PlusButton>
    </ClientsListContainer>
  );
};

export default ClientsList;