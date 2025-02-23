import styled from 'styled-components';

// Main Container
export const Container = styled.div`
  background-color: #fdfcf4;
  padding: 20px;
  min-height: 100vh; /* Ensures full height */
`;

// Back Button
export const BackButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  align-self: flex-end;
`;
export const Con = styled.div`
  align-self:flex-start;
  text-align: left;
`;
// Title
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #bf9f00;
  margin-bottom: 20px;
  text-align: center;
`;

// Section Title
export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

// Button Container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 10px;
`;

export const ButtonText = styled.text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

// Language Button
export const LanguageButton = styled.button`
  background-color: #bf9f00;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

// Time Slot Container
export const TimeSlotContainer = styled.div`
  margin-bottom: 20px;
`;

export const ScrollContainer = styled.div`
  overflow-y: auto; /* Enables vertical scrolling */
  padding: 10px;
  max-height: 100vh; /* Adjust height as needed */
`;
// Label
export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

// Input Field
export const InputField = styled.input`
  border: 1px solid #ddd;
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  width: 100%;
`;

// General Button
export const Button = styled.button`
  background-color: #bf9f00;
  padding: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: white;
  width: 100%;
  margin-top: 5px;
`;

// Logout Button
export const LogoutButton = styled(Button)`
  background-color: red;
`;