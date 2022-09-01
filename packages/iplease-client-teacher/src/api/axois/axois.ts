import axios from 'axios';

import { getValue } from '@common/utils/storage/storage';

import BASE_URL from '../uri';

import { refresh, refreshErrorHandle } from './refresh';

const accessToken: string = getValue('accessToken') ?? '';
const accountId: string = getValue('accountId') ?? '';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE,PATCH,PUT,OPTIONS',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials, X-Authentication-Token',
    Authorization: `Bearer ${accessToken}`,
    'X-Authorization-Id': accountId,
  },
  withCredentials: true,
});

instance.interceptors.request.use(refresh, refreshErrorHandle);

export default instance;
