import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import 'dotenv/config';

import { Global } from './styles/global';
import { theme } from './styles/theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Global />
    <App />
  </ThemeProvider>
);
