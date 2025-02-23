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

      {/* Stylist Info */}
      <SC.StylistContainer>
        <SC.FrameSection>
          <SC.Images
            src="https://res.cloudinary.com/dxr9o0iqj/image/upload/v1740049194/Black_and_White_Clean_Simple_Photo_Collage_Fashion_Facebook_Cover_bg0f06.png"
            alt="Hairstylist Image"
            style={{ width: 390, height: 230, borderRadius: 5 }}
          />
          <SC.StylistName>{t('Description')}</SC.StylistName>
          <SC.StylistInfo>{t('Info1')}</SC.StylistInfo>
        </SC.FrameSection>

        <SC.FrameSection>
          <SC.Images
            src="https://res.cloudinary.com/dxr9o0iqj/image/upload/v1740049194/Black_and_White_Clean_Simple_Photo_Collage_Fashion_Facebook_Cover_bg0f06.png"
            alt="Mario Hairstylist"
            style={{ width: 350, height: 200, borderRadius: 5 }}
          />
          <SC.StylistName>Mario</SC.StylistName>
          <SC.StylistInfo>Expert in hair coloring and styling.</SC.StylistInfo>
        </SC.FrameSection>

        <SC.FrameSection>
          <SC.Images
            src="https://res.cloudinary.com/dxr9o0iqj/image/upload/v1740049194/Black_and_White_Clean_Simple_Photo_Collage_Fashion_Facebook_Cover_bg0f06.png"
            alt="Mario Hairstylist"
            style={{ width: 350, height: 200, borderRadius: 5 }}
          />
          <SC.StylistName>Mario</SC.StylistName>
          <SC.StylistInfo>Expert in hair coloring and styling.</SC.StylistInfo>
        </SC.FrameSection>
      </SC.StylistContainer>
    </SC.Container>
  );
};

export default HairstylistsScreen;