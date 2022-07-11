import { css, Global, ThemeProvider } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { theme } from '@common/styles';

import '@common/styles/src/emotion.d';

const globalStyles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.4/dist/web/static/pretendard-dynamic-subset.css');

  ${emotionReset}

  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
  </ThemeProvider>
);

export default App;
