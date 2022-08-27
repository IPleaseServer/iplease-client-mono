import React from 'react';

import { Global, css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { Toaster } from 'react-hot-toast';

import { theme } from '@common/styles';

import AppRouter from './Router';

const globalStyles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard-dynamic-subset.css');

  ${emotionReset}

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Pretendard, sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <AppRouter />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
