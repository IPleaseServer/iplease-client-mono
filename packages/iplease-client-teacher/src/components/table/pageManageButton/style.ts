import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Description = styled.span`
  font-weight: ${({ theme }) => theme.palette.fontWeight.extraBold};
  color: ${({ theme }) => theme.palette.hue.gray};
  font-size: ${({ theme }) => theme.palette.fontSize.extraSmall};
`;
