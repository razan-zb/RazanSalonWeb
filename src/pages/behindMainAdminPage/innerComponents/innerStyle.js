import styled from 'styled-components';

// Main Container for the screen
export const Container = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #fdfcf4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
   min-height: 100vh;
`;
export const Con = styled.div`
  align-self:flex-start;
  text-align: left;
`;
// Back Button
export const BackButton = styled.button`
  background: none;
  border: none;
  color: #bf9f00;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
  text-align: left;
  display: flex;
  align-items: center;
`;

// Title text
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #bf9f00;
  text-align: center;
  margin-bottom: 20px;
`;

// Detail Container for Input Fields
export const DetailContainer = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

`;

// Label Text
export const Label = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
  font-weight: bold;
  text-align: right;
`;

// Input Field
export const Input = styled.input`
  width: 90%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  margin-bottom: 15px;
  outline: none;
`;

// TextArea for Notes
export const TextArea = styled.textarea`
  width: 90%;
  height: 100px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 8px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  text-align: left;
  outline: none;
  resize: none;
`;

// Button Container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// Save Button
export const Button = styled.button`
  background-color: #bf9f00;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  flex: 1;
  margin-right: 10px;

  &:hover {
    background-color: #a07f00;
  }
`;

// Delete Button
export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: 0.3s;
  flex: 1;

  &:hover {
    background-color: #cc0000;
  }
`;

// Button Text
export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;