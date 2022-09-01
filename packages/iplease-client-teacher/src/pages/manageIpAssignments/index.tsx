import React from 'react';

import Header from 'src/components/header';
import AssignIp from 'src/components/table/assignIp';
import DemandAssignIp from 'src/components/table/demandAssignIp';
import DemandReleaseIp from 'src/components/table/demandReleaseIp';

import * as S from './style';

function ManageIpAssignments(): JSX.Element {
  return (
    <div>
      <Header />
      <S.Main>
        <S.H1>IP 할당 관리</S.H1>
        <AssignIp />
        <S.Section style={{ display: 'flex', gap: '50px' }}>
          <DemandAssignIp />
          <DemandReleaseIp />
        </S.Section>
      </S.Main>
    </div>
  );
}

export default ManageIpAssignments;
