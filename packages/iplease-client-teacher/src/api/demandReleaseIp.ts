import instance from './axois/axois';
import * as uri from './uri';

export interface DemandReleaseIp {
  id: number;
  ReleaseIpId: number;
  issuerId: number;
  status: 'CREATE' | 'ACCEPT';
}

export interface PageDemandReleaseIp {
  totalPages: number;
  content: DemandReleaseIp[];
  first: boolean;
  last: boolean;
}

async function getDemandReleaseIp(page: number): Promise<PageDemandReleaseIp> {
  const result = await instance.get<{ data: PageDemandReleaseIp }>(
    uri.getDemandReleaseIp,
    {
      params: { page },
    }
  );
  return result.data.data;
}

export async function acceptDemandReleaseIp(demandId: number): Promise<number> {
  const result = await instance.put<{
    demandId: number;
  }>(uri.acceptDemandReleaseIp(demandId));
  return result.data.demandId;
}

export default getDemandReleaseIp;
