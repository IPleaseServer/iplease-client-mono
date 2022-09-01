import instance from './axois/axois';
import * as uri from './uri';

export interface DemandReleaseIp {
  id: number;
  ReleaseIpId: number;
  issuerId: number;
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

export default getDemandReleaseIp;
