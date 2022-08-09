import axios, { AxiosInstance as AxiosClient } from 'axios';

const BASE_URL = 'https://210f-115-23-68-158.jp.ngrok.io';
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

export default axiosClient;
