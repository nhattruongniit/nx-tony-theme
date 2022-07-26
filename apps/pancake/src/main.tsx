/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles';

// themes
import { palette } from 'libs/themes/minimal/src/styles';

import App from './app/app';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme: ThemeOptions = createTheme({
  palette: palette.light
});


root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
