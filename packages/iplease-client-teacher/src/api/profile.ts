import { getValue } from '@common/utils/storage/storage';

import { ProfileRes } from 'types';

import instance from './axois/axois';
import * as uri from './uri';

async function getProfile(): Promise<ProfileRes> {
  const token = getValue<string>('accessToken') || '';
  const result = await instance.get<ProfileRes>(uri.getProfile(token));
  return result.data;
}

export default getProfile;
