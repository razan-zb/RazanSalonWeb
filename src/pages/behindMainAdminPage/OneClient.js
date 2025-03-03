import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import * as Functions from '../../assest/helpers/api';
import * as SC from './behindAdminPageStyling'; 
import { useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; 

const OneClient = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { client } = location.state || {}; 
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [clientData, setClientData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setClientData(client)
        const appointmentData = await Functions.fetchAppointmentsData();
        const clientAppointments = appointmentData.filter(
          (appointment) => appointment.client === client._id
        );
        const sortedAppointments = clientAppointments.sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );       
        setAppointments(sortedAppointments);
      } catch (error) {
        alert(t('Error') + ': ' + t('Failed to fetch data.'));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [t]);

  if (loading) {
    return <p>{t('Loading...')}</p>;
  }

  const handleUpdate = (field, value) => {
    setIsEditing(true);
    setClientData({ ...clientData, [field]: value });
  };

  const handleSave = async () => {
    if (!clientData.name || !clientData.phoneNumber || !clientData.birthday || !clientData.naturalHairColor || !clientData.hairType) {
      alert(t('Error') + ': ' + t('All fields are required.'));
      return;
    }

    try {
      const response = await Functions.fetchUpdateClient(clientData);
      if (response) {
        setIsEditing(false);
        alert(t('Success') + ': ' + t('Client details have been updated successfully.'));
      } else {
        alert(t('Error') + ': ' + t('Failed to add client. Please try again.'));
      }
    } catch (error) {
      console.error('Error updating client:', error);
      alert(t('Error') + ': ' + t('An error occurred while updating the client.'));
    }
  };

  return (
    <SC.MainOneClientContainer>
      {/* Back Button */}
        
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#BF9F00"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>
      <SC.Title>{t('Client Details')}</SC.Title>

      {/* Client Details Form */}
      <SC.ClientDetail>
        <SC.Label>{t('Name')}</SC.Label>
        {isEditing ? (
          <SC.Input type="text" value={clientData.name} onChange={(e) => handleUpdate('name', e.target.value)} />
        ) : (
          <SC.Value>{clientData?.name}</SC.Value>
        )}
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Phone')}</SC.Label>
        {isEditing ? (
          <SC.Input type="text" value={clientData.phoneNumber} onChange={(e) => handleUpdate('phoneNumber', e.target.value)} />
        ) : (
          <SC.Value>{clientData?.phoneNumber}</SC.Value>
        )}
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Birthday')}</SC.Label>
        {isEditing ? (
          <SC.Input type="date" value={clientData.birthday} onChange={(e) => handleUpdate('birthday', e.target.value)} />
        ) : (
          <SC.Value>{clientData?.birthday}</SC.Value>
        )}
      </SC.ClientDetail>

      <SC.ClientDetail>
        <SC.Label>{t('Natural Hair Color')}</SC.Label>
        {isEditing ? (
          <SC.Input type="text" value={clientData.naturalHairColor} onChange={(e) => handleUpdate('naturalHairColor', e.target.value)} />
        ) : (
          <SC.Value>{clientData?.naturalHairColor}</SC.Value>
        )}
      </SC.ClientDetail>

      <SC.ButtonContainer>
        <SC.Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? t('Cancel') : t('Edit')}
        </SC.Button>
        {isEditing && <SC.Button onClick={handleSave}>{t('Save')}</SC.Button>}
      </SC.ButtonContainer>

      <SC.Title>{t('Appointments')}</SC.Title>

      {/* Appointments */}
      <SC.AppointmentsContainer>
        {appointments.length > 0 ? (
          appointments.map((appointment) => (
            <SC.AppointmentBox key={appointment._id} onClick={() => navigate(`/appointment/${appointment._id}`)}>
              {format(new Date(appointment.date), 'yyyy-MM-dd')}
            </SC.AppointmentBox>
          ))
        ) : (
          <p>{t('No Appointments')}</p>
        )}
      </SC.AppointmentsContainer>
    </SC.MainOneClientContainer>
  );
};

export default OneClient;