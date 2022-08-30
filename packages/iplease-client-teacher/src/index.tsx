import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App';

const container = document.getElementById('app');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
