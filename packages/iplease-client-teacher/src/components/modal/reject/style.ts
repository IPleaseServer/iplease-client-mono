import styled from '@emotion/styled';

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: 2px solid #eaeaea;
  border-radius: ${({ theme }) => theme.palette.borderRadius};
  height: 144px;
  padding: 18px;
  outline-color: ${({ theme }) => theme.palette.hue.pink};
  font-size: ${({ theme }) => theme.palette.fontSize.small};
`;

export default Textarea;
