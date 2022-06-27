import { css, Global, ThemeProvider } from '@emotion/react';
import { DecoratorFn } from '@storybook/react';

import { theme } from '@common/styles';

export const decorators: DecoratorFn[] = [
  Story => (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

          *,
          *::after,
          *::before {
            font-family: Pretendard, -apple-system, BlinkMacSystemFont,
              system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
              'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
              'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
              sans-serif;
          }
        `}
      />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};
