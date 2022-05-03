import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary50: string;
      primary700: string;

      gray50: string;
      gray100: string;
      gray200: string;
      gray500: string;
      gray700: string;
      gray900: string;

      success50: string;

      blue50: string;
      blue700: string;

      indigo50: string;
      indigo700: string;
    };
  }
}
