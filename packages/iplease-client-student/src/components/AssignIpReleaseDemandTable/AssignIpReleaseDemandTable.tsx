import { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { AxiosResponse } from 'axios';

import { Button } from '@common/components';
import { colors, theme } from '@common/styles';
import { getValue } from '@common/utils/storage/storage';

import {
  IAssignIpResponse,
  IDemandReleaseAssignIpInfo,
  IDemandReleaseAssignIpResponse,
} from 'src/@types/internet-protocol.type';
import axiosClient from 'utils/api/axios';
import ipApiUri from 'utils/api/uri/internet-protocol';

interface ITableData {
  id: number;
  ip: string;
}

const AssignIpReleaseDemandTable: React.FC = () => {
  const [tableData, setTableData] = useState<ITableData[]>([]);

  const style = css`
    width: fit-content;
    padding: 1.25rem 1.875rem;
    border-radius: ${theme.palette.borderRadius};
    box-shadow: 0px 6px 12px rgba(51, 51, 51, 0.08);
    table {
      text-align: left;
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
    p {
      font-size: ${theme.palette.fontSize.extraSmall};
      color: ${colors.black};
      font-weight: ${theme.palette.fontWeight.semiBold};
    }
  `;

  const handleTableData = () => {
    const accountId = getValue<number>('accountId');

    if (accountId) {
      axiosClient.get(ipApiUri.queryDemandReleaseIp(0, accountId)).then(
        ({
          data: {
            data: { content },
          },
        }: AxiosResponse<IDemandReleaseAssignIpResponse>) => {
          if (content.length > 0) {
            content.forEach(
              (demandReleaseAssignIpInfo: IDemandReleaseAssignIpInfo) => {
                axiosClient
                  .get(
                    ipApiUri.queryAssignIp(demandReleaseAssignIpInfo.assignIpId)
                  )
                  .then(
                    ({
                      data: {
                        data: { ip },
                      },
                    }: AxiosResponse<IAssignIpResponse>) => {
                      setTableData((prev: ITableData[]) => [
                        ...prev,
                        {
                          id: demandReleaseAssignIpInfo.id,
                          ip,
                        },
                      ]);
                    }
                  );
              }
            );
          }
        }
      );
    }
  };

  useEffect(() => {
    handleTableData();
  }, []);

  return (
    <div css={style}>
      {tableData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>IP 주소</th>
            </tr>
          </thead>
          {tableData.map((demandReleaseIpInfo: ITableData) => (
            <tr key={demandReleaseIpInfo.id}>
              <td>{demandReleaseIpInfo.ip}</td>
              <td>
                <Button text="신청 취소" size="small" color="negative" />
              </td>
            </tr>
          ))}
        </table>
      )}
      {tableData.length === 0 && <p>할당 해제 신청된 IP가 존재하지 않아요</p>}
    </div>
  );
};

export default AssignIpReleaseDemandTable;
