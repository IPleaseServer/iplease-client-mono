import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 70.313rem;
  margin: 50px auto;
`;

export const H1 = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.palette.hue.pink};
  font-weight: ${({ theme }) => theme.palette.fontWeight.bold};
`;

export const Section = styled.section`
  display: flex;
  gap: 50px;
`;
