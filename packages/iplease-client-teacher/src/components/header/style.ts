import styled from '@emotion/styled';

import { colors, theme } from '@common/styles';

interface ListProps {
  isHere: boolean;
}

export const HeaderWrapper = styled.header`
  width: 100vw;
  display: flex;
  justify-content: center;
  svg {
    margin: 0.875rem 0;
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 70.313rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  height: 100%;
`;

export const Ul = styled.ul`
  font-weight: ${theme.palette.fontWeight.bold};
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  height: 100%;
`;

export const List = styled.li<ListProps>`
  color: ${({ isHere }) => (isHere ? colors.pink : colors.black)};
  border-bottom: ${({ isHere }) =>
    isHere ? `2px solid ${colors.pink}` : 'none'};
  padding-top: 2rem;
  height: 100%;
`;
