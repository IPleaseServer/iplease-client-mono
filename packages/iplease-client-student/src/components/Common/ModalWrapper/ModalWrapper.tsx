import { useEffect } from 'react';

import { css } from '@emotion/react';

import { colors, theme } from '@common/styles';

import useModal from 'hooks/useModal';

interface ModalWrapperProps {
  children: React.ReactNode;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  setModalVisible,
}) => {
  const [el, clickOutside] = useModal(setModalVisible);

  const style = css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background: #0000007c;
    display: grid;
    place-items: center;
    .inner-wrapper {
      background-color: ${colors.white};
      border-radius: ${theme.palette.borderRadius};
      padding: 1.875rem;
    }
  `;

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [clickOutside]);

  return (
    <div css={style}>
      <div className="inner-wrapper" ref={el}>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
