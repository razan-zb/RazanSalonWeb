import React , { useEffect }from 'react';
import { Link } from 'react-router-dom'; 
import { ButtonText2,WelcomeFrame,LogIn,SignUp,ButtonsContainer } from './mainPageStyling'; 
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const MainScreen = () => {
  const { i18n,t } = useTranslation();
  const navigate = useNavigate();


  const handleLogInPress = () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/admin');
    } else {
      navigate('/login');
    }
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    updateRTL(lng);
    localStorage.setItem('language', lng);

  }
  const updateRTL = (language) => {
    const isRTL = language === 'ar' || language === 'hr';
    document.body.style.direction = isRTL ? 'rtl' : 'ltr';
  };
  const loadLanguage = () => {
    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      updateRTL(savedLanguage);
    }
  };

  useEffect(() => {
    loadLanguage();
  },[]);

  return (
    <WelcomeFrame>
      <ButtonsContainer>
        <ButtonText2 >
          <LogIn onClick={handleLogInPress}>{t('login')}</LogIn>
        </ButtonText2>
        <Link to="/visitors">
          <SignUp>{t('SignUp')}</SignUp>
        </Link>
      </ButtonsContainer>
      
    </WelcomeFrame>
  );
};

export default MainScreen;