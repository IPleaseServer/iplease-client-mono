import { css } from '@emotion/react';

import { theme } from '@common/styles';

const TextButtonStyle = css`
  align-self: start;
  color: ${theme.palette.hue.pink};
  font-weight: ${theme.palette.fontWeight.semiBold};
  font-size: 12px;
  background-color: ${theme.palette.hue.white};
  border: none;
  padding-left: 18px;
  cursor: pointer;
  a {
    align-self: start;
    color: ${theme.palette.hue.pink};
    font-size: 12px;
  }
`;

export default TextButtonStyle;
