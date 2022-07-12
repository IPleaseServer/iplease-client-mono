import { css } from '@emotion/react';

import { SignInForm } from 'components/SignInForm';

const SignInPage: React.FC = () => {
  const style = css`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  `;

  return (
    <div css={style}>
      <SignInForm />
    </div>
  );
};

export default SignInPage;
