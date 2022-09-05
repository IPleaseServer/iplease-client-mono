import styled from '@emotion/styled';

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: 0.125rem solid #eaeaea;
  border-radius: ${({ theme }) => theme.palette.borderRadius};
  height: 9rem;
  padding: 1.125rem;
  outline-color: ${({ theme }) => theme.palette.hue.pink};
  font-size: ${({ theme }) => theme.palette.fontSize.small};
`;

export default Textarea;
