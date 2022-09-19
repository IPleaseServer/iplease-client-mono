import { css } from '@emotion/react';

import { theme } from '@common/styles';

const TextButtonStyle = css`
  align-self: start;
  color: ${theme.palette.hue.pink};
  font-weight: ${theme.palette.fontWeight.semiBold};
  font-size: 0.75rem;
  background-color: ${theme.palette.hue.white};
  border: none;
  padding-left: 1.125rem;
  cursor: pointer;
  a {
    align-self: start;
    color: ${theme.palette.hue.pink};
    font-size: 0.75rem;
  }
`;

export default TextButtonStyle;
