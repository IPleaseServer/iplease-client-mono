import { css } from '@emotion/react';

import { Header } from 'components/Common/Header';

const HomePage: React.FC = () => {
  const style = css`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  `;

  return (
    <div css={style}>
      <Header />
    </div>
  );
};

export default HomePage;
