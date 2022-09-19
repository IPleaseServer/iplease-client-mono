/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';

import ReactModal from 'react-modal';

import { ModalHeading } from 'src/style/modalStyle';

import modalController from '../modalController';

export interface AboutProps {
  children: React.ReactNode;
  title: string;
  content: string;
}

function About({ children, title, content }: AboutProps): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

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
        <ModalHeading>{title}</ModalHeading>
        <span>{content}</span>
      </ReactModal>
    </>
  );
}

export default About;
