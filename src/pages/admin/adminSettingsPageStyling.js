import styled from 'styled-components';

// Main Container
export const Container = styled.div`
  min-height: 100vh;
  background-color: #F8F8F8;
  padding: 20px;

  @media screen and (min-width: 769px) {
    text-align:center;
  }
`;

// Back Button
export const BackButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  align-self: flex-end;
  font-size: 18px;
  color: #bf9f00;
`;

export const Con = styled.div`
  align-self:flex-start;
  text-align: left;
`;
// Title Styling
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #227439;
  margin-bottom: 20px;
  text-align: center;
`;

// Section Title
export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
`;

// Button Container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 10px;
`;

// Language Button
export const LanguageButton = styled.button`
  background-color: #227439;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

// Button Text
export const ButtonText = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

// Time Slot Container
export const TimeSlotContainer = styled.div`
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
  display:flex;
  gap:15px;
  align-content:center;
  justify-content:center;
  align-self:center;
  
`;

// Label
export const Label = styled.label`
font-size: 18px;
font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;

// Input Field
export const InputField = styled.input`
  border: 1px solid #227439;
  padding: 10px;
  font-size: 18px;
  border-radius: 10px;
  background-color: #fff;
  text-align:center;
  margin-bottom: 10px;
  gap:5

`;

// Generic Button
export const Button = styled.button`
  background-color: #227439;
  padding: 15px;
  border-radius: 10px;
  margin: 5px 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
`;

// Logout Button (with Red Color)
export const LogoutButton = styled(Button)`
  background-color: red;
`;