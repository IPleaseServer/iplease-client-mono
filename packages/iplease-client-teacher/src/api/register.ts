import { setValue } from '@common/utils/storage/storage';

import instance from './axois/axois';
import errorCatch from './axois/error';
import * as uri from './uri';

interface RegisterBody {
  name: string;
  password: string;
  emailToken: string;
  teacherCode: string;
}

function register(data: RegisterBody) {
  const { name, password, emailToken, teacherCode } = data;

  instance
    .post(uri.register, {
      name,
      emailToken,
      password,
      teacherCode,
    })
    .then((response: { data: { accountId: number } }) => {
      setValue('accountId', response.data.accountId.toString(), true);
    })
    .catch(errorCatch);
}

export default register;
