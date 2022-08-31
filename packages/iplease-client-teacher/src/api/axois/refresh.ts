import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';

import { getValue, removeValue, setValue } from '@common/utils/storage/storage';

import URL from 'src/config/url';

import BASE_URL, { refreshLogin } from '../uri';

const refresh = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const refreshToken = getValue<string>('refreshToken');
  const expireAt = getValue<string>('expiresAt');
  let token = getValue<string>('accessToken');

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (!dayjs().isBefore(expireAt) && refreshToken) {
    // 토큰 갱신 서버통신
    axios
      .post(`${BASE_URL + refreshLogin}`, {
        refreshToken,
      })
      .then(
        (res: AxiosResponse<{ accessToken: string; refreshToken: string }>) => {
          token = res.data.accessToken;
          setValue<string>('accessToken', res.data.accessToken, true);
          setValue<string>('refreshToken', res.data.refreshToken, true);
          setValue<string>(
            'expiresAt',
            dayjs('YYYY-MM-DD HH:mm:ss').add(1, 'hour').toString(),
            true
          );
        }
      )
      .catch(() => {
        toast.error('다시 로그인해주세요.');
        removeValue('accessToken', true);
        removeValue('refreshToken', true);
        removeValue('expiresAt', true);
        setTimeout(() => {
          global.location.replace(`/#${URL.signIn}`);
        }, 1000);
      });
  } else if (dayjs().isBefore(expireAt) || !refreshToken) {
    removeValue('accessToken', true);
    removeValue('refreshToken', true);
    removeValue('expiresAt', true);
    setTimeout(() => {
      global.location.replace(`/#${URL.signIn}`);
    }, 1000);
  }
  if (config && config.headers && token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const refreshErrorHandle = () => {
  removeValue('refreshToken', true);
};

export { refresh, refreshErrorHandle };
