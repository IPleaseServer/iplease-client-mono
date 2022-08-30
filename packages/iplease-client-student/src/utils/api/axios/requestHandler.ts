import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import dayjs from 'dayjs';

import { getValue, removeValue, setValue } from '@common/utils/storage/storage';

import accountApiUri from '../uri/account';

const BASE_URL = 'https://api.iplease.shop';
const URL_POSTFIX = '/api/v1';

const refresh = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const refreshToken = getValue<string>('refreshToken');
  const expireAt = getValue<string>('expiresAt');
  let token = getValue<string>('accessToken');

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (dayjs(expireAt).diff(dayjs()) < 0 && refreshToken) {
    // 토큰 갱신 서버통신
    axios
      .post(BASE_URL + URL_POSTFIX + accountApiUri.refresh(), {
        refreshToken,
      })
      .then(
        (res: AxiosResponse<{ accessToken: string; refreshToken: string }>) => {
          token = res.data.accessToken;
          setValue<string>('accessToken', res.data.accessToken, true);
          setValue<string>(
            'expiresAt',
            dayjs().add(1, 'hour').format('yyyy-MM-DD HH:mm:ss'),
            true
          );
        }
      );
  }

  if (config && config.headers && token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const refreshErrorHandle = (err: any) => {
  removeValue('refreshToken', true);
};

export { refresh, refreshErrorHandle };
