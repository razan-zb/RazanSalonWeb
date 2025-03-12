import styled from 'styled-components';

// Main Container
export const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Container1 = styled.div`
  background-color: #f9f9f9;
`;

// Section Wrapper
export const Section = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Section1 = styled.div`
  padding: 15px;
  background-color: #1D1D1B;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #bf9f00;
  margin: 10px;
`;

// Section Title
export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #bf9f00;
  margin-bottom: 10px;
  text-align: center;
`;

// Sub-title for each section
export const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #bf9f00;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

// Description Text
export const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 22px;
  margin-bottom: 10px;
  text-align: center;
`;

// Information Row (for phone, address, etc.)
export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap:10px;
`;

export const InfoText = styled.p`
  font-size: 16px;
  color: #333;
  margin-left: 8px;
`;

// Profile Card for hairstylists
export const ProfileCard = styled.div`
  width: 120px;
  margin-right: 10px;
  text-align: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-bottom: 8px;
`;

export const ProfileName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
`;

export const ProfileText = styled.p`
  font-size: 14px;
  color: #666;
`;

// Service Item
export const ServiceItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

export const ServiceName = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const ServicePrice = styled.p`
  font-size: 14px;
  color: #666;
`;

// Testimonial Card
export const TestimonialCard = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const TestimonialText = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #444;
  margin-bottom: 6px;
`;

export const TestimonialAuthor = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #bf9f00;
  text-align: right;
`;

// Gallery Image
export const GalleryImage = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 10px;
  border-radius: 10px;
`;

// FAQ Item
export const FAQItem = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 6px;
`;

export const FAQAnswer = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  line-height: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const BackButton = styled.button`
  padding: 5px;
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #bf9f00;
`;
export const Con = styled.div`
  align-self:flex-start;
  text-align: left;
`;
export const StylistContainer = styled.div`
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
`;

export const StylistName = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`;

export const StylistInfo = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-top: 5px;
  line-height: 1.8;
  color: #333;
  text-align: center;
  padding: 10px 15px;
`;

export const TopBarContainer = styled.div`
  height: 60px;
  background-color: #1D1D1B;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

export const ButtonExit = styled.button`
  padding: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

export const ButtonSetting = styled.button`
  padding: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const FrameSection = styled.div`
  text-align: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap:20px;

`;
export const VideoContainer = styled.div`
  width: 100%;
  max-width: 600px; /* Adjust width */
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;
export const FrameSection2 = styled.div`
  display:flex;
  flex-direction:column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap:20px;

`;



export const Images = styled.img`

`;

export const InstagramButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #bf9f00;
`;

export default {
  Container,
  Container1,
  Section,
  Section1,
  Title,
  SubTitle,
  Description,
  InfoRow,
  InfoText,
  ProfileCard,
  ProfileImage,
  ProfileName,
  ProfileText,
  ServiceItem,
  ServiceName,
  ServicePrice,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  GalleryImage,
  FAQItem,
  FAQAnswer,
  Image,
  BackButton,
  StylistContainer,
  StylistName,
  StylistInfo,
  TopBarContainer,
  ButtonExit,
  LogoContainer,
  LogoImage,
  ButtonSetting,
  FrameSection,
  InstagramButton,
};