import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary50: '#F9F5FF',
    primary700: '#6941C6',

    gray50: '#F9FAFB',
    gray100: '#F2F4F7',
    gray200: '#EAECF0',
    gray500: '#667085',
    gray700: '#344054',
    gray900: '#101828',

    success50: '#ECFDF3',

    blue50: '#EFF8FF',
    blue700: '#175CD3',

    indigo50: '#EEF4FF',
    indigo700: '#3538CD',
  },
};

export type Colors = keyof typeof theme.colors;
