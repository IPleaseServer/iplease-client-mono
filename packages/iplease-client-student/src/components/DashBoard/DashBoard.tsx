import { Heading } from '@common/components';

import { AssignmentIpTable } from 'components/AssignmentIpTable';

const DashBoard = () => (
  <div>
    <Heading level="h1" text="IP 할당 신청" />
    <Heading level="h3" text="할당 IP 목록" color="black" />
    <AssignmentIpTable />
  </div>
);

export default DashBoard;
