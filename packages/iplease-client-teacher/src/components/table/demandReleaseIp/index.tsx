import React, { useState } from 'react';

import { useQuery } from 'react-query';

import { Button } from '@common/components';

import getDemandReleaseIp, {
  DemandReleaseIp,
  PageDemandReleaseIp,
} from 'src/api/demandReleaseIp';

import Table from '../base';
import GetUserName from '../getUserName';
import PageNumberButton from '../pageManageButton';

interface ContentProps {
  data: DemandReleaseIp[];
}

function Content({ data }: ContentProps): JSX.Element {
  return (
    <>
      {data.map(({ id, issuerId, ReleaseIpId }) => (
        <tr key={id}>
          <td title="신청자">
            <GetUserName id={issuerId} key="issuerId" />
          </td>
          <td title="IP 주소">{ReleaseIpId}</td>
          <td>
            <Button title="신청 수락하기" text="수락" color="primary" />
          </td>
        </tr>
      ))}
    </>
  );
}

function DemandReleaseIpTable(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(0);
  const { data, isLoading, isError } = useQuery<PageDemandReleaseIp>(
    'getDemandReleaseIp',
    () => getDemandReleaseIp(pageNumber)
  );

  if (isLoading) return <>loading</>;

  if (isError || !data) return <>error</>;

  const { content, first, last, totalPages } = data;

  return (
    <Table title="IP 할당 신청 목록">
      <table>
        <tr>
          <th>신청자</th>
          <th>IP 주소</th>
        </tr>
        <Content data={content} />
      </table>
      <PageNumberButton
        first={first}
        last={last}
        totalPages={totalPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </Table>
  );
}

export default DemandReleaseIpTable;
