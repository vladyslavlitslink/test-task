import styled from 'styled-components';
import { Props } from './types';

export const StyledTag = styled.div<Props>`
  display: inline-flex;
  flex-shrink: 0;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  padding: 6px 9px;
  gap: 7px;
  background: ${({ background, theme }) =>
    background ? theme.colors[background] : 'red'};

  div {
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background: #027a48;
  }
`;
