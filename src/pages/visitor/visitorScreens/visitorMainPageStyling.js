import styled from 'styled-components';

export const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
  padding: 16px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  align-self:flex-end;
  
`;

export const Title = styled.h1`
  margin: 4px 0 0 0;
  font-size: 28px;
  color: #1f2937;
  text-align: center;
`;

export const SubTitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: #6b7280;
  text-align: center;
`;

export const ButtonGrid = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

export const ActionButton = styled.button`
  background: #ffffff;
  border: 1px solid #46A55F;
  border-radius: 16px;
  padding: 18px 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column; /* icon above text */
  align-items: center;    /* center horizontally */
  justify-content: center;/* center vertically */
  gap: 10px;
  text-align: center;     /* center text inside */
  transition: transform 120ms ease, box-shadow 120ms ease, border-color 120ms ease;
  min-height: 150px;      /* optional: ensure button height for vertical centering */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
    border-color: #d1d5db;
  }

  svg {
    color: #227439;
  }
`;
export const ButtonText = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: #111827;
`;

export const ButtonHint = styled.span`
  font-size: 15px;
  color: #6b7280;
`;

export const FooterNote = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
  text-align: center;
`;

export const FooterLink = styled.span`
  color: #227439;
  cursor: pointer;
  text-decoration: underline;
`;



export const Container2 = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TopBar2 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: column;

`;

export const PageTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: #1f2937;
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
  color: #111827;
`;

export const CancelButton = styled.button`
  background: #fff1f2;
  color: #b91c1c;
  border: 1px solid #fecdd3;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #fee2e2;
  }
`;

export const DateText = styled.span`
  font-size: 16px;
`;

export const ListItem1 = styled.li`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
  color: #111827;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
