import { FC, ReactElement } from 'react';

import { ThemeProvider } from '@emotion/react';
import { render, RenderOptions } from '@testing-library/react';

import { theme } from '@common/styles';

interface AllTheProvidersProps {
  children?: React.ReactNode;
}

const AllTheProviders: FC<AllTheProvidersProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queryies'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
