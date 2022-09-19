import styled from '@emotion/styled';

interface PopoverButtonProps {
  isOpen: boolean;
}

export const PopoverButton = styled.button<PopoverButtonProps>`
  border: none;
  background-color: ${({ theme }) => theme.palette.hue.white};
  font-size: ${({ theme }) => theme.palette.fontSize.small};
  font-weight: ${({ theme }) => theme.palette.fontWeight.bold};
  cursor: pointer;
  color: ${props =>
    props.isOpen
      ? props.theme.palette.hue.pink
      : props.theme.palette.hue.black};
`;

export const ContentWrapper = styled.article`
  padding: 0.625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${({ theme }) => theme.palette.borderRadius};
  box-shadow: 0px 0.375rem 0.75rem rgba(51, 51, 51, 0.08);
`;

export const Information = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileName = styled.h3`
  font-size: ${({ theme }) => theme.palette.fontSize.small};
  font-weight: ${({ theme }) => theme.palette.fontWeight.bold};
  padding-left: 0.625rem;
`;

export const ProfileButton = styled.button`
  border: none;
  padding: 0.938rem 0;
  background-color: ${({ theme }) => theme.palette.hue.white};
  font-size: ${({ theme }) => theme.palette.fontSize.small};
  color: ${({ theme }) => theme.palette.hue.pink};
  cursor: pointer;
  width: 9.25rem;
`;

export const Logout = styled(ProfileButton)`
  border-top: 1px solid ${({ theme }) => theme.palette.hue.gray};
  color: ${({ theme }) => theme.palette.hue.gray};
  padding-bottom: 0.625rem;
`;
