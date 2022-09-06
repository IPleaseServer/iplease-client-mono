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

export interface IAssignIpResponse {
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

export interface IReleaseReserveAssignIpResponse {
  data: IReleaseReserveAssignIpInfo;
}
