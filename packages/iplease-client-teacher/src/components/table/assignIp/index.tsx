import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { Button } from '@common/components';

import getAssignIp, { PageAssignIp } from 'src/api/assignIp';

import Table from '../base';

function Content(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [isPrevious, setIsPrevious] = useState(true);

  const { data, isLoading, isError } = useQuery<PageAssignIp>(
    'getAssignIp',
    () => getAssignIp(pageNumber)
  );

  useEffect(() => {
    if (data) {
      setIsNext(pageNumber + 1 < data.totalPages);
      setIsPrevious(pageNumber + 1 !== 1);
    }
  }, [data]);

  if (isLoading) return <>loading</>;

  if (isError || !data) return <>error</>;

  return (
    <>
      {data.content.map(content => (
        <tr key={content.id}>
          <td>{content.ip}</td>
          <td>{content.assignerId}</td>
          <td>{content.assigneeId}</td>
          <td>
            <Button text="해지" color="negative" />
          </td>
        </tr>
      ))}
      <div>
        <Button
          text="이전"
          color={isPrevious ? 'negative' : 'default'}
          disabled={!isPrevious}
          onClick={() => setPageNumber(pageNumber - 1)}
        />
        <span>{pageNumber + 1}</span>
        <Button
          text="다음"
          color={isNext ? 'negative' : 'default'}
          disabled={!isNext}
          onClick={() => setPageNumber(pageNumber + 1)}
        />
      </div>
    </>
  );
}

function AssignIp(): JSX.Element {
  return (
    <Table title="할당 IP 목록">
      <table>
        <tr>
          <th>IP 주소</th>
          <th>대여자</th>
          <th>허가자</th>
        </tr>
        <Content />
      </table>
    </Table>
  );
}

export default AssignIp;
