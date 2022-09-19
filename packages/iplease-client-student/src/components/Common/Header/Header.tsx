import { useState } from 'react';

import { css } from '@emotion/react';

import { colors, theme } from '@common/styles';

import Logo from 'assets/Logo';
import MyInfoPopUp from 'components/MyInfoPopUp/MyInfoPopUp';
import { NavItem } from 'components/NavItem';

const Header: React.FC = () => {
  const [wantMyInfo, setWantMyInfo] = useState<boolean>(false);

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
        button {
          font-size: ${theme.palette.fontSize.small};
          font-weight: ${theme.palette.fontWeight.bold};
          color: ${colors.black};
          background: none;
          border: none;
          cursor: pointer;
        }
      }
    }
  `;

  return (
    <>
      <header css={style}>
        <nav>
          <Logo size="small" />
          <ul>
            <NavItem>IP 할당 신청</NavItem>
            <button type="button" onClick={() => setWantMyInfo(prev => !prev)}>
              내 정보
            </button>
          </ul>
        </nav>
      </header>
      {wantMyInfo && <MyInfoPopUp />}
    </>
  );
};

export default Header;
