import styled from '@emotion/styled';

interface ProfileImgProps {
  size: number;
}

const ProfileImg = styled.img<ProfileImgProps>`
  width: ${({ size }) => size / 16}rem;
  height: ${({ size }) => size / 16}rem;
  border-radius: 50%;
`;

export default ProfileImg;
