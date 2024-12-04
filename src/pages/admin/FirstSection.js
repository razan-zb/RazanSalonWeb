import React from 'react';
import { FirstSectionContainer, MiniBoxContainer, MiniBoxText, ArrowButton } from './adminStyling';
import { FaArrowRight } from 'react-icons/fa'; // Import an arrow icon

const FirstSection = () => {
  const appointments = [
    { name: 'Razan Zbedy', time: '18:00' },
    { name: 'Ali Ahmad', time: '19:00' },
    { name: 'Sara Omar', time: '20:30' },
    { name: 'John Doe', time: '21:15' },
    { name: 'Alaa Karem', time: '17:00' },
    { name: 'Amera Asma', time: '13:00' },
    { name: 'Hana Awed', time: '22:30' },
    { name: 'John Dock', time: '21:45' },    { name: 'Ali Ahmad', time: '19:00' },
    { name: 'Sara Omar', time: '20:30' },
    { name: 'John Doe', time: '21:15' },
    { name: 'Alaa Karem', time: '17:00' },
    { name: 'Amera Asma', time: '13:00' },
    { name: 'Hana Awed', time: '22:30' },
    { name: 'John Dock', time: '21:45' },
  ];

  // Function to convert time string to minutes
  const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  // Sort appointments by time
  const sortedAppointments = [...appointments].sort(
    (a, b) => timeToMinutes(a.time) - timeToMinutes(b.time)
  );

  // Generate shades for each box
  const generateShade = (index, total) => {
    const lightenFactor = (total - index) / total;
    return `rgba(203, 134, 50, ${lightenFactor})`;
  };

  const handleArrowClick = () => {
    console.log('Arrow button clicked!');
    // Add your navigation or scroll logic here
  };

  return (
    <FirstSectionContainer>
      {sortedAppointments.map((appointment, index) => (
        <MiniBoxContainer
          key={index}
          bgColor={generateShade(index, sortedAppointments.length)}
        >
          <MiniBoxText>{appointment.name}</MiniBoxText>
          <MiniBoxText>{appointment.time}</MiniBoxText>
        </MiniBoxContainer>
      ))}
      <ArrowButton onClick={handleArrowClick}>
        <FaArrowRight size={20} color="#fff" />
      </ArrowButton>
    </FirstSectionContainer>
  );
};

export default FirstSection;