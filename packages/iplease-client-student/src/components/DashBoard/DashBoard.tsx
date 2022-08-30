import { css } from '@emotion/react';

import { Heading } from '@common/components';

import { AssignIpDemandTable } from 'components/AssignIpDemandTable';
import { AssignIpReleaseDemandTable } from 'components/AssignIpReleaseDemandTable';
import { AssignIpReleaseReserveTable } from 'components/AssignIpReleaseReserveTable';
import { AssignIpTable } from 'components/AssignIpTable';

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
      <AssignIpTable />
      <div id="flex-wrapper">
        <div>
          <Heading level="h3" text="IP 할당 신청 목록" color="black" />
          <AssignIpDemandTable />
        </div>
        <div>
          <Heading level="h3" text="할당 IP 해제 신청 목록" color="black" />
          <AssignIpReleaseDemandTable />
        </div>
      </div>
      <Heading level="h3" text="할당 IP 해제 예약 목록" color="black" />
      <AssignIpReleaseReserveTable />
    </div>
  );
};

export default DashBoard;
