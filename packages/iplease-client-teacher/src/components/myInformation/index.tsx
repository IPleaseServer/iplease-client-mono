import React, { useState } from 'react';

import { useQuery } from 'react-query';
import { Popover } from 'react-tiny-popover';

import instance from 'src/api/axois/axois';
import { logout } from 'src/api/login';
import getProfile from 'src/api/profile';
import ProfileImg from 'src/style/profileImg';
import { ProfileRes } from 'types';

import EditProfile from '../modal/editProfile';

import * as S from './style';

function Content(): JSX.Element {
  const { data, isLoading, isError } = useQuery<ProfileRes>(
    'getProfile',
    getProfile
  );

  if (isLoading) return <>loading</>;

  if (isError || !data) return <>error</>;

  const { profileImage, name, permission, accountId } = data.common;

  instance.defaults.headers.common['X-Authorization-Id'] = accountId;

  return (
    <>
      <S.Information>
        <ProfileImg size={50} src={profileImage} />
        <S.ProfileName>{name}</S.ProfileName>
      </S.Information>
      <EditProfile
        permission={permission}
        name={name}
        profileImage={profileImage}
      >
        <S.ProfileButton>프로필 수정하기</S.ProfileButton>
      </EditProfile>
      <S.Logout onClick={logout}>로그아웃</S.Logout>
    </>
  );
}

function MyInformation(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover
      isOpen={isOpen}
      positions={['bottom']}
      align="end"
      content={
        <S.ContentWrapper>
          <Content />
        </S.ContentWrapper>
      }
    >
      <S.PopoverButton
        isOpen={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        내 정보
      </S.PopoverButton>
    </Popover>
  );
}

export default MyInformation;
