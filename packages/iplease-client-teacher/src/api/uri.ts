const BASE_URL = 'https://api.iplease.shop/api/v1/';

export const changePassword = 'account/profile/command/password';

export const register = 'account/register/teacher';

export const login = 'account/login';

export const refreshLogin = 'account/login/refresh';

export const logout = 'account/logout';

export const editProfile = 'account/profile/command';

export const getAssignIp = 'assign-ip/query/all';

export const getDemandAssignIp = 'demand/assign/query/all';

export const getDemandReleaseIp = 'demand/release/query/all';

export function acceptDemandAssignIp(demandId: number) {
  return `demand/status/command/${demandId}/accept`;
}

export function rejectDemandAssignIp(demandId: number) {
  return `demand/status/command/${demandId}/reject`;
}

export function deleteAssignIp(assignIpId: number) {
  return `assign-ip/command/${assignIpId}`;
}

export function getProfile(token: string) {
  return `account/profile/query/access-token/${token}`;
}

export function getProfileUsingId(id: number) {
  return `account/profile/query/id/${id}`;
}

export function identifier(id: string) {
  return `account/auth/teacher/${id}`;
}

export function authEmail(email: string) {
  return `account/auth/email/${email}@gsm.hs.kr`;
}

export function authCode(code: string) {
  return `account/auth/${code}`;
}

export default BASE_URL;
