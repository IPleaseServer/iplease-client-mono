import React from 'react';

import { useLocation, Link } from 'react-router-dom';

import { getValue } from '@common/utils/storage/storage';

import Logo from 'src/asset/logo';
import URL from 'src/config/url';

import * as S from './style';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  const isLogin = getValue('accessToken') !== undefined;

  const isHome = pathname === '/';

  return (
    <S.HeaderWrapper>
      <S.HeaderInner>
        <Logo size="small" />
        <S.Nav>
          <S.Ul>
            <Link
              style={{ textDecoration: 'none' }}
              to={URL.manageIpAssignments}
            >
              <S.List isHere={isHome}>IP 할당 신청</S.List>
            </Link>
            {isLogin ? (
              <S.List isHere={!isHome}>내 정보</S.List>
            ) : (
              <Link style={{ textDecoration: 'none' }} to={URL.signIn}>
                <S.List isHere={!isHome}>로그인</S.List>
              </Link>
            )}
          </S.Ul>
        </S.Nav>
      </S.HeaderInner>
    </S.HeaderWrapper>
  );
}

export default Header;
