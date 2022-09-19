import { css } from '@emotion/react';

import { colors, theme } from '@common/styles';

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  const isHome = children === 'IP 할당 신청';

  const style = css`
    height: inherit;
    display: grid;
    place-items: center;
    font-weight: ${theme.palette.fontWeight.bold};
    color: ${isHome ? colors.pink : colors.black};
    border-bottom: ${isHome ? `2px solid ${colors.pink}` : 'none'};
    span {
      cursor: pointer;
    }
  `;

  return (
    <li css={style}>
      <span>{children}</span>
    </li>
  );
};

export default NavItem;
