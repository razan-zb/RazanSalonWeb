import React from 'react';
import { IoExitOutline, IoSettingsOutline } from 'react-icons/io5'; // Ionicons for web
import logoSource from '../../assest/images/Logo.png';
import {
  TopBarContainer,
  ButtonExit,
  IconExit,
  LogoContainer,
  LogoImage,
  ButtonSetting,
} from './adminStyling';

const TopBar = ({ onExit, onSettings }) => {
  return (
    <TopBarContainer>
      {/* Exit Button */}
      <ButtonExit onClick={onExit}>
        <IoExitOutline size={30} color="#935B16" />
      </ButtonExit>

      <LogoContainer>
        <LogoImage src={logoSource} alt="Logo" />
        <IconExit>Admin Panel</IconExit>
      </LogoContainer>

      <ButtonSetting onClick={onSettings}>
        <IoSettingsOutline size={30} color="#935B16" />
      </ButtonSetting>
    </TopBarContainer>
  );
};

export default TopBar;