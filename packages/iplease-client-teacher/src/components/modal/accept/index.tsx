/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';

import ReactModal from 'react-modal';

import { Button, Input } from '@common/components';

import { ModalHeading } from 'src/style/modalStyle';

import modalController from '../modalController';

export interface AcceptProps {
  children: React.ReactNode;
}

function Accept({ children }: AcceptProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const [IP, setIP] = useState<string>();

  const [isCheck, setIsCheck] = useState(false);
  const regex = /\d{3}.\d{3}.\d{3}.\d{3}/g;

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
        <ModalHeading>할당할 IP</ModalHeading>
        <Input
          value={IP}
          onChange={e => {
            setIP(e.currentTarget.value);
            if (regex.test(e.currentTarget.value)) setIsCheck(true);
          }}
        />
        {!isCheck && <span>XXX.XXX.XXX.XXX 형식을 맞춰주세요.</span>}
        <Button size="big">확인</Button>
      </ReactModal>
    </>
  );
}

export default Accept;
