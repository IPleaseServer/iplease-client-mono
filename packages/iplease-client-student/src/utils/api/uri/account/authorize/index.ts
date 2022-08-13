const authorizeUriController = {
  authEmail: (email: string) => `/account/auth/email/${email}`,
  authCode: (authCode: string) => `/account/auth/code/${authCode}`,
};

export default authorizeUriController;
