import { useEffect, useRef, ReactNode } from 'react';

import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal') as HTMLElement;

interface ModalProps {
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const { current } = el;

    modalRoot.appendChild(current);

    // eslint-disable-next-line no-void
    return () => void modalRoot.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default Modal;
