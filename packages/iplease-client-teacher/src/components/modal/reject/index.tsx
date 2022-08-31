/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';

import ReactModal from 'react-modal';

import { Button } from '@common/components';

import { ModalHeading } from 'src/style/modalStyle';

import modalController from '../modalController';

export interface RejectProps {
  children: React.ReactNode;
}

function Reject({ children }: RejectProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const [reason, setReason] = useState<string>();

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
        <ModalHeading>거절 사유</ModalHeading>
        <textarea
          value={reason}
          onChange={e => {
            setReason(e.currentTarget.value);
          }}
        />
        <Button size="big">확인</Button>
      </ReactModal>
    </>
  );
}

export default Reject;
