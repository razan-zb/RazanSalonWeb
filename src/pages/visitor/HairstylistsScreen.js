import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Import back arrow icon
import * as SC from './visitorsPageStyling';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HairstylistsScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <SC.Container>

      <SC.Con>
        <FaArrowLeft
          size={30}
          color="#BF9F00"
          onClick={() => navigate(-1)}  
          style={{ cursor: 'pointer', marginBottom: '10px'}}
        />
      </SC.Con>
      <SC.StylistName>{t('Description')}</SC.StylistName>

      {/* Stylist Info */}
      <SC.StylistContainer>
        <SC.FrameSection>
          <SC.Images
            src="https://res.cloudinary.com/dxr9o0iqj/image/upload/v1740049194/Black_and_White_Clean_Simple_Photo_Collage_Fashion_Facebook_Cover_bg0f06.png"
            alt="Hairstylist Image"
            style={{ width: 350, height: 200, borderRadius: 5 }}
          />
          <SC.StylistInfo>{t('P1')}</SC.StylistInfo>
        </SC.FrameSection>

        <SC.FrameSection2>
        <SC.VideoContainer>
          <video 
            src="https://res.cloudinary.com/dxr9o0iqj/video/upload/v1741961315/Black_and_White_Clean_Simple_Photo_Collage_Fashion_Facebook_Cover_kkec35.mp4" 
            autoPlay 
            muted
            loop
          />
        </SC.VideoContainer>
          <SC.StylistInfo>{t('P2')}</SC.StylistInfo>
        </SC.FrameSection2>

        <SC.FrameSection>
          <SC.Images
            src="https://res.cloudinary.com/dxr9o0iqj/image/upload/v1741801105/2_xlekv4.png"
            alt="Mario Hairstylist"
            style={{ width: 350, height: 220, borderRadius: 5 }}
          />
          <SC.StylistInfo>{t('P3')}</SC.StylistInfo>
        </SC.FrameSection>
      </SC.StylistContainer>
    </SC.Container>
  );
};

export default HairstylistsScreen;