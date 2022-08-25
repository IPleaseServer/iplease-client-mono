import { css } from '@emotion/react';

import { Heading } from '@common/components';

import { AssignmentIpCancelDemandTable } from 'components/AssignmentIpCancelDemandTable';
import { AssignmentIpCancelReserveTable } from 'components/AssignmentIpCancelReserveTable';
import { AssignmentIpDemandTable } from 'components/AssignmentIpDemandTable';
import { AssignmentIpTable } from 'components/AssignmentIpTable';

const DashBoard = () => {
  const style = css`
    #flex-wrapper {
      display: flex;
      gap: 2.5rem;
      margin-bottom: 3.125rem;
    }
  `;

  return (
    <div css={style}>
      <Heading level="h1" text="IP 할당 신청" />
      <Heading level="h3" text="할당 IP 목록" color="black" />
      <AssignmentIpTable />
      <div id="flex-wrapper">
        <span>
          <Heading level="h3" text="IP 할당 신청 목록" color="black" />
          <AssignmentIpDemandTable />
        </span>
        <span>
          <Heading level="h3" text="IP 할당 신청 목록" color="black" />
          <AssignmentIpCancelDemandTable />
        </span>
      </div>
      <Heading level="h3" text="IP 할당 신청 목록" color="black" />
      <AssignmentIpCancelReserveTable />
    </div>
  );
};

export default DashBoard;
