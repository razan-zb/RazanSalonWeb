import styled from "styled-components";
import DesktopBackground from '../../assest/images/WelcomeFrameDesktop2.png';
import MobileBackground from '../../assest/images/WelcomeFrameMobile.png';
import { Link } from "react-router-dom";

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
  margin-top: 320px;
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
  color: #6C400A;

`;

export const ContainerForLogIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction:column;
  background-color: #E6A556;
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


export const InputBox = styled.input`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #6C400A;
  border-radius: 4px;
  margin-top: 10px;
  width:300px;
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #6C400A;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #5A3409;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none; /* Remove underline */
`;
export const ButtonText = styled.span`
  font-size: 16px;
`;

export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #6C400A;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? '#6C400A' : 'white')};
  margin-right: 10px;
`;

export const ShownPassword = styled.span`
  font-size: 14px;
  color: #6C400A;
  cursor: pointer;
`;

export const BackArrow = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  font-size: 24px;
`;

export const LogInLabels = styled.label`
  font-size: 16px;
  color: #6C400A;
`;

export const InnerContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#F6C992;
    width:350px;
    height:300px;
    padding:10px;
    margin-top:20px;
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    border:1px;
    border: 2px solid #6C400A;



`;