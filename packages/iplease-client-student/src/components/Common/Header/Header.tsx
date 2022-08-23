import { css } from '@emotion/react';

const Header: React.FC = () => {
  const style = css`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  `;

  return <header css={style} />;
};

export default Header;
