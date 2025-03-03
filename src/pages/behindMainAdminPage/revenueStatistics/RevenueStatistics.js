import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import styles for Calendar
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom'; // Web navigation
import * as Functions from '../../../assest/helpers/api';
import * as SC from './adminPageStyling';
import {  FaArrowLeft, FaSearch } from 'react-icons/fa'; // React Icons for web

const RevenueStatistics = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Revenue states
  const [dailyRevenue, setDailyRevenue] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [yearlyRevenue, setYearlyRevenue] = useState(0);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await Functions.fetchAppointmentsData();
        setAppointments(data);
      } catch (error) {
        alert(t('Error') + ': ' + t('Failed to fetch data.'));
      }
    };
    fetchAppointments();
  }, [t]);

  useEffect(() => {
    const calculateRevenue = () => {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      const formattedMonth = format(selectedDate, 'yyyy-MM');
      const formattedYear = format(selectedDate, 'yyyy');

      const dailyTotal = appointments
        .filter(app => format(new Date(app.date), 'yyyy-MM-dd') === formattedDate)
        .reduce((sum, app) => sum + parseFloat(app.price || 0), 0);

      const monthlyTotal = appointments
        .filter(app => format(new Date(app.date), 'yyyy-MM') === formattedMonth)
        .reduce((sum, app) => sum + parseFloat(app.price || 0), 0);

      const yearlyTotal = appointments
        .filter(app => format(new Date(app.date), 'yyyy') === formattedYear)
        .reduce((sum, app) => sum + parseFloat(app.price || 0), 0);

      setDailyRevenue(dailyTotal);
      setMonthlyRevenue(monthlyTotal);
      setYearlyRevenue(yearlyTotal);
    };

    calculateRevenue();
  }, [appointments, selectedDate]);

  const handleBack = () => {
    navigate(-1); // Go back
  };
  return (
    <SC.Container>
      {/* Back Button */}
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#BF9F00"
          onClick={handleBack}
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>
      {/* Page Title */}
      <SC.Title>{t('Revenue Statistics')}</SC.Title>

      {/* Calendar Picker for Selecting Date */}
      <SC.Label>{t('Select Date')}</SC.Label>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Calendar 
    onChange={setSelectedDate} 
    value={selectedDate} 
  />
</div>
   
      {/* Revenue Display */}
      <SC.Label>{t('Total Revenue for Selected Day')}</SC.Label>
      <SC.RevenueText>${dailyRevenue.toFixed(2)}</SC.RevenueText>

      <SC.Label>{t('Total Revenue for Month')}</SC.Label>
      <SC.RevenueText>${monthlyRevenue.toFixed(2)}</SC.RevenueText>

      <SC.Label>{t('Total Revenue for Year')}</SC.Label>
      <SC.RevenueText>${yearlyRevenue.toFixed(2)}</SC.RevenueText>
    </SC.Container>
  );
};

export default RevenueStatistics;