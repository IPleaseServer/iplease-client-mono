import styled from '@emotion/styled';

const AboutButton = styled.button`
  background-color: ${({ theme }) => theme.palette.hue.white};
  font-size: ${({ theme }) => theme.palette.fontSize.small};
  border: 0;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
`;

export default AboutButton;
