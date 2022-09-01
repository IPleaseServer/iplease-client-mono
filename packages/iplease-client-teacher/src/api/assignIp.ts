import instance from './axois/axois';
import errorCatch from './axois/error';
import * as uri from './uri';

export interface AssignIp {
  id: number;
  ip: string;
  assigneeId: number;
  assignerId: number;
}

export interface PageAssignIp {
  totalPages: number;
  content: AssignIp[];
  first: boolean;
  last: boolean;
  pageable: { pageNumber: number };
}

async function getAssignIp(page: number): Promise<PageAssignIp> {
  const result = await instance.get<{ data: PageAssignIp }>(uri.getAssignIp, {
    params: { page },
  });
  return result.data.data;
}

export function deleteAssignIp(assignIpId: number) {
  instance.delete(uri.deleteAssignIp(assignIpId)).catch(errorCatch);
}

export default getAssignIp;
