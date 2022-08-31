import { getValue } from '@common/utils/storage/storage';

import errorCatch from 'src/api/axois/error';
import { EditProfileReq, ProfileRes } from 'types';

import instance from './axois/axois';
import * as uri from './uri';

async function getProfile(): Promise<ProfileRes> {
  const token = getValue<string>('accessToken') || '';
  const result = await instance.get<ProfileRes>(uri.getProfile(token));
  return result.data;
}

export function editProfile({
  permission,
  profileImage,
  name,
}: EditProfileReq) {
  instance
    .put<ProfileRes>(uri.editProfile, {
      type: 'TEACHER',
      permission,
      name,
      emailToken: '교',
      newEmailToken: '사',
      profileImage,
      studentNumber: 1111,
      department: 'SMART_IOT',
    })
    .catch(errorCatch);
}

export default getProfile;
