import styled from "styled-components";
import DesktopBackground from '../../assest/images/WelcomeFrameDesktop.png';
import MobileBackground from '../../assest/images/WelcomeFrameMobile.png';

export const WelcomeFrame = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${MobileBackground}) no-repeat center center;
  background-size: cover; 



  @media screen and (min-width: 769px) {
    background-size: cover;
    background: url(${DesktopBackground}) no-repeat center center;

  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 769px) {
    margin-top: 180px;

  }

  
`;

export const LogIn = styled.button`
  background-color: #CB8632; 
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  align-self: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b3742c; 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #CB8632;
  }
`;

export const SignUp = styled(LogIn)`
  background-color: transparent;
  color: #CB8632;
  font-size: 16px;

  &:hover {
    background-color: #CB8632;
    color: #fff;
  }
`;


export const LogInTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const ContainerForLogIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

export const SignUpTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const ContainerForSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

