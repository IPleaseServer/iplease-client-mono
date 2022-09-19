interface URLType {
  signUp: string;
  signIn: string;
  changePassword: string;
  manageIpAssignments: string;
}

const URL: URLType = {
  signUp: '/signup',
  signIn: '/signin',
  changePassword: '/changePassword',
  manageIpAssignments: '/',
};

export default URL;
