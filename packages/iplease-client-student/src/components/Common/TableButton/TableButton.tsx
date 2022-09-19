import { css } from '@emotion/react';

import { colors, theme } from '@common/styles';

import RightArrow from 'assets/RightArrow';

interface TableButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TableButton: React.FC<TableButtonProps> = ({ children, onClick }) => {
  const style = css`
    display: grid;
    place-items: center;
    button {
      padding: 0;
      border: none;
      background: none;
      color: ${colors.pink};
      cursor: pointer;
      font-weight: ${theme.palette.fontWeight.regular};
      font-size: ${theme.palette.fontSize.extraSmall};
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.625rem;
    }
  `;

  return (
    <div css={style}>
      <button type="button" onClick={onClick}>
        {children}
        <RightArrow />
      </button>
    </div>
  );
};

export default TableButton;
