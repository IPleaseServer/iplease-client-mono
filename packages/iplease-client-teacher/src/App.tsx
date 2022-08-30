import React from 'react';

import { Global, css } from '@emotion/react';
import { ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <AppRouter />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
