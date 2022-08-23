import { css } from '@emotion/react';

import { colors, theme } from '@common/styles';

import Logo from 'assets/Logo';

const Header: React.FC = () => {
  const style = css`
    width: 100%;
    height: 4.875rem;
    display: grid;
    place-items: center;
    nav {
      width: 70.5rem;
      height: inherit;
      display: flex;
      align-items: center;
      justify-content: space-between;
      ul {
        height: inherit;
        display: flex;
        align-items: center;
        gap: 2.5rem;
        justify-content: space-between;
        li {
          height: inherit;
          display: grid;
          place-items: center;
          font-weight: ${theme.palette.fontWeight.bold};
          color: ${colors.black};
        }
      }
    }
  `;

  return (
    <header css={style}>
      <nav>
        <Logo size="small" />
        <ul>
          <li>IP 할당 신청</li>
          <li>내 정보</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
