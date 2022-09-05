import { css } from '@emotion/react';

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
  `;

  return <div css={style}>{children}</div>;
};

export default ModalWrapper;
