import styled from "styled-components";

export const ServiceCard = styled.div`
  width: 100px;
  height: 120px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ServiceImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  color: #bf9f00;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 10px;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari */
  }
`;

export const ServiceName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #bf9f00;
  text-align: center;
`;

export const BackButton = styled.button`
  z-index: 100;
  padding: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  align-self: flex-end;

`;

export const Con = styled.div`
  align-self:flex-start;
  text-align: left;
  margin-top:20px;
  right:10px;
`;

export const PageContainer = styled.div`
flex: 1;
  background-color: #fff;
  overflow-y: auto;
  height: 100vh; /* Full height scrolling */
`;



export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two images per row */
  gap: 10px;
  padding: 10px;
  @media screen and (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr); /* Two images per row */

  }
`;

export const ImageCard = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const ImageGallery = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 5px;
  object-fit: cover;

  @media screen and (min-width: 769px) {
    height: 420px;
    object-fit: contain;
  }
`;
