import { toast } from 'react-hot-toast';

import URL from 'src/config/url';

import instance from './axois/axois';
import errorCatch from './axois/error';
import * as uri from './uri';

interface changePasswordBody {
  emailToken: string;
  newPassword: string;
}

function changePassword(data: changePasswordBody) {
  const { emailToken, newPassword } = data;
  instance
    .put(uri.changePassword, {
      newPassword,
      emailToken,
    })
    .then(() => {
      toast.success('비밀번호가 변경되었습니다.\n로그인 페이지로 이동합니다.');
      setTimeout(() => {
        global.location.replace(`/#${URL.signIn}`);
      }, 1000);
    })
    .catch(errorCatch);
}

export default changePassword;
