import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ContainerForLogIn, LogInTitle, InputBox, LoginButton, ButtonText, BackArrow, LogInLabels, Checkbox, ShownPassword,InnerContainer } from './mainPageStyling';
import { useNavigate } from 'react-router-dom';
import * as Functions from '../../assest/helpers/api';

const LogInScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLoginPress = () => {
    navigate('/admin');
  };

  const logIn = async () => {
    if (email === '' || password === '') {
      alert('Login Failed: Empty inputs. Please try again.');
    } else {
      const respond = await Functions.logIn(email, password);
      if (respond.status) {
        try {
          navigate('/admin');
        } catch (error) {
          console.error('Error saving user details', error);
        }
      } else {
        alert('Login Failed: Incorrect username or password. Please try again.');
      }
    }
  };

  return (
    <ContainerForLogIn>
      <BackArrow onClick={() =>  navigate('/')}>
         <span style={{ fontSize: '40px', color: '#97883A' }}>←</span>
      </BackArrow>

      <LogInTitle>{t('welcome')}</LogInTitle>
      <InnerContainer>
        <div style={{ marginBottom: '20px' }}>
          <LogInLabels>{t('userName')}</LogInLabels>
          <InputBox
            type="email"
            placeholder={t('enterYourEmail')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <LogInLabels>{t('password')}</LogInLabels>
          <InputBox
            type={passwordVisible ? 'text' : 'password'}
            placeholder={t('enterYourPassword')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Toggle password visibility */}
        <div onClick={togglePasswordVisibility} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer',gap:5 }}>
          <Checkbox checked={passwordVisible} />
          <ShownPassword>{passwordVisible ? t('hidePassword') : t('showPassword')}</ShownPassword>
        </div>
      </InnerContainer>

      

  
      {/* Login Button */}
      <LoginButton onClick={logIn}>
         <ButtonText>{t('login')}</ButtonText>
      </LoginButton>
    </ContainerForLogIn>
  );
};

export default LogInScreen;