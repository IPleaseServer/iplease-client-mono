import React, { useState } from 'react';

import { Button, Input } from '@common/components';

import authAuthCode from 'src/api/auth';
import LinkStyle from 'src/style/linkStyle';

import AuthWrapper from './style';

interface AuthInputProps {
  onClick: () => void;
  isHidden: boolean;
  authName: string;
}

function AuthInput(props: AuthInputProps): JSX.Element {
  const { onClick, isHidden, authName } = props;
  const [isComplate, setIsComplate] = useState<boolean>(false);
  const [authNumber, setAuthNumber] = useState<string>('');
  if (isHidden || isComplate) {
    return <div />;
  }
  return (
    <>
      <AuthWrapper>
        <Input
          className="input"
          value={authNumber}
          onChange={e => {
            const limitValue = e.currentTarget.value.slice(0, 6);
            setAuthNumber(limitValue);
          }}
          type="number"
          placeholder="인증번호 6자리"
        />
        <Button
          onClick={async () => {
            setAuthNumber('');
            await authAuthCode(authNumber, authName);
            setIsComplate(true);
          }}
          type="button"
          size="small"
          text="인증"
        />
      </AuthWrapper>
      <button onClick={onClick} type="button" css={LinkStyle}>
        인증번호 재전송
      </button>
    </>
  );
}

export default AuthInput;
