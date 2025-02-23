import React from 'react';
import { FaCog, FaSignOutAlt } from 'react-icons/fa'; // Import icons for settings and exit
import * as SC from './visitorsPageStyling';
import logoSource from '../../assest/images/Logo.png';

const TopBar = ({ onExit, onSettings }) => {
  return (
    <SC.TopBarContainer>
      {/* Settings Button */}
      <SC.ButtonSetting onClick={onSettings}>
        <FaCog size={24} color="#AF9202" />
      </SC.ButtonSetting>

      {/* Logo */}
      <SC.LogoContainer>
        <SC.LogoImage src={logoSource} alt="Salon Logo" />
      </SC.LogoContainer>

      {/* Exit Button */}
      <SC.ButtonExit onClick={onExit}>
        <FaSignOutAlt size={24} color="#AF9202" />
      </SC.ButtonExit>
    </SC.TopBarContainer>
  );
};

export default TopBar;