import { css } from '@emotion/react';

import { Button } from '@common/components';
import { colors, theme } from '@common/styles';

import { TableButton } from 'components/Common/TableButton';

const AssignIpDemandTable: React.FC = () => {
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
        .demand-title {
          max-width: 10rem;
        }
        .demand-description {
          max-width: 20rem;
        }
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

  return (
    <div css={style}>
      <table>
        <th>제목</th>
        <th>설명</th>
        <th>상태</th>
        <tr>
          <td className="demand-title">
            안뇽하세요 저의 이름은 이선우라고 합니다 저이ㅡ 이름은 이선우라고
            합니다 저ㅡ이 이름은 이선우라고 합니다
          </td>
          <td className="demand-description">
            어쩔티비 저쩔티비 킹받쥬 쿠쿠루삥뽕 쩔티비 저쩔티비 킹받쥬
            쿠쿠루삥뽕 쩔티비 저쩔티비 킹받쥬 쿠쿠루삥뽕 쩔티비 저쩔티비 킹받쥬
            쿠쿠루삥뽕 쩔티비 저쩔티비 킹받쥬 쿠쿠루삥뽕 쩔티비 저쩔티비 킹받쥬
            쿠쿠루삥뽕
          </td>
          <td>검토 대기 중</td>
          <td>
            <Button text="신청 취소" size="small" color="negative" />
          </td>
        </tr>
        <tr>
          <td>제목</td>
          <td>이러면 안되는거 아닌가요?</td>
          <td>검토 대기 중</td>
          <td>
            <Button text="신청 취소" size="small" color="negative" />
          </td>
        </tr>
      </table>
      <TableButton>IP 할당 신청하기</TableButton>
    </div>
  );
};

export default AssignIpDemandTable;
