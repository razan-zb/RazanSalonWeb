import React , { useEffect }from 'react';
import { Link } from 'react-router-dom'; 
import { WelcomeFrame,LogIn,SignUp,ButtonsContainer } from './mainPageStyling'; 
import { useTranslation } from 'react-i18next';

const MainScreen = () => {
  const { i18n,t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    updateRTL(lng);
    localStorage.setItem('language', lng);

  };

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
        <Link to="/login">
          <LogIn>{t('login')}</LogIn>
        </Link>
        <Link to="/visitors">
          <SignUp>{t('SignUp')}</SignUp>
        </Link>
        <div>
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('hr')}>Hebrew</button>
          <button onClick={() => changeLanguage('ar')}>Arabic</button>
       </div>
      </ButtonsContainer>
      
    </WelcomeFrame>
  );
};

export default MainScreen;