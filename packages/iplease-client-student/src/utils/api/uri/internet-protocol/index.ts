const ipApiUri = {
  // 개별 할당 ip 조회
  queryAssignIp: (assignIpId: number) => `/assign-ip/query/${assignIpId}`,

  // 개인 할당 ip 목록 조회
  queryAssigneeAssignIp: (page: number, assigneeId: number) =>
    `/assign-ip/query/assignee?page=${page}&assigneeId=${assigneeId}`,

  // 개인 할당 해제 신청 ip 목록 조회
  queryDemandReleaseIp: (page: number, issuerId: number) =>
    `/demand/release/query/issuer?page=${page}&issuerId=${issuerId}`,

  // 개인 할당 신청 ip 목록 조회
  queryDemandAssignIp: (page: number, issuerId: number) =>
    `/demand/assign/query/issuer?page=${page}&issuerId=${issuerId}`,

  // 개별 ip 예약 해제 조회
  queryReserveReleaseIp: (assignIpId: number) =>
    `/reserve/release/query/assign-ip?assignIpId=${assignIpId}`,

  // 개인 ip 예약 해제 목록 조회
  queryReserveReleaseIssuerIp: (page: number, issuerId: number) =>
    `/reserve/release/query/issuer?page=${page}&issuerId=${issuerId}`,

  queryDemandStatus: (demandId: number) => `/demand/status/query/${demandId}`,

  // ip 할당 신청
  demandAssignIp: () => `/demand/assign/command`,
};

export default ipApiUri;
