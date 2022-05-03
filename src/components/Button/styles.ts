import styled from 'styled-components';
import { IButton } from './types';

export const StyledButton = styled('button')<IButton>`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
  border-radius: 8px;
  padding: 10px 16px 10px 16px;

  color: white;
  color: ${(props) => (props.color ? props.color : 'black')};
  background: ${(props) => (props.background ? props.background : 'white')};
  cursor: pointer;

  font-family: 'Inter-Bold', sans-serif;
  font-weight: medium;
  border: ${(props) =>
    props.bordered
      ? `1px solid ${props.theme.colors.gray200}`
      : '0px solid white'};
`;
