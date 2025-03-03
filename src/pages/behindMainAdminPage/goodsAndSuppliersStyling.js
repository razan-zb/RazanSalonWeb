import styled from 'styled-components';

// Main Container
export const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background: #fdfcf4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  align-content:center;
  justify-content:center;
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
  text-align: left;
  display: flex;
  align-items: center;
`;

// Title
export const Title2 = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 15px;
`;

export const Con = styled.div`
  align-self:flex-start;
  text-align: left;
`;
// Section Title
export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  margin-top: 20px;
  text-align: right;
`;

// No Data Message
export const NoDataMessage = styled.p`
  font-size: 16px;
  color: #888;
  text-align: center;
  margin-top: 10px;
`;
export const ModalTitle = styled.h2`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
  color: #bf9f00;
`;

// Input Field
export const InputField = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  background-color: #fff;
  width: 90%; /* Ensures proper sizing */
`;

// Inner Container
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 0px;
`;
export const Title = styled.text`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  color: #bf9f00;
  text-align: center;
  margin-bottom:30px;
  
`;
// Modal Buttons Container
export const ModalButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  align-items: center;
  align-self:center;
  text-align: center;
  gap: 5px;
`;

// Save Button
export const SaveButton = styled.button`
  background-color: #BF9F00;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 100%;
  
  &:hover {
    background-color: #a07f00;
  }
`;

export const ButtonText = styled.text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  align-self:center;
`;
export const ButtonContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;
// Card Container
export const Card = styled.div`
  background: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

// Card Content
export const CardContent = styled.div`
  text-align: left;
`;

export const ScrollContainer = styled.div`
  max-height: 400px; /* Set a max height for the scrollable area */
  overflow-y: auto; /* Enable vertical scrolling */
  padding: 10px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Card Text
export const CardText = styled.p`
  font-size: 16px;
  color: #444;
  margin: 5px 0;
  text-align: right;

`;

// Add Button
export const AddButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: white;
  background: #bf9f00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  margin-top: 10px;

  &:hover {
    background: #a07f00;
  }
`;