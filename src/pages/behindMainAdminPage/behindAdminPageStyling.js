import styled from 'styled-components';

// Main Container
export const ClientsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFE0BA;
  min-height: 100vh; /* Full height of the viewport */
  padding: 20px;
`;

// Search Bar Container
export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #F6C992;
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
  color: #935B16;
  border: none;
  outline: none;
  background: transparent;
`;

// Client Name Container
export const ClientNameContainer = styled.div`
  background-color: #ECAE66;
  padding: 15px;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Client Name Text
export const ClientName = styled.p`
  font-size: 18px;
  color: #935B16;
  font-weight: bold;
  margin: 0;
`;

// Plus Button
export const PlusButton = styled.button`
  position: fixed; /* Fixed at the bottom-right of the page */
  bottom: 20px;
  right: 20px;
  background-color: #CB8632;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  color: #fff; /* Icon or text color */
  font-size: 30px;
  &:hover {
    background-color: #a75d22;
  }
`;