/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';

import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import ReactModal from 'react-modal';
import { useMutation, useQueryClient } from 'react-query';

import { Button } from '@common/components';

import errorCatch from 'src/api/axois/error';
import {
  rejectDemandAssignIp,
  rejectDemandAssignIpRes,
} from 'src/api/demandAssignIp';
import { ModalHeading } from 'src/style/modalStyle';

import modalController from '../modalController';

import Textarea from './style';

export interface RejectProps {
  children: React.ReactNode;
  id: number;
}

function Reject({ children, id }: RejectProps): JSX.Element {
  const queryClient = useQueryClient();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const [currentReason, setCurrentReason] = useState<string>();

  const { mutate } = useMutation(
    ({ demandId, reason }: rejectDemandAssignIpRes) =>
      rejectDemandAssignIp({ demandId, reason }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getDemandAssignIp');
      },
      onError: (
        err: AxiosError<{
          message: string;
          detail: string;
        }>
      ) => {
        errorCatch(err);
      },
    }
  );

  function onClick() {
    if (!currentReason) {
      toast.error('사유를 입력해주세요.');
      return;
    }
    mutate({ demandId: id, reason: currentReason });
    closeModal();
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
        <ModalHeading>거절 사유</ModalHeading>
        <Textarea
          value={currentReason}
          onChange={e => {
            setCurrentReason(e.currentTarget.value);
          }}
          maxLength={256}
        />
        <Button
          onClick={() => {
            onClick();
          }}
          size="big"
        >
          확인
        </Button>
      </ReactModal>
    </>
  );
}

export default Reject;
