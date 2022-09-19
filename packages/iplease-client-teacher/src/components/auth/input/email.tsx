import React, { useState } from 'react';

import { Input } from '@common/components';

import { authEmail } from 'src/api/auth';
import AuthInput from 'src/components/auth/auth';
import LinkStyle from 'src/style/linkStyle';
import { EmailAuthResult } from 'types';

const EmailAuthResultText = {
  before: '이메일 인증하기',
  wrong: '이메일 형식이 잘못되었습니다.',
  already: '이미 존재하는 이메일입니다. 로그인하기',
  complate: '',
};

function EmailInput(): JSX.Element {
  const [email, setEmail] = useState('');
  const [emailAuthResult, setEmailAuthResult] =
    useState<EmailAuthResult>('before');

  function checkEmail() {
    const matchResult = email.match('(t|s)\\d{5}');

    if (matchResult === null) {
      setEmailAuthResult('wrong');
    } else {
      authEmail(email);
      setEmailAuthResult('complate');
    }
  }
  return (
    <>
      <Input
        value={email}
        onChange={e => {
          const limitValue = e.currentTarget.value.slice(0, 6);
          setEmailAuthResult('before');
          setEmail(limitValue);
        }}
        type="text"
        placeholder="email"
        postfix="@gsm.hs.kr"
      />
      {emailAuthResult !== 'complate' && (
        <button type="button" css={LinkStyle} onClick={checkEmail}>
          {EmailAuthResultText[emailAuthResult]}
        </button>
      )}
      <AuthInput
        isHidden={emailAuthResult === 'before'}
        // eslint-disable-next-line react/jsx-no-bind
        onClick={checkEmail}
        authName="email"
      />
    </>
  );
}

export default EmailInput;
