import styled from 'styled-components';

// SafeAreaView (adjusted for web layout)
export const SafeAreaViewS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;



export const Temp = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;
// SmallContainer
export const SmallContainer = styled.div`
  height: 150px;
  width: 90%;
  background-color: #F6C992;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

// First Section
export const FirstSectionContainer = styled.div`
  height: 200px;
  width: 90%;
  background-color: #f6c992;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  overflow-y: auto; 
  position: relative;

`;

// Mini box for appointments
export const MiniBoxContainer = styled.div`
  height: 40px;
  width: 100px;
  background-color: ${({ bgColor }) => bgColor || '#E6A556'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

// Text inside mini boxes
export const MiniBoxText = styled.span`
  font-size: 14px;
  color: #fff;
  text-align: center;
`;

// Arrow button at the bottom-right
export const ArrowButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #cb8632;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #a75d22;
  }
`;

// Second Section
export const SecondSectionContainer = styled.div`
  height: 300px;
  width: 90%;
  background-color: #F6C992;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

// Clients
export const ClientsContainer = styled.div`
  height: 150px;
  width: 150px;
  background-color: #CB8632;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Booking
export const BookingContainer = styled.div`
  height: 150px;
  width: 150px;
  background-color: #CB8632;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Goods
export const Goods = styled.div`
  height: 150px;
  width:150px;
  background-color: #CB8632;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Goods Text
export const GoodsText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;