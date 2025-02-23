import React, { useEffect, useState } from 'react';
import * as SC from './behindAdminPageStyling'; // Import styled components
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Functions from '../../assest/helpers/api';
import { format } from 'date-fns';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const FirstSectionList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [appointments, setAppointments] = useState([]);
  const [sortedAppointments, setSortedAppointments] = useState([]);
  const [statusFilter, setStatusFilter] = useState('pending');
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentsData = await Functions.fetchAppointmentsData();
      setAppointments(appointmentsData);
      setSortedAppointments(sortAppointmentsByDateTime(appointmentsData));

      const clientsData = await Functions.fetchClientsData();
      setClients(clientsData);
    };
    fetchAppointments();
  }, []);

  const getClientName = (clientId) => {
    const client = clients.find((client) => client._id === clientId);
    return client ? client.name : 'Unknown'; 
  };

  useEffect(() => {
    const filtered = appointments.filter((appointment) => appointment.status === statusFilter);
    setSortedAppointments(filtered);
  }, [statusFilter, appointments]);

  const sortAppointmentsByDateTime = (appointmentsData) => {
    return [...appointmentsData].sort((a, b) => {
      const dateComparison = new Date(a.date) - new Date(b.date);
      return dateComparison === 0 ? a.time.localeCompare(b.time) : dateComparison;
    });
  };

  const handleStatusChange = (status) => {
    setStatusFilter(status);
  };

  const handlePressAppointment = (appointment) => {
    navigate(`/first-section-one-box`, { state: { appointment } }); 
  };

  return (
    <SC.Container>
      {/* Back Button */}
    
       <SC.Con>
        <FaArrowLeft
          size={30}
          color="#BF9F00"
          onClick={() => navigate(-1)}
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>
      {/* Title */}
      <SC.Title>{t('Review Appointments')}</SC.Title>

      {/* Filter Buttons */}
      <SC.ButtonRow>
        <SC.FilterButton isActive={statusFilter === 'pending'} onClick={() => handleStatusChange('pending')}>
          {t('Pending')}
        </SC.FilterButton>
        <SC.FilterButton isActive={statusFilter === 'canceled'} onClick={() => handleStatusChange('canceled')}>
          {t('Canceled')}
        </SC.FilterButton>
        <SC.FilterButton isActive={statusFilter === 'done'} onClick={() => handleStatusChange('done')}>
          {t('Done')}
        </SC.FilterButton>
      </SC.ButtonRow>

      {/* Appointments List */}
      <SC.ListContainer>
        {sortedAppointments.map((item) => (
          <SC.Card key={item._id} onClick={() => handlePressAppointment(item)}>
            <SC.CardContent>
              <SC.ClientName3>{getClientName(item?.client)}</SC.ClientName3>
              <SC.DateTime>{`${format(new Date(item.date), 'yyyy-MM-dd')}, ${item.time}`}</SC.DateTime>
            </SC.CardContent>
            <SC.IconContainer> 
              <FaArrowLeft
              size={30}
              onClick={() => handlePressAppointment(item)}
              /></SC.IconContainer>
          </SC.Card>
        ))}
      </SC.ListContainer>
    </SC.Container>
  );
};

export default FirstSectionList;