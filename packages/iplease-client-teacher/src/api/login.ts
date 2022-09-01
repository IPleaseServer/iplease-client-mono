import { AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';

import { removeValue, setValue } from '@common/utils/storage/storage';

import URL from 'src/config/url';

import instance from './axois/axois';
import errorCatch from './axois/error';
import getProfile from './profile';
import * as uri from './uri';

interface loginBody {
  email: string;
  password: string;
}

function login(data: loginBody) {
  const { email, password } = data;
  instance
    .post(uri.login, {
      email: `${email}@gsm.hs.kr`,
      password,
    })
    .then(
      (res: AxiosResponse<{ accessToken: string; refreshToken: string }>) => {
        toast.success('로그인 성공!');
        setValue('accessToken', res.data.accessToken, true);
        setValue('refreshToken', res.data.refreshToken, true);
        setValue<string>(
          'expiresAt',
          dayjs().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'),
          true
        );
        getProfile().then(({ common }) =>
          setValue('accoundId', common.accountId, true)
        );

        setTimeout(() => {
          global.location.replace(`/#${URL.manageIpAssignments}`);
        }, 1000);
      }
    )
    .catch(errorCatch);
}

export function logout() {
  instance
    .delete(uri.logout)
    .then(() => {
      toast.success('로그아웃 성공!');
      removeValue('accessToken', true);
      removeValue('refreshToken', true);
      removeValue('expiresAt', true);
      removeValue('accoundId', true);

      setTimeout(() => {
        global.location.replace(`/#${URL.signIn}`);
      }, 1000);
    })
    .catch(errorCatch);
}

export default login;
