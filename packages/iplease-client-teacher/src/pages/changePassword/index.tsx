/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';

import toast from 'react-hot-toast';

import { Button, Input } from '@common/components';
import { getValue, removeValue } from '@common/utils/storage/storage';

import changePassword from 'src/api/changePassword';
import Logo from 'src/asset/logo';
import EmailInput from 'src/components/auth/input/email';

import * as S from './style';

function ChangePassword(): JSX.Element {
  const [newPassword, setNewPassword] = useState<string>();

  function onSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const emailToken = getValue<string>('emailToken');

    if (!emailToken) {
      toast.error('이메일 인증을 먼저 해주세요.');
      return;
    }

    if (!newPassword) {
      toast.error('비밀번호를 입력해주세요.');
      return;
    }

    removeValue('emailToken');

    changePassword({ newPassword, emailToken });
  }

  return (
    <S.Wrapper>
      <Logo size="big" />
      <S.Form>
        <S.InputWrapper>
          <EmailInput />
          <Input
            className="input"
            value={newPassword}
            onChange={e => setNewPassword(e.currentTarget.value)}
            type="password"
            placeholder="새로운 비밀번호"
          />
        </S.InputWrapper>
        <Button
          onClick={onSubmit}
          type="submit"
          size="big"
          text="비밀번호 재설정"
        />
      </S.Form>
    </S.Wrapper>
  );
}

export default ChangePassword;
