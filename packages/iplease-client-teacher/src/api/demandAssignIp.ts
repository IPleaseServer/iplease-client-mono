import instance from './axois/axois';
import * as uri from './uri';

export interface DemandAssignIp {
  id: number;
  issuerId: number;
  title: string;
  description: string;
  usage: string;
  expireAt: string;
}

export interface PageDemandAssignIp {
  totalPages: number;
  content: DemandAssignIp[];
  first: boolean;
  last: boolean;
}

export interface rejectDemandAssignIpRes {
  demandId: number;
  reason: string;
}

export interface acceptDemandAssignIpRes {
  demandId: number;
  assignIp: string;
}

async function getDemandAssignIp(page: number): Promise<PageDemandAssignIp> {
  const result = await instance.get<{ data: PageDemandAssignIp }>(
    uri.getDemandAssignIp,
    {
      params: { page },
    }
  );
  return result.data.data;
}

export async function rejectDemandAssignIp(data: rejectDemandAssignIpRes) {
  const { demandId, reason } = data;
  const result = await instance.put<{
    demandId: number;
  }>(uri.rejectDemandAssignIp(demandId), {
    reason,
  });
  return result.data.demandId;
}

export async function acceptDemandAssignIp({
  demandId,
  assignIp,
}: acceptDemandAssignIpRes) {
  const result = await instance.put<{
    demandId: number;
  }>(uri.acceptDemandAssignIp(demandId), { assignIp });
  return result.data.demandId;
}

export default getDemandAssignIp;
