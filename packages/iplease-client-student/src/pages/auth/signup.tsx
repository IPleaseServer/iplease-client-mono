import { css } from '@emotion/react';

import { SignUpForm } from 'components/SignUpForm';

const SignUpPage: React.FC = () => {
  const style = css`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  `;

  return (
    <div css={style}>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
