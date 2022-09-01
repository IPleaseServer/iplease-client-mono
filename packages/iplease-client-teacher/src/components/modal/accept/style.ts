import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Description = styled.p`
  margin-top: 5px;
  color: ${({ theme }) => theme.palette.hue.pink};
  font-size: ${({ theme }) => theme.palette.fontSize.extraSmall};
`;
