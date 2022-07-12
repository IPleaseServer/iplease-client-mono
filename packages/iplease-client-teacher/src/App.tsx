import React from 'react';

import { Global, css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { theme } from '@common/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>test</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
