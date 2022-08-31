/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';

import toast from 'react-hot-toast';
import ReactModal from 'react-modal';

import { Button, Input } from '@common/components';

import { editProfile } from 'src/api/profile';
import { ModalHeading } from 'src/style/modalStyle';
import ProfileImg from 'src/style/profileImg';

import modalController from '../modalController';

import ProfileWrapper from './style';

export interface EditProfileProps {
  children: React.ReactNode;
  permission: 'USER' | 'OPERATOR' | 'ADMINISTRATOR';
  name: string;
  profileImage: string;
}

function EditProfile({
  children,
  permission,
  name,
  profileImage,
}: EditProfileProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const [isCheck, setIsCheck] = useState(false);

  const [profileImageUrl, setProfileImageUrl] = useState<string>();
  const [profileImageUrlResult, setProfileImageUrlResult] =
    useState(profileImage);

  function onClickUpload() {
    if (!profileImageUrl) {
      toast.error('유효한 이미지 링크를 입력해주세요.');
      return;
    }

    setIsCheck(true);
    setProfileImageUrlResult(profileImageUrl);
  }

  function onClickEditProfile() {
    if (isCheck) {
      editProfile({ permission, profileImage, name });
      closeModal();
    }
  }

  return (
    <>
      <div role="none" onClick={openModal}>
        {children}
      </div>
      {/* @ts-ignore */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Edit Profile Modal"
      >
        <ModalHeading>프로필 수정</ModalHeading>
        <ProfileWrapper>
          <ProfileImg size={90} src={profileImageUrlResult} />
          <Input
            onChange={e => {
              setProfileImageUrl(e.currentTarget.value);
            }}
            placeholder="사진 url을 입력하세요."
          />
          <Button size="small" onClick={() => onClickUpload()}>
            사진등록
          </Button>
        </ProfileWrapper>
        <Button
          size="big"
          disabled={!isCheck}
          color={isCheck ? 'primary' : 'default'}
          onClick={() => {
            onClickEditProfile();
          }}
        >
          수정 완료
        </Button>
      </ReactModal>
    </>
  );
}

export default EditProfile;
