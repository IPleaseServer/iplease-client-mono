import styled from '@emotion/styled';

export const Main = styled.main`
  max-width: 70.313rem;
  margin: 3.125rem auto;
`;

export const H1 = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.hue.pink};
  font-weight: ${({ theme }) => theme.palette.fontWeight.bold};
`;

export const Section = styled.section`
  display: flex;
  gap: 3.125rem;
`;
