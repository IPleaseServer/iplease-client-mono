import React, { useState } from 'react';

import toast from 'react-hot-toast';

import { Input } from '@common/components';

import login from 'src/api/login';
import Logo from 'src/asset/logo';
import LoginButton from 'src/components/loginButton';

import * as S from './style';

function SignIn(): JSX.Element {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault();

    if (!email || !password) {
      toast.error('빈칸을 채워주세요.');
      return;
    }

    login({ email, password });
  }

  return (
    <S.Wrapper>
      <Logo />
      <S.Form>
        <S.InputWrapper>
          <Input
            value={email}
            onChange={e => {
              const limitValue = e.currentTarget.value.slice(0, 6);
              setEmail(limitValue);
            }}
            type="text"
            placeholder="email"
            postfix="@gsm.hs.kr"
            max={6}
          />
          <Input
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            type="password"
            placeholder="password"
          />
        </S.InputWrapper>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <LoginButton onClick={onSubmit} />
      </S.Form>
    </S.Wrapper>
  );
}

export default SignIn;
