import { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { AxiosResponse } from 'axios';

import { Button } from '@common/components';
import { colors, theme } from '@common/styles';
import { getValue } from '@common/utils/storage/storage';

import { Modal } from 'components/Common/Modal';
import { ModalWrapper } from 'components/Common/ModalWrapper';
import { TableButton } from 'components/Common/TableButton';
import { IpDemandForm } from 'components/IpDemandForm';
import {
  IAssignIpInfo,
  IAssigneeAssignIpResponse,
  IReleaseReserveAssignIpResponse,
} from 'src/@types/internet-protocol.type';
import axiosClient from 'utils/api/axios';
import ipApiUri from 'utils/api/uri/internet-protocol';

interface ITableData {
  id: number;
  ip: string;
  releaseAt: number[];
}

const AssignIpTable: React.FC = () => {
  const [wantAssignIp, setWantAssignIp] = useState<boolean>(false);
  const [tableData, setTableData] = useState<ITableData[]>([]);

  const style = css`
    width: fit-content;
    padding: 1.25rem 1.875rem;
    border-radius: ${theme.palette.borderRadius};
    box-shadow: 0px 6px 12px rgba(51, 51, 51, 0.08);
    table {
      text-align: left;
      margin-bottom: 2.5rem;
      th {
        font-weight: ${theme.palette.fontWeight.bold};
        font-size: ${theme.palette.fontSize.small};
        color: ${colors.black};
        padding-bottom: 0.625rem;
      }
      tr {
        td {
          color: ${colors.black};
          padding: 0.3125rem 0;
          :not(:last-child) {
            padding-right: 2.5rem;
            font-weight: ${theme.palette.fontWeight.regular};
            font-size: ${theme.palette.fontSize.extraSmall};
          }
        }
      }
    }
    margin-bottom: 3.125rem;
  `;

  const handleTableData = () => {
    const accountId = getValue<number>('accountId');

    if (accountId) {
      axiosClient.get(ipApiUri.queryAssigneeAssignIp(0, accountId)).then(
        ({
          data: {
            data: { content },
          },
        }: AxiosResponse<IAssigneeAssignIpResponse>) => {
          if (content.length > 0) {
            content.forEach((assignIpInfo: IAssignIpInfo) => {
              axiosClient
                .get(ipApiUri.queryReserveReleaseIp(assignIpInfo.id))
                .then(
                  ({
                    data: {
                      data: { releaseAt },
                    },
                  }: AxiosResponse<IReleaseReserveAssignIpResponse>) => {
                    setTableData((prev: ITableData[]) => [
                      ...prev,
                      {
                        id: assignIpInfo.id,
                        ip: assignIpInfo.ip,
                        releaseAt,
                      },
                    ]);
                  }
                );
            });
          }
        }
      );
    }
  };

  const changeDateFormat = ([year, month, day]: number[]) =>
    `${year}.${month < 10 ? `0${month}` : month}.${day}`;

  useEffect(() => {
    handleTableData();
  }, []);

  return (
    <>
      <div css={style}>
        {tableData.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>IP 주소</th>
                <th>종료일</th>
              </tr>
            </thead>
            {tableData.map((assignIpInfo: ITableData) => (
              <tr key={assignIpInfo.id}>
                <td>{assignIpInfo.ip}</td>
                <td>{changeDateFormat(assignIpInfo.releaseAt)}</td>
                <td>
                  <Button text="해제 신청" size="small" color="negative" />
                </td>
              </tr>
            ))}
          </table>
        )}
        <TableButton onClick={() => setWantAssignIp(true)}>
          IP 신청하기
        </TableButton>
      </div>
      {wantAssignIp && (
        <Modal>
          <ModalWrapper setModalVisible={setWantAssignIp}>
            <IpDemandForm />
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
};

export default AssignIpTable;
