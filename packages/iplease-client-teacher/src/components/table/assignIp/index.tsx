import React, { useState } from 'react';

import { useQuery, useQueryClient } from 'react-query';

import { Button } from '@common/components';

import getAssignIp, {
  PageAssignIp,
  AssignIp,
  deleteAssignIp,
} from 'src/api/assignIp';
import { getProfileUsingId } from 'src/api/profile';

import Table from '../base';

interface GetUserNameProps {
  id: number;
  key: string;
}

function GetUserName({ id, key }: GetUserNameProps): JSX.Element {
  const { data, isLoading, isError } = useQuery<string>(
    ['getProfile', id, key],
    () => getProfileUsingId(id)
  );

  if (isLoading) return <>loading</>;

  if (isError || !data) return <>error</>;

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{data}</>;
}

interface PageNumberButtonProps {
  first: boolean;
  last: boolean;
  totalPages: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

function PageNumberButton({
  first,
  last,
  totalPages,
  pageNumber,
  setPageNumber,
}: PageNumberButtonProps): JSX.Element {
  return (
    <>
      <div>더 이상 데이터가 없어요</div>
      <div>
        <Button
          text="이전"
          color={first ? 'default' : 'negative'}
          disabled={first}
          onClick={() => setPageNumber(pageNumber - 1)}
        />
        <span>
          {pageNumber + 1} / {totalPages}
        </span>
        <Button
          text="다음"
          color={last ? 'default' : 'negative'}
          disabled={last}
          onClick={() => setPageNumber(pageNumber + 1)}
        />
      </div>
    </>
  );
}

interface ContentProps {
  data: AssignIp[];
}

function Content({ data }: ContentProps): JSX.Element {
  const queryClient = useQueryClient();

  return (
    <>
      {data.map(({ id, ip, assigneeId, assignerId }) => (
        <tr key={id}>
          <td>{ip}</td>
          <td>
            <GetUserName id={assigneeId} key="assigneeId" />
          </td>
          <td>
            <GetUserName id={assignerId} key="assignerId" />
          </td>
          <td>
            <Button
              onClick={() => {
                deleteAssignIp(id);
                queryClient.invalidateQueries('getAssignIp');
              }}
              text="해지"
              color="negative"
            />
          </td>
        </tr>
      ))}
    </>
  );
}

function AssignIpTable(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(0);
  const { data, isLoading, isError } = useQuery<PageAssignIp>(
    'getAssignIp',
    () => getAssignIp(pageNumber)
  );

  if (isLoading) return <>loading</>;

  if (isError || !data) return <>error</>;

  const { content, first, last, totalPages } = data;

  return (
    <Table title="할당 IP 목록">
      <table>
        <tr>
          <th>IP 주소</th>
          <th>대여자</th>
          <th>허가자</th>
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

export default AssignIpTable;
