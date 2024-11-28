import React from 'react';
import { Link } from 'react-router-dom'; 
import { WelcomeFrame,LogIn,SignUp,ButtonsContainer } from './mainPageStyling'; 

const MainScreen = () => {
  return (
    <WelcomeFrame>
      <ButtonsContainer>
        <Link to="/login">
          <LogIn>Log In</LogIn>
        </Link>
        <Link to="/signup">
          <SignUp>Sign Up</SignUp>
        </Link>
      </ButtonsContainer>
    </WelcomeFrame>
  );
};

export default MainScreen;