import styled from '@emotion/styled';

import { theme } from '@common/styles';

const defaultStyles: ReactModal.Styles = {
  overlay: {
    zIndex: 3,
    position: 'fixed',
    inset: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000033',
  },
  content: {
    zIndex: 3,
    inset: '40px',
    overflow: 'hidden',
    borderRadius: '15px',
    background: '#FFFFFF',
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
    gap: '30px',
    minWidth: '360px',
  },
};

export const ModalHeading = styled.h1`
  font-weight: ${theme.palette.fontWeight.bold};
  font-size: ${theme.palette.fontSize.medium};
`;

export default defaultStyles;
