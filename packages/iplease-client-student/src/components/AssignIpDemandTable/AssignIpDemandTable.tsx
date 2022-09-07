import { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { AxiosResponse } from 'axios';

import { Button } from '@common/components';
import { colors, theme } from '@common/styles';
import { getValue } from '@common/utils/storage/storage';

import { TableButton } from 'components/Common/TableButton';
import {
  DemandStatusType,
  IDemandAssignIpInfo,
  IDemandAssignIpResponse,
  IDemandAssignIpStatusInfo,
} from 'src/@types/internet-protocol.type';
import axiosClient from 'utils/api/axios';
import ipApiUri from 'utils/api/uri/internet-protocol';

interface ITableData {
  id: number;
  title: string;
  description: string;
  status: DemandStatusType;
}

const AssignIpDemandTable: React.FC = () => {
  const [tableData, setTableData] = useState<ITableData[]>([]);

  const subString = (str: string, n: number): string =>
    str?.length > n ? `${str.substring(0, n)}...` : str;

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
  `;

  const handleTableData = () => {
    const accountId = getValue<number>('accountId');

    if (accountId) {
      axiosClient.get(ipApiUri.queryDemandAssignIp(0, accountId)).then(
        ({
          data: {
            data: { content },
          },
        }: AxiosResponse<IDemandAssignIpResponse>) => {
          if (content.length > 0) {
            content.forEach((demandAssignIpInfo: IDemandAssignIpInfo) => {
              axiosClient
                .get(ipApiUri.queryDemandStatus(demandAssignIpInfo.id))
                .then(
                  ({
                    data: { status },
                  }: AxiosResponse<IDemandAssignIpStatusInfo>) => {
                    setTableData((prev: ITableData[]) => [
                      ...prev,
                      {
                        id: demandAssignIpInfo.id,
                        title: demandAssignIpInfo.title,
                        description: demandAssignIpInfo.description,
                        status,
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

  const translateStatus = (status: DemandStatusType): string => {
    switch (status) {
      case 'CREATE':
        return '신청이 등록되었어요';
      case 'ACCEPT':
        return '신청이 승인되었어요';
      case 'REJECT':
        return '신청이 거절되었어요';
      case 'CONFIRM':
        return '관리자가 신청을 확인했어요';
      default:
        return '';
    }
  };

  useEffect(() => {
    handleTableData();
  }, []);

  return (
    <div css={style}>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>설명</th>
            <th>상태</th>
          </tr>
        </thead>
        {tableData.map((data: ITableData) => (
          <tr>
            <td>{subString(data.title, 6)}</td>
            <td>{subString(data.description, 20)}</td>
            <td>{translateStatus(data.status)}</td>
            <td>
              <Button text="신청 취소" size="small" color="negative" />
            </td>
          </tr>
        ))}
      </table>
      <TableButton>IP 할당 신청하기</TableButton>
    </div>
  );
};

export default AssignIpDemandTable;
