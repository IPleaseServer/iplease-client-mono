import React, { useState } from 'react';

import { useQuery } from 'react-query';
import { Popover } from 'react-tiny-popover';

import getProfile from 'src/api/profile';
import { ProfileRes } from 'types';

import * as S from './style';

function Content(): JSX.Element {
  const { data, isLoading, isError } = useQuery<ProfileRes>(
    'getProfile',
    getProfile
  );

  if (isLoading) return <>loading</>;

  if (isError || !data) return <>error</>;

  return (
    <>
      <S.Information>
        <S.ProfileImg src={data.common.profileImage} />
        <S.ProfileName>{data.common.name}</S.ProfileName>
      </S.Information>
      <S.ProfileButton>프로필 수정하기</S.ProfileButton>
      <S.Logout>로그아웃</S.Logout>
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
