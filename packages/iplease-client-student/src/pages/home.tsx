import { css } from '@emotion/react';

import { Header } from 'components/Common/Header';
import { DashBoard } from 'components/DashBoard';

const HomePage: React.FC = () => {
  const mainStyle = css`
    width: 100%;
    padding: 0 calc((100vw - 70.5rem) / 2);
  `;

  return (
    <div>
      <Header />
      <main css={mainStyle}>
        <DashBoard />
      </main>
    </div>
  );
};

export default HomePage;
