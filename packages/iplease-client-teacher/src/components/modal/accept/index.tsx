/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';

import { AxiosError } from 'axios';
import ReactModal from 'react-modal';
import { useQueryClient, useMutation } from 'react-query';

import { Button, Input } from '@common/components';

import errorCatch from 'src/api/axois/error';
import {
  acceptDemandAssignIp,
  acceptDemandAssignIpRes,
} from 'src/api/demandAssignIp';
import { ModalHeading } from 'src/style/modalStyle';

import modalController from '../modalController';

import * as S from './style';

export interface AcceptProps {
  children: React.ReactNode;
  id: number;
}

function Accept({ children, id }: AcceptProps): JSX.Element {
  const queryClient = useQueryClient();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [openModal, closeModal] = modalController(setModalIsOpen);

  const [IP, setIP] = useState<string>();

  const { mutate } = useMutation(
    ({ demandId, assignIp }: acceptDemandAssignIpRes) =>
      acceptDemandAssignIp({ demandId, assignIp }),
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
    if (IP) {
      mutate({ demandId: id, assignIp: IP });
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
        <ModalHeading>할당할 IP</ModalHeading>
        <S.InputWrapper>
          <Input
            value={IP}
            onChange={e => {
              const limitValue = e.currentTarget.value.slice(0, 15);
              setIP(limitValue);
            }}
          />
        </S.InputWrapper>
        <Button
          size="big"
          color={!IP ? 'default' : 'primary'}
          disabled={!IP}
          onClick={() => onClick()}
        >
          확인
        </Button>
      </ReactModal>
    </>
  );
}

export default Accept;
