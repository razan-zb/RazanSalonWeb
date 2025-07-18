import React, { useState, useEffect } from 'react';
import * as SC from './styleForBookingCalendar'; 
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Calendar from 'react-calendar'; // Use react-calendar for web
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import * as Functions from '../../../assest/helpers/api';
import { FaArrowLeft } from 'react-icons/fa'; 
import { ar } from 'date-fns/locale'; // Arabic locale

const BookingCalendarVisitor = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [filteredTimeSlots, setFilteredTimeSlots] = useState([]);
  const [isBlockingMode, setIsBlockingMode] = useState(false);
  const [blockedSlots, setBlockedSlots] = useState([]);
  const isAdmin = localStorage.getItem('authToken');
  const isSlotBlocked = (time) => blockedSlots.includes(time);


  const isPastTimeSlot = (slot) => {
    if (!selectedDate) return false;
  
    const today = format(new Date(), 'yyyy-MM-dd');
    if (selectedDate !== today) return false;
  
    const [slotHour, slotMinute] = slot.split(':').map(Number);
    const now = new Date();
    const slotTime = new Date();
    slotTime.setHours(slotHour, slotMinute, 0, 0);
  
    return slotTime < now;
  };

  const handleSaveBlockedSlots = async () => {
    try {
      const dayOfWeek = new Date(selectedDate).getDay();
      const updatedTimeSlots = user.timeSlots.map(slot => {
        if (slot.day === dayOfWeek) {
          return {
            ...slot,
            blockedSlots: blockedSlots, // update only for the current day
          };
        }
        return slot;
      });
  
      const updatedUser = {
        ...user,
        timeSlots: updatedTimeSlots,
      };
  
      const response = await Functions.fetchUpdateUser(updatedUser);
  
      if (response) {
        localStorage.setItem('user', JSON.stringify(updatedUser));
        setUser(updatedUser);
        alert(t('Success: Blocked slots saved.'));
        setIsBlockingMode(false);
      } else {
        alert(t('Error: Failed to save blocked slots.'));
      }
    } catch (error) {
      console.error('Error saving blocked slots:', error);
      alert(t('Error: An error occurred while saving blocked slots.'));
    }
  };
 



  useEffect(() => {
    const fetchAppointments = async () => {
        try {
            // Check for cached appointments
            const cachedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
            const cachedUser = JSON.parse(localStorage.getItem('user')) || null;

            // Set the cached data first to make the UI responsive
            if (cachedAppointments.length > 0) {
                setAppointments(cachedAppointments);
            }
            if (cachedUser) {
                setUser(cachedUser);
            }

            // Fetch fresh data from the server
            const [appointmentsData, userData] = await Promise.all([
                Functions.fetchAppointmentsData(),
                Functions.fetchUserData('razanSalon@gmail.com'),
            ]);

            // Update state and cache with fresh data
            setAppointments(appointmentsData);
            setUser(userData);

            // Cache the fresh data
            localStorage.setItem('appointments', JSON.stringify(appointmentsData));
            localStorage.setItem('user', JSON.stringify(userData));

        } catch (error) {
            console.error('Error fetching data:', error);
            alert(t('Error') + ': ' + t('Failed to fetch data.'));
        }
    };

    fetchAppointments();
}, [t]);

useEffect(() => {
  if (selectedDate && user) {
    const dayOfWeek = new Date(selectedDate).getDay();
    const slotsForDay = user.timeSlots.find((slot) => slot.day === dayOfWeek);

    if (slotsForDay) {
      const generatedSlots = generateTimeSlots(slotsForDay.startTime, slotsForDay.endTime);
      setFilteredTimeSlots(generatedSlots);
      setBlockedSlots(slotsForDay.blockedSlots || []);
    } else {
      setFilteredTimeSlots([]);
      setBlockedSlots([]);
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
    if (!isAdmin || !isBlockingMode) {
      if (!isSlotBooked(time) && !isSlotBlocked(time)) {
        navigate(`/visitor-booking`, { state: { date: selectedDate, time } });
      }
    } else {
      // In blocking mode, toggle blocked slot
      setBlockedSlots((prev) =>
        prev.includes(time)
          ? prev.filter((t) => t !== time)
          : [...prev, time]
      );
    }
  };
  return (
    <SC.Container3>
      {/* Back Button */}
      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#227439"
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
        minDate={new Date()} 
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
              onClick={() => {
                if (!isSlotBooked(slot) && !isPastTimeSlot(slot)) {
                  handleSlotSelection(slot);
                }
              }}
              gray={isSlotBooked(slot) || isSlotBlocked(slot) || isPastTimeSlot(slot)}
              className={
                isSlotBooked(slot) ? 'booked'
                : isSlotBlocked(slot) ? 'blocked'
                : ''
              }
            >
              {slot}
            </SC.TimeSlot>
          ))
        ) : (
          <SC.NoSlotsMessage>{t('No available slots for this date.')}</SC.NoSlotsMessage>
        )}
      </SC.TimeSlotsContainer>
      {isAdmin && (
  <SC.BlockIcon onClick={() => setIsBlockingMode(!isBlockingMode)}>
    {isBlockingMode ? t('Exit Blocking Mode') : t('Enter Blocking Mode')}
  </SC.BlockIcon>
)}
{isAdmin && isBlockingMode && (
  <SC.BlockIcon onClick={handleSaveBlockedSlots}>
    {t('Save Blocked Slots')}
  </SC.BlockIcon>
)}
    </SC.Container3>
  );
};

export default BookingCalendarVisitor;