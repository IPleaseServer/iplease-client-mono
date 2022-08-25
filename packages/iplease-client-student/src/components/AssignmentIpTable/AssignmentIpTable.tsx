import { css } from '@emotion/react';

import { Button } from '@common/components';
import { colors, theme } from '@common/styles';

import { TableButton } from 'components/Common/TableButton';

const AssignmentIpTable = () => {
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

  return (
    <div css={style}>
      <table>
        <th>IP 주소</th>
        <th>종료일</th>
        <tr>
          <td>xxx.xxx.xxx.xxx</td>
          <td>2020.04.14</td>
          <td>
            <Button text="해제 신청" size="small" color="negative" />
          </td>
        </tr>
        <tr>
          <td>xxx.xxx.xxx.xxx</td>
          <td>2020.04.14</td>
          <td>
            <Button text="해제 신청" size="small" color="negative" />
          </td>
        </tr>
      </table>
      <TableButton>IP 신청하기</TableButton>
    </div>
  );
};

export default AssignmentIpTable;
