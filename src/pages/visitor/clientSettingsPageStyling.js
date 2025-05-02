import styled from 'styled-components';

// Main Container
export const Container = styled.div`
  background-color: #F8F8F8;
  padding: 20px;
  min-height: 100vh; 
  @media screen and (min-width: 769px) {
    justify-content: center;
    align-self:center;
  }

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
  color: #227439;
  margin-bottom: 20px;
  text-align: center;
  @media screen and (min-width: 769px) {
    margin-bottom: 30px;

  }
`;

// Section Title
export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;

  margin-bottom: 10px;
  @media screen and (min-width: 769px) {
    font-size: 20px;

  }
`;

// Button Container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 10px;
`;

export const ButtonText = styled.h1`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
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

// Time Slot Container
export const TimeSlotContainer = styled.div`
  display:flex;
  margin-bottom: 20px;
  text-align: center;
  flex-direction:row;
  
  gap:20px;
`;

export const ScrollContainer = styled.div`
  overflow-y: auto;
  padding: 10px;
  max-height: 100vh;
  display:flex;
  flex-direction:column;
  gap:10px;
  justify-items: center;
  align-items: center;



`;
// Label
export const Label = styled.text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  text-align: center;
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