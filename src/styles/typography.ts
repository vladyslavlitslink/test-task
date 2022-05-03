import styled, { css } from 'styled-components';
import { Colors } from './theme';

type TextSize = keyof typeof textSize;
type FontWeight = keyof typeof fontWeight;

export interface Text {
  color: Colors;
  size: TextSize;
  align?: AlignSetting;
  fontWeight?: FontWeight;
}

export interface Title extends Text {}

export const textSize = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
};

export const titleSize = {
  xs: '24px',
  s: '30px',
  md: '36px',
  lg: '48px',
  xl: '60px',
  xxl: '60px',
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const textStyles = css<Text>`
  font-size: ${({ size }) => textSize[size]};
  color: ${({ color, theme }) => theme.colors[color]};
  font-weight: ${(props) => fontWeight[props.fontWeight] || 400};
  font-family: 'Inter', sans-serif;
  text-align: ${({ align }) => align || 'left'};
`;

export const StyledTitle = styled.h1<Title>`
  ${textStyles}
  font-size: ${({ size }) => titleSize[size]};
  color: ${({ color, theme }) => theme.colors[color]};
  font-weight: ${(props) => fontWeight[props.fontWeight] || 400};
`;
