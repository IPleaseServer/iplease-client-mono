import { css } from '@emotion/react';

import Logo from 'assets/Logo';
import { NavItem } from 'components/NavItem';

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
      }
    }
  `;

  return (
    <header css={style}>
      <nav>
        <Logo size="small" />
        <ul>
          <NavItem>IP 할당 신청</NavItem>
          <NavItem>내 정보</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
