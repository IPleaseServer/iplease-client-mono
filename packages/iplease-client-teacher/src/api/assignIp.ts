import instance from './axois/axois';
import errorCatch from './axois/error';
import * as uri from './uri';

interface AssignIp {
  id: number;
  ip: string;
  assigneeId: number;
  assignerId: number;
}

export interface PageAssignIp {
  totalPages: number;
  content: AssignIp[];
  pageable: { pageNumber: number };
}

async function getAssignIp(page: number): Promise<PageAssignIp> {
  const result = await instance.get<{ data: PageAssignIp }>(uri.getAssignIp, {
    params: { page },
  });
  return result.data.data;
}

export function deleteAssignIp(assignIpId: number) {
  instance.post(uri.deleteAssignIp(assignIpId)).catch(errorCatch);
}

export default getAssignIp;
