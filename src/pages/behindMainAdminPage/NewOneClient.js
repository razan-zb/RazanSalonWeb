/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Functions from '../../assest/helpers/api';
import * as SC from './behindAdminPageStyling'; 
import { FaArrowLeft } from 'react-icons/fa'; 

const OneClient = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [clientData, setClientData] = useState({
    _id: '',
    name: '',
    phoneNumber: '',
    address: '',
    birthday: '',
    naturalHairColor: '',
    hairType: '',
    fileOpeningDate: '',
    problemsOrNotes: '',
  });

  useEffect(() => {
    const generatedId = generateUniqueId();
    const currentDate = new Date().toISOString(); // ISO formatted date
    setClientData((prevData) => ({
      ...prevData,
      _id: generatedId,
      fileOpeningDate: currentDate,
    }));
  }, []);

  const generateUniqueId = () => {
    return `client_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };
  const handleBack = () => {
    navigate(-1); // Go back
  };

  const handleSave = async () => {
    if (
      !clientData.name ||
      !clientData.phoneNumber ||
      !clientData.birthday ||
      !clientData.address ||
      !clientData.naturalHairColor ||
      !clientData.hairType
    ) {
      alert(t('Error') + ': ' + t('All fields are required.'));
      return;
    }

    try {
      const response = await Functions.featchsaveClient(clientData);
      if (response) {
        alert(t('Success') + ': ' + t('Client details have been updated successfully.'));
      } else {
        alert(t('Error') + ': ' + t('Failed to update client. Please try again.'));
      }
    } catch (error) {
      console.error('Error updating client:', error);
      alert(t('Error') + ': ' + t('An error occurred while updating the client.'));
    }
  };

  return (
    <SC.MainOneCliesntContainer>

        
     <SC.Con>
        <FaArrowLeft
          size={30}
          color="#227439"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>


      {/* Title */}
      <SC.Title4>{t('Add Client')}</SC.Title4>

      {/* Client Form */}
      <SC.ClientDetail>
        <SC.Label>{t('Name')}</SC.Label>
        <SC.Input
          type="text"
          value={clientData.name}
          onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
          placeholder={t('Enter client name')}
        />
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Phone')}</SC.Label>
        <SC.Input
          type="text"
          value={clientData.phoneNumber}
          onChange={(e) => setClientData({ ...clientData, phoneNumber: e.target.value })}
          placeholder={t('Enter phone number')}
        />
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Address')}</SC.Label>
        <SC.Input
          type="text"
          value={clientData.address}
          onChange={(e) => setClientData({ ...clientData, address: e.target.value })}
          placeholder={t('Enter address')}
        />
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Birthday')}</SC.Label>
        <SC.Input
          type="date"
          value={clientData.birthday}
          onChange={(e) => setClientData({ ...clientData, birthday: e.target.value })}
          placeholder={t('YYYY-MM-DD')}
        />
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Natural Hair Color')}</SC.Label>
        <SC.Input
          type="text"
          value={clientData.naturalHairColor}
          onChange={(e) => setClientData({ ...clientData, naturalHairColor: e.target.value })}
          placeholder={t('Enter natural hair color')}
        />
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Hair Type')}</SC.Label>
        <SC.Input
          type="text"
          value={clientData.hairType}
          onChange={(e) => setClientData({ ...clientData, hairType: e.target.value })}
          placeholder={t('Enter hair type')}
        />
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Notes')}</SC.Label>
        <SC.TextArea
          value={clientData.problemsOrNotes}
          onChange={(e) => setClientData({ ...clientData, problemsOrNotes: e.target.value })}
          placeholder={t('Enter notes')}
        />
      </SC.ClientDetail>

      {/* Save Button */}
      <SC.ButtonContainer>
        <SC.Button onClick={handleSave}>{t('Save')}</SC.Button>
      </SC.ButtonContainer>

    </SC.MainOneCliesntContainer>
  );
};

export default OneClient;