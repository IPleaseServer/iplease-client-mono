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

export interface IDemandAssignIpInfo {
  id: number;
  issuerId: number;
  title: string;
  description: string;
  usage: AssignIpUsageType;
  expireAt: number[];
}

export interface IDemandAssignIpStatusInfo {
  id: number;
  demandId: number;
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
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    first: boolean;
    last: boolean;
    numberOfElements: number;
    pageable: {
      offset: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
    empty: boolean;
  };
}

export interface IReleaseReserveAssignIpResponse {
  data: IReleaseReserveAssignIpInfo;
}

export interface IReleaseReserveIssuerAssignIpResponse {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: IReleaseReserveAssignIpInfo[];
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    first: boolean;
    last: boolean;
    numberOfElements: number;
    pageable: {
      offset: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
    empty: boolean;
  };
}

export interface IDemandAssignIpResponse {
  data: {
    totalPages: number;
    totalElements: number;
    size: number;
    content: IDemandAssignIpInfo[];
    number: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageable: {
      offset: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      pageNumber: number;
      pageSize: number;
      unpaged: boolean;
      paged: boolean;
    };
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
  };
}
