const BASE_URL = 'https://api.iplease.shop/api/v1/';

export const changePassword = 'account/profile/command/password';

export const register = 'account/register/teacher';

export const login = 'account/login';

export const refreshLogin = 'account/login/refresh';

export const logout = 'account/logout';

export function getProfile(token: string) {
  return `account/profile/query/access-token/${token}`;
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