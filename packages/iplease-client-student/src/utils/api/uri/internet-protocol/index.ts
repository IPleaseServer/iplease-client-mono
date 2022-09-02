const prefix = `/assign-ip`;

const ipApiUri = {
  // 할당 ip 목록 조회
  queryAll: (page: number) => `${prefix}/query/all?page=${page}`,

  // 예약 해제 개별 조회
  queryReserveReleaseIp: (assignIpId: number) =>
    `${prefix}/reserve/release/query/assign-ip/${assignIpId}`,
};

export default ipApiUri;
