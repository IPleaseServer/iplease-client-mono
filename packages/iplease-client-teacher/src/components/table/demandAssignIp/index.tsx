import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { Button } from '@common/components';

import getDemandAssignIp, {
  PageDemandAssignIp,
  DemandAssignIp,
  acceptDemandAssignIpStatus,
  confirmDemandAssignIp,
} from 'src/api/demandAssignIp';
import About from 'src/components/modal/about';
import Accept from 'src/components/modal/accept';
import Reject from 'src/components/modal/reject';

import Table from '../base';
import GetUserName from '../getUserName';
import PageNumberButton from '../pageManageButton';

import AboutButton from './style';

interface ContentProps {
  data: DemandAssignIp[];
}

function Content({ data }: ContentProps): JSX.Element {
  return (
    <>
      {data.map(({ id, issuerId, title, expireAt, description }) => (
        <tr key={id}>
          <td title="신청자">
            <GetUserName id={issuerId} key="issuerId" />
          </td>
          <td>
            <About title={title} content={description}>
              <AboutButton
                onClick={() => {
                  confirmDemandAssignIp(id);
                }}
                type="button"
                title="누르면 자세히 볼 수 있습니다."
              >
                {title.length > 25 ? `${title.substring(0, 25)}...` : title}
              </AboutButton>
            </About>
          </td>
          <td title="사용종료일">{expireAt}</td>
          <td>
            <Reject id={id}>
              <Button title="신청 거절하기" text="거절" color="negative" />
            </Reject>
            <Accept id={id}>
              <Button title="신청 수락하기" text="수락" color="primary" />
            </Accept>
          </td>
        </tr>
      ))}
    </>
  );
}

function DemandAssignIpTable(): JSX.Element {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const { data, isLoading, isError } = useQuery<PageDemandAssignIp>(
    'getDemandAssignIp',
    () => getDemandAssignIp(pageNumber)
  );
  const [filterContent, setFilterContent] = useState<DemandAssignIp[]>();

  // The helper function
  async function filter<T>(
    arr: T[],
    callback: (item: T) => Promise<boolean>
  ): Promise<(Awaited<T> | null)[]> {
    return (
      await Promise.all(
        arr.map(async (item: T) => ((await callback(item)) ? item : null))
      )
    ).filter(i => i !== null);
  }

  useEffect(() => {
    if (data?.content)
      (async function () {
        const results = await filter<DemandAssignIp>(
          data.content,
          async ipData => {
            const status = await acceptDemandAssignIpStatus(ipData.id);
            return status === 'CREATE' || status === 'CONFIRM';
          }
        );
        if (results) setFilterContent(results);
      })();
  }, [data]);

  if (isLoading) return <>loading</>;

  if (isError || !data) return <>error</>;

  if (!filterContent) return <>데이터가 없어요</>;

  const { first, last, totalPages } = data;

  return (
    <Table title="IP 할당 신청 목록">
      <table>
        <tr>
          <th>신청자</th>
          <th>사용이유</th>
          <th>사용종료일</th>
        </tr>
        <Content data={filterContent} />
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

export default DemandAssignIpTable;
