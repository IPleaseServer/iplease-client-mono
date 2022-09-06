const ipApiUri = {
  // 할당 ip 목록 조회
  queryAssignIp: (page: number, assignId: number) =>
    `/assign-ip/query/assignee?page=${page}&assigneeId=${assignId}`,

  // 예약 해제 개별 조회
  queryReserveReleaseIp: (assignIpId: number) =>
    `/reserve/release/query/assign-ip?assignIpId=${assignIpId}`,
};

export default ipApiUri;
