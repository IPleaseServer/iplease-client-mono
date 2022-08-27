import React, { useState } from 'react';

import { Input } from '@common/components';

import { identifier } from 'src/api/auth';
import AuthInput from 'src/components/auth/auth';
import LinkStyle from 'src/style/linkStyle';

function TeacherInput(): JSX.Element {
  const [id, setId] = useState('');
  const [isComplate, setIsComplate] = useState<boolean>(false);

  function check() {
    setIsComplate(true);
    identifier(id);
  }

  return (
    <>
      <Input
        value={id}
        onChange={e => {
          setIsComplate(false);
          setId(e.currentTarget.value);
        }}
        type="text"
        placeholder="교사 인증 단어"
      />
      {!isComplate && (
        <button type="button" css={LinkStyle} onClick={check}>
          {!isComplate && '교사 인증하기'}
        </button>
      )}
      <AuthInput
        isHidden={!isComplate}
        // eslint-disable-next-line react/jsx-no-bind
        onClick={check}
        authName="teacherCode"
      />
    </>
  );
}

export default TeacherInput;
