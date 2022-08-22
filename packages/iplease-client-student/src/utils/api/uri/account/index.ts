const prefix = `/account`;

const accountApiUri = {
  // 인증
  authEmail: (email: string) => `${prefix}/auth/email/${email}`,
  authCode: (authCode: string) => `${prefix}/auth/${authCode}`,

  // 가입
  register: () => `${prefix}/register/student`,

  // 로그인
  login: () => `${prefix}/login`,
  refresh: () => `${prefix}/login/refresh`,
};

export default accountApiUri;
