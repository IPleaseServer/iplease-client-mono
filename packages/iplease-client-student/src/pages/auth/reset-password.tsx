import { css } from '@emotion/react';

import { ResetPasswordForm } from 'components/ResetPasswordForm';

const ResetPasswordPage: React.FC = () => {
  const style = css`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  `;

  return (
    <div css={style}>
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPasswordPage;
