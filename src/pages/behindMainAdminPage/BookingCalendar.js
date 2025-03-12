import React, { useState, useEffect } from 'react';
import * as SC from './behindAdminPageStyling'; // Import styled components
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Calendar from 'react-calendar'; // Use react-calendar for web
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import * as Functions from '../../assest/helpers/api';
import { FaArrowLeft } from 'react-icons/fa'; 
import { ar } from 'date-fns/locale'; // Arabic locale

const BookingCalendar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [filteredTimeSlots, setFilteredTimeSlots] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const appointmentsData = await Functions.fetchAppointmentsData();
      setAppointments(appointmentsData);
      const userData = await Functions.fetchUserData('munabathesh@gmail.com');
      setUser(userData);
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    if (selectedDate && user) {
      const dayOfWeek = new Date(selectedDate).getDay();
      const slotsForDay = user.timeSlots.find((slot) => slot.day === dayOfWeek);
      if (slotsForDay) {
        const generatedSlots = generateTimeSlots(slotsForDay.startTime, slotsForDay.endTime);
        setFilteredTimeSlots(generatedSlots);
      } else {
        setFilteredTimeSlots([]); 
      }
    }
  }, [selectedDate, user]);

  const handleBack = () => {
    navigate(-1)
  };
  
  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    let currentTime = startTime;

    while (currentTime < endTime) {
      slots.push(currentTime);
      const [hours, minutes] = currentTime.split(':').map(Number);
      const newMinutes = (minutes + 30) % 60;
      const newHours = minutes + 30 >= 60 ? hours + 1 : hours;
      currentTime = `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}`;
    }
    return slots;
  };

  const isSlotBooked = (time) => {
    return getAppointmentsForSelectedDate().some((appointment) => appointment.time === time);
  };

  const getAppointmentsForSelectedDate = () => {
    return appointments.filter(
      (appointment) => format(new Date(appointment.date), 'yyyy-MM-dd') === format(new Date(selectedDate), 'yyyy-MM-dd')
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(format(date, 'yyyy-MM-dd'));
  };

  const handleSlotSelection = (time) => {
    navigate(`/booking-for-one`, { state: { date:selectedDate, time }});
  };

  return (
    <SC.Container3>
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
      <SC.Title3>{t('Book Appointment')}</SC.Title3>

      {/* Calendar */}
      <SC.CalendarContainer>
      <Calendar
        locale={isArabic ? 'ar' : 'en'} // Set Arabic when language is Arabic
        onChange={handleDateChange}
        value={selectedDate}
        tileClassName={({ date, view }) =>
          appointments.some((appointment) =>
            format(new Date(appointment.date), 'yyyy-MM-dd', { locale: isArabic ? ar : undefined }) === 
            format(date, 'yyyy-MM-dd', { locale: isArabic ? ar : undefined })
          )
            ? 'highlighted-date'
            : ''
        }
      />
      </SC.CalendarContainer>

      {/* Selected Date */}
      {selectedDate && <SC.SelectedDate>{`${t('Selected Date')}: ${selectedDate}`}</SC.SelectedDate>}

      {/* Available Time Slots */}
      <SC.SectionTitle3>{t('Available Slots')}</SC.SectionTitle3>
      <SC.TimeSlotsContainer>
        {filteredTimeSlots.length > 0 ? (
          filteredTimeSlots.map((slot, index) => (
            <SC.TimeSlot
              key={index}
              onClick={() => handleSlotSelection(slot)}
              gray={isSlotBooked(slot)}
              className={isSlotBooked(slot) ? 'booked' : ''}
            >
              {slot}
            </SC.TimeSlot>
          ))
        ) : (
          <SC.NoSlotsMessage>{t('No available slots for this date.')}</SC.NoSlotsMessage>
        )}
      </SC.TimeSlotsContainer>
    </SC.Container3>
  );
};

export default BookingCalendar;