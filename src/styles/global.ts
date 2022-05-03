import { createGlobalStyle } from 'styled-components';

/** Global styles */
export const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

@font-face {
font-family: 'Inter';
src: local('Inter'), url(./assets/fonts/Inter/Inter-Regular.ttf) format('truetype');

@font-face {
font-family: 'Inter';
src: local('Inter-Medium'), url(./assets/fonts/Inter/Inter-Medium.ttf) format('truetype');
font-weight: 500;
}

@font-face {
font-family: 'Inter';
src: local('Inter-Bold'), url(./assets/fonts/Inter/Inter-Bold.ttf) format('truetype');
}

@font-face {
font-family: 'Inter';
src: local('Inter-Light'), url(./assets/fonts/Inter/Inter-Light.ttf) format('truetype');
}
}
`;
