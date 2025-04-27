import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import * as SC from './behindAdminPageStyling';
import { useTranslation } from 'react-i18next';
import * as Functions from '../../assest/helpers/api';
import { FaArrowLeft, FaSearch } from 'react-icons/fa'; // React Icons for web

const ClientsList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 
  const [searchQuery, setSearchQuery] = useState('');
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const clientsData = await Functions.fetchClientsData();
        setClients(clientsData);
      } catch (error) {
        alert(t('Error') + ': ' + t('Failed to fetch data.'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value || '');
  };

  const filteredClients = clients.filter((client) =>
    client.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddClient = (client) => {
    navigate('/one-client', { state: { client } });
  };

  const handleAddNewClient = (client) => {
    navigate('/new-one-client', { client });  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <p>{t('Loading...')}</p>;
  }

  return (
    <SC.ClientsListContainer>
      {/* Back Button */}
      <FaArrowLeft
        size={30}
        color="#227439"
        onClick={handleBack}
        style={{ cursor: 'pointer', marginBottom: '10px' ,alignSelf:'flex-end' }}
      />

      {/* Search Bar */}
      <SC.SearchBarContainer>
        <FaSearch size={20} color="#1D1D1B" />
        <SC.SearchInput
          type="text"
          placeholder={t('Search for a client')}
          value={searchQuery}
          onChange={handleSearch}
        />
      </SC.SearchBarContainer>

      {/* Clients List */}
      <div style={{ padding: '10px' }}>
        {filteredClients.map((client, index) => (
          <SC.ClientNameContainer key={index}>
            <SC.ClientName onClick={() => handleAddClient(client)}>{client.name}</SC.ClientName>
          </SC.ClientNameContainer>
        ))}
      </div>

      {/* Plus Button */}
      <SC.PlusButton onClick={() => handleAddNewClient(null)}>
        ➕
      </SC.PlusButton>
    </SC.ClientsListContainer>
  );
};

export default ClientsList;