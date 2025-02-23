import styled from 'styled-components';

// SafeAreaView (adjusted for web layout)
export const SafeAreaViewS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top:70px;
`;
export const Con = styled.div`
  display: flex;
`;




export const Temp = styled.h1`
  font-size: 18px; 
  font-weight: bold;
  color: #BF9F00; 
  margin: 0;
`;

// SmallContainer
export const SmallContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (max-width: 768px) {
    margin-top:70px;

  }

`;

export const SmallContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
  @media (max-width: 768px) {

  }
`;

export const FirstSectionTitle = styled.span`
    font-size:24px;
    font-weight:bold;
    color: #5a3223;
    font-family: cursive;
    margin-top:20px;

`

// First Section
export const FirstSectionContainer = styled.div`
  height: 150px;
  width: 90%;
  background-color: #FDF5E6; 
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
  background-color: ${({ bgcolor }) => bgcolor || '#E6A556'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;

  /* Ensure bgColor doesn't appear in the DOM */
  &[bgcolor] {
    background-color: ${({ bgcolor }) => bgcolor};
  }
`;

// Text inside mini boxes
export const MiniBoxText = styled.span`
  font-size: 14px;
  color: #fff;
  text-align: center;
`;
export const FirstSectionText = styled.h2`
    font-size: 26px;
    font-weight: bold;
    color: #1D1D1B;
    font-family: cursive;
    margin-top: 20px;
`;

export const FirstSectionContainer1 = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  padding: 0 10px;
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
  display: flex;
  justify-content: center;
  flex-direction:column;
  @media (max-width: 768px) {
    margin-top:30px

  }

  
`;

export const SecondSectionContainer2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction:row;
  justify-content: space-evenly;
  width: 100%;
  

  @media (max-width: 768px) {
    flex-direction:column;
    z-index:1000;
    justify-content: center;
    gap:0;

  }
  




`


export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-top: 0px;
  color: #1D1D1B;
 font-family: cursive;
`;

// Container for each statistic
export const Container1 = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  flex-direction:column;
  width: 200px;
  justify-content: center;
  height: 200px;
  text-align:center;

  @media (max-width: 768px) {
    margin-top: 0px;
    margin-bottom: 10px;
    height:100px;

  }

`;

// Text for the statistics
export const StatText = styled.p`
  font-size: 18px;
  color: #1D1D1B;
  font-weight: bold;
`;

// Clients
export const ClientsContainer = styled.div`
  height: 100px;
  width: 150px;
  background-color: #1D1D1B;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 5px; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #a75d22; 
  }
`;

// Booking
export const BookingContainer = styled(ClientsContainer)`
  /* Same styles as ClientsContainer */
`;


// Goods
export const Goods = styled(ClientsContainer)`
  /* Same styles as ClientsContainer */
`;

// Goods Text
export const GoodsText = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #BF9F00; 

`;



// TopBar Container
export const TopBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1D1D1B;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed; /* Keeps it at the top */
  top: 0;
  z-index: 100;
`;

// Logo Container
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Logo Image
export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

// Logo Text
export const LogoText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #935b16;
  margin: 0;
`;

// Exit Button
export const ButtonExit = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #935b16;
  display: flex;
  align-items: center;
  padding: 5px;
  &:hover {
    color: #a75d22;
  }
`;

// Exit Icon
export const IconExit = styled.span`
  font-size: 24px;
`;

// Settings Button
export const ButtonSetting = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #935b16;
  display: flex;
  align-items: center;
  padding: 5px;
  &:hover {
    color: #a75d22;
  }
`;

// Settings Icon
export const IconSetting = styled.span`
  font-size: 24px;
`;