import styled from 'styled-components';

// Screen Dimensions
const screenWidth = window.innerWidth; // for web, use window.innerWidth

// Main Container
export const Container = styled.div`
  flex: 1;
  background-color: #fdfcf4;
  padding: 20px;
  min-height: 100vh;
  text-align: center;
  align-contents:center;
  align-items:center;
  justify-content:center;


`;
export const Con = styled.div`
  align-self:flex-start;
  text-align: left;
  
`;
// Back Button
export const BackButton = styled.button`
  position: absolute;
  top: 10px;
  left: 15px;
  z-index: 100;
  background: none;
  border: none;
  cursor: pointer;
`;

// Page Title
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

// Section Label
export const Label = styled.p`
  display:flex;   
  font-size: 18px;
  font-weight: bold;
  color: #444;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    justify-content: center;
    text-align: center;

  }
  text-align: center;
  align-self:center;


`;

// Styled Select (Dropdown)
export const SelectContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 10px;
  padding: 5px;
`;

export const StyledSelect = styled.select`
  height: 50px;
  width: 100%;
  font-size: 16px;
  border-radius: 8px;
`;

// Revenue Text
export const RevenueText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
  text-align: center;
`;

// Chart Container
export const ChartContainer = styled.div`
  margin-top: 20px;
  align-items: center;
  width: ${screenWidth - 40}px;
`;

// Button Container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// Save Button
export const SaveButton = styled.button`
  background-color: #28a745;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Logout Button
export const LogoutButton = styled.button`
  background-color: #dc3545;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 30px;
`;

export default {
  Container,
  BackButton,
  Title,
  Label,
  SelectContainer,
  StyledSelect,
  RevenueText,
  ChartContainer,
  ButtonContainer,
  SaveButton,
  LogoutButton,
};