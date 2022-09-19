import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const Description = styled.span`
  font-weight: ${({ theme }) => theme.palette.fontWeight.extraBold};
  color: ${({ theme }) => theme.palette.hue.gray};
  font-size: ${({ theme }) => theme.palette.fontSize.extraSmall};
`;
