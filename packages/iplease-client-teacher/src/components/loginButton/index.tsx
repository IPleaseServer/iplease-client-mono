import React, { MouseEventHandler } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '@common/components';

import URL from 'src/config/url';
import LinkStyle from 'src/style/linkStyle';

import ButtonWrapper from './style';

interface LoginButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function LoginButton(props: LoginButtonProps): JSX.Element {
  const { onClick } = props;
  return (
    <ButtonWrapper>
      <Button onClick={onClick} type="submit" size="big" text="로그인" />
      <p css={LinkStyle}>
        <Link to={URL.signUp}>회원가입</Link>/
        <Link to={URL.changePassword}>비밀번호 재설정</Link>
      </p>
    </ButtonWrapper>
  );
}

export default LoginButton;
