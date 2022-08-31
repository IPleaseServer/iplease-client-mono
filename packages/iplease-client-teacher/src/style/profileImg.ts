import styled from '@emotion/styled';

interface ProfileImgProps {
  size: number;
}

const ProfileImg = styled.img<ProfileImgProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`;

export default ProfileImg;
