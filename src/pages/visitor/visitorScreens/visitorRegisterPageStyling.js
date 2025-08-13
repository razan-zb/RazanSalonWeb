import styled from 'styled-components';

/* Theme color similar to your screenshot */
const ACCENT = '#A8D5BA';     // hot pink bar + card
const ACCENT_DARK = '#4EA667';
const ACCENT_BTN = '#1B5E20'; // orange-ish button like screenshot
const PLACEHOLDER_GREY = "#666";


export const InputIcon = styled.span`
  display: flex;
  align-items: center;
  margin-inline-end: 8px; /* GAP here */
  color: ${PLACEHOLDER_GREY};
`;

export const Screen = styled.div`
  min-height: 100vh;
  background: #f4f4f5;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const BrandBar = styled.header`
  background: ${ACCENT};
  color: #fff;
  padding: 14px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
`;

export const BrandTitle = styled.h1`
  margin: 0;
  font-size: 22px;
  font-weight: 800;
`;

export const CenterWrap = styled.div`
  /* center the block both horizontally & vertically */
  max-width: 560px;
  margin: 0 auto;
  padding: 24px 16px;
  display: grid;
  gap: 18px;
  align-content: center;    /* vertical centering within available space */
  justify-items: center;    /* horizontal centering of children */
`;

export const SmallLinkRow = styled.div`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  color: ${ACCENT_DARK};
  font-weight: 600;

  svg { font-size: 16px; }
`;

export const SmallLink = styled.span`
  cursor: pointer;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

export const Card = styled.div`
  width: 100%;
  background: ${ACCENT};
  color: #fff;
  border-radius: 28px;
  padding: 28px 22px;
  display: grid;
  gap: 18px;
  box-shadow: 0 10px 28px rgba(0,0,0,0.18);
`;

export const CardTitle = styled.h2`
  margin: 0 0 6px 0;
  font-size: 28px;
  font-weight: 800;
  text-align: center;
  color:#1B5E20;
`;

export const InputWrap = styled.div`
  position: relative;
  gap: 12px;
  border-bottom: 1.5px solid rgba(0,0,0,0.3);

`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1.5px solid rgba(255,255,255,0.6);
  padding: 14px 44px 10px 12px;
  color: #000;
  font-size: 18px;
  outline: none;

  ::placeholder {
    color: ${PLACEHOLDER_GREY};
  }  &:focus {
    border-bottom-color: #fff;
    box-shadow: 0 2px 0 0 #fff;
  }
`;

export const TrailingIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #1B5E20;
  opacity: 0.9;
  pointer-events: none;

  svg { font-size: 18px; }
`;

export const SubmitButton = styled.button`
  background: ${ACCENT_BTN};
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: filter .15s ease, transform .15s ease;
  width: min(360px, 100%);
  justify-self: center;

  &:hover { filter: brightness(1.05); transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 16px;
  margin-top: -6px;
`;