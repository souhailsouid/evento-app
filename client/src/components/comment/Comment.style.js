import styled from 'styled-components';
import { Button } from '@mui/material';

export const Div = styled.div`
  border: 2px solid rgb(255, 227, 192);
  border-radius: 10px;
  text-align: left;
  margin: 1rem auto;
  padding: 1rem;
`;
export const Card = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 1rem;
  margin: 0.5rem 0 1rem 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgb(0, 0, 0, 0.03);
    opacity: 0.63;
  }
`;

export const Description = styled.p`
  color: rgb(26, 32, 39);
`;

export const Auteur = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.3125rem;
`;

export const Span = styled.span`
  color: var(--color-grey8, #7b7b7a);
`;

export const StyledButton = styled(Button)`
  color: #000;
  border: none;
`;
