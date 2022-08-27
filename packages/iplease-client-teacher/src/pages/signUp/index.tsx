import React, { useState } from 'react';

import toast from 'react-hot-toast';

import { Button, Input } from '@common/components';
import { getValue, removeValue } from '@common/utils/storage/storage';

import register from 'src/api/register';
import Logo from 'src/asset/logo';
import EmailInput from 'src/components/auth/input/email';
import TeacherInput from 'src/components/auth/input/teacher';

import * as S from './style';

function SignUp(): JSX.Element {
  const [password, setPassword] = useState<string>();
  const [name, setName] = useState<string>();

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const emailToken = getValue<string>('emailToken');
    const teacherCode = getValue<string>('teacherCodeToken');

    if (!emailToken) {
      toast.error('이메일 인증을 먼저 해주세요.');
      return;
    }

    if (!teacherCode) {
      toast.error('교사 인증을 먼저 해주세요.');
      return;
    }

    if (!name || !password) {
      toast.error('빈칸을 채워주세요.');
      return;
    }

    removeValue('emailToken');
    removeValue('teacherCodeToken');

    register({ name, password, teacherCode, emailToken });
  }

  return (
    <S.Wrapper>
      <Logo />
      <S.Form>
        <S.InputWrapper>
          <EmailInput />
          <TeacherInput />
          <Input
            className="input"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            type="text"
            placeholder="이름"
          />
          <Input
            className="input"
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            type="password"
            placeholder="password"
          />
        </S.InputWrapper>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button onClick={onSubmit} type="submit" size="big" text="회원가입" />
      </S.Form>
    </S.Wrapper>
  );
}

export default SignUp;
