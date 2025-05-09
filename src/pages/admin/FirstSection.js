import React, { useEffect, useState } from 'react';
import * as SC from './adminStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Functions from '../../assest/helpers/api';
import { format } from 'date-fns';
import { IoArrowDown } from 'react-icons/io5';

const FirstSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const today = format(new Date(), 'yyyy-MM-dd');
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
        try {
            // Get cached appointments
            const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
            const cachedClients = JSON.parse(localStorage.getItem('clients')) || [];

            // Filter the cached appointments for today
            const todayAppointments = cachedAppointments.filter(
                (appointment) =>
                    appointment.status === 'pending' && today === format(new Date(appointment.date), 'yyyy-MM-dd')
            );
            setFilteredAppointments(todayAppointments);

            // If the cache is not empty, continue without blocking
            if (cachedAppointments.length > 0 && cachedClients.length > 0) {
                setClients(cachedClients);
            }

            // Fetch fresh data in the background to update the cache
            const freshAppointments = await Functions.fetchAppointmentsData();
            const freshClients = await Functions.fetchClientsData();

            // Update the cache
            localStorage.setItem('appointments', JSON.stringify(freshAppointments));
            localStorage.setItem('clients', JSON.stringify(freshClients));

            // Update the state with the latest data
            setFilteredAppointments(
                freshAppointments.filter(
                    (appointment) =>
                        appointment.status === 'pending' && today === format(new Date(appointment.date), 'yyyy-MM-dd')
                )
            );
            setClients(freshClients);
        } catch (error) {
            console.error('Error fetching appointments or clients:', error);
        }
    };

    fetchAppointments();
}, [today]);

  const getClientName = (clientId) => {
    const client = clients.find((client) => client._id === clientId);
    return client ? client.name : 'Unknown';
  };

  const timeToMinutes = (time) => {
    const [hoursAndMinutes, period] = time.split(' ');
    let [hours, minutes] = hoursAndMinutes.split(':').map(Number);

    if (period === 'PM' && hours !== 12) {
      hours += 12;
    } else if (period === 'AM' && hours === 12) {
      hours = 0;
    }

    return hours * 60 + minutes;
  };

  const sortedAppointments = [...filteredAppointments].sort(
    (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time)
  );

  const generateShade = (index, total) => {
    const lightenFactor = (total - index) / total;
    return `rgba(70, 165, 95, ${lightenFactor})`;
  };

  const handleArrowClick = () => {
    navigate('/first-section-list');
  };


  const handlePressAppointment = (appointment) => {
    navigate(`/first-section-one-box`, { state: { appointment } }); 
  };

  return (
    <SC.FirstSectionContainer>
      <SC.FirstSectionText>{t('scheduleForToday')}</SC.FirstSectionText>
      <SC.FirstSectionContainer1>
        {sortedAppointments.slice(0, 3).map((appointment, index) => (
          <SC.MiniBoxContainer
            key={index}
            bgColor={generateShade(index, sortedAppointments.length)}
            onClick={() => handlePressAppointment(appointment)}
          >
            <SC.MiniBoxText>{getClientName(appointment?.client)}</SC.MiniBoxText>
            <SC.MiniBoxText>{appointment.time}</SC.MiniBoxText>
          </SC.MiniBoxContainer>
        ))}
        <SC.ArrowButton onClick={handleArrowClick}>
         <IoArrowDown size={20} color="#fff" />    
        </SC.ArrowButton>
      </SC.FirstSectionContainer1>
    </SC.FirstSectionContainer>
  );
};

export default FirstSection;