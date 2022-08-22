import axios, { AxiosInstance as AxiosClient } from 'axios';

import { refresh, refreshErrorHandle } from './requestHandler';

const BASE_URL = 'https://644e-221-156-195-73.jp.ngrok.io';
const URL_POSTFIX = '/api/v1';

const axiosClient: AxiosClient = axios.create({
  baseURL: `${BASE_URL + URL_POSTFIX}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,PATCH,PUT,OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, X-Authentication-Token',
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(refresh, refreshErrorHandle);

export default axiosClient;
