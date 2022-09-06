import { PermissionType } from './account.type';

export type AssignIpUsageType = 'USE_NETWORK' | 'DEPLOY_SERVER';

export type DemandStatusType = 'CREATE' | 'CONFIRM' | 'REJECT' | 'ACCEPT';

export interface IAssignIpInfo {
  id: number;
  ip: string;
  assigneeId: number;
  assignerId: number;
}

export interface IReleaseReserveAssignIpInfo {
  id: number;
  assignIpId: number;
  issuerId: number;
  releaseAt: number[];
}

export interface IDemandReleaseAssignIpInfo {
  id: number;
  assignIpId: number;
  issuerId: number;
  issuerPermission: PermissionType;
  status: DemandStatusType;
}

export interface IAssignIpResponse {
  data: IAssignIpInfo;
}

export interface IAssigneeAssignIpResponse {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: IAssignIpInfo[];
    number: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    pageable: {
      offset: number;
      sort: {
        empty: boolean;
        unsorted: boolean;
        sorted: boolean;
      };
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
  };
}

export interface IDemandReleaseAssignIpResponse {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: IDemandReleaseAssignIpInfo[];
    number: number;
    sort: {
      empty: true;
      sorted: true;
      unsorted: true;
    };
    first: true;
    last: true;
    numberOfElements: number;
    pageable: {
      offset: number;
      sort: {
        empty: true;
        sorted: true;
        unsorted: true;
      };
      pageNumber: number;
      pageSize: number;
      paged: true;
      unpaged: true;
    };
    empty: true;
  };
}

export interface IReleaseReserveAssignIpResponse {
  data: IReleaseReserveAssignIpInfo;
}
