import styled from 'styled-components';


export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fdfcf4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
   min-height: 100vh;
   align-self:flex-end;
   text-align:right;

`;
// Main Container
export const ClientsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-height: 100vh; /* Full height of the viewport */
  padding: 20px;
  min-height: 100vh;
`;

// Search Bar Container
export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #BF9F00;
  border-radius: 10px;
  margin: 15px 0;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Search Input
export const SearchInput = styled.input`
  flex: 1;
  margin-left: 10px;
  font-size: 18px;
  color:black;
  border: none;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: #fff;
    opacity: 1;
  }

`;

// Client Name Container
export const ClientNameContainer = styled.div`
background-color: #BF9F00;
padding: 15px;
margin: 5px 0;
border-radius: 10px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
text-align: center;
  cursor: pointer;

`;

// Client Name Text
export const ClientName = styled.p`
  font-size: 18px;
  color: #1D1D1B;
  font-weight: bold;
  margin: 0;
`;

// Plus Button
export const PlusButton = styled.button`
  position: fixed; /* Fixed at the bottom-right of the page */
  bottom: 20px;
  right: 20px;
  background-color: #BF9F00;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  color: black; 
  font-size: 30px;
  &:hover {
    background-color: #BF9F00;
  }
`;

export const MainOneClientContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fdfcf4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   min-height: 100vh;
`;

// Back Button
export const BackButton = styled.button`
  background: none;
  border: none;
  color: #bf9f00;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;
export const FilterButton = styled.button`
  background: ${(props) => (props.isActive ? '#bf9f00' : '#ddd')};
  color: ${(props) => (props.isActive ? 'white' : '#333')};
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.3s;

  &:hover {
    background: ${(props) => (props.isActive ? '#a07f00' : '#bbb')};
  }
`;
// Title
export const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
`;

// Client Details Section
export const ClientDetail = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  font-size: 18px;

`;

export const Value = styled.p`
  background: #fff;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: auto;

`;

export const Input = styled.input`
  width: 95%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;

`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 80px;
`;

// Button Container
export const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  flex: 1;
  padding: 10px;
  background: #bf9f00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 22px;

  &:hover {
    background: #a07f00;
  }
`;

// Appointments Section
export const AppointmentsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
export const NoAppointmentsText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #bf9f00;
  text-align: center;
  margin-top: 20px;
`;
export const AppointmentBox = styled.div`
  padding: 10px;
  background: #EBD87F;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;

  &:hover {
    background: #bf9f00;
    color: white;
  }
`;


export const MainOneCliesntContainer = styled.div`
  padding: 30px;
  background: #fdfcf4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
   min-height: 100vh;
`;

// Title
export const Title4 = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
`;


export const Appointment = styled.div`
  padding: 10px;
  background: #ebd87f;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const AppointmentDate = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

// Appointment Notes
export const AppointmentNotes = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
`;
export const Title2 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

// Detail Container
export const DetailContainer = styled.div`
  margin-top: 20px;

`;

// Labels
export const Label2 = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 15px;
  margin-top:20px;
  font-size: 20px;

`;

// Input Fields
export const Input2 = styled.input`
  width: 95%;
  font-size: 18px;
  text-align:right;

  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Select Dropdown
export const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 18px;
  text-align:right;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Date & Time Display
export const Value2 = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background: #ebd87f;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
`;

export const Container3 = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background: #fdfcf4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
   min-height: 100vh;
   @media screen and (min-width: 769px) {
    display:flex;
    flex-direction:column;
    justify-items: center;
    align-content: center;
    max-width: 900px;

  }
`;
export const Con = styled.div`
  align-self:flex-start;
  text-align: left;
`;


// Title
export const Title3 = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
`;

// Calendar Container
export const CalendarContainer = styled.div`
  margin: 0px auto;
  text-align: center;

  .highlighted-date {
    background-color: #bf9f00 !important;
    color: white !important;
    font-weight: bold;
  }

`;

// Selected Date
export const SelectedDate = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  margin-top: 10px;
`;

// Section Title
export const SectionTitle3 = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
`;

// Time Slots Container
export const TimeSlotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

// Individual Time Slot
export const TimeSlot = styled.button`
  background: ${(props) => (props.gray ? 'gray' : '#bf9f00')};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  transition: 0.3s;
  width:100px;
  
  &:hover {
    background: ${(props) => (props.gray ? 'gray' : '#a07f00')};
  }
`;


export const NoSlotsMessage = styled.p`
  font-size: 16px;
  color: #999;
  margin-top: 10px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #ebd87f;
  }
`;

// Card Content
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

// Client Name
export const ClientName3 = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

// Date & Time
export const DateTime = styled.p`
  font-size: 14px;
  color: #666;
`;

// Icon Container
export const IconContainer = styled.span`
  font-size: 20px;
  color: #bf9f00;
  font-weight: bold;
`;

// Detail Container
export const DetailContainer2 = styled.div`
  margin-bottom: 15px;
`;


// Text Area
export const TextArea2 = styled.textarea`
  width: 93%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  min-height: 80px;
  margin-bottom: 10px;
`;

// Status Dropdown
export const SelectContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;
export const StyledPicker = styled.select`
  color: #333;
  font-size: 16px;
  height: 60px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #BF9F00;
  }
`;
export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;
export const ButtonText = styled.text`
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 20px;

`;
// Save Button
export const Button4 = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: white;
  background: #bf9f00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #a07f00;
  }
`;