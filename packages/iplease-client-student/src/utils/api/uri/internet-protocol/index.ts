const ipApiUri = {
  // 개별 할당 ip 조회
  queryAssignIp: (assignIpId: number) => `/assign-ip/query/${assignIpId}`,

  // 개인 할당 ip 목록 조회
  queryAssigneeAssignIp: (page: number, assigneeId: number) =>
    `/assign-ip/query/assignee?page=${page}&assigneeId=${assigneeId}`,

  // 개인 할당 해제 신청 ip 목록 조회
  queryDemandReleaseIp: (page: number, issuerId: number) =>
    `/demand/release/query/issuer?page=${page}&issuerId=${issuerId}`,

  // 개별 ip 예약 해제 조회
  queryReserveReleaseIp: (assignIpId: number) =>
    `/reserve/release/query/assign-ip?assignIpId=${assignIpId}`,
};

export default ipApiUri;
