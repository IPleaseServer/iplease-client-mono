import { css } from '@emotion/react';

import { colors, theme } from '@common/styles';

interface ModalWrapperProps {
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  const style = css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background: #0000007c;
    .inner-wrapper {
      background-color: ${colors.white};
      border-radius: ${theme.palette.borderRadius};
      padding: 1.875rem;
    }
  `;

  return (
    <div css={style}>
      <div className="inner-wrapper">{children}</div>
    </div>
  );
};

export default ModalWrapper;
