import { setValue } from '@common/utils/storage/storage';

import instance from './axois/axois';
import errorCatch from './axois/error';
import * as uri from './uri';

export function authEmail(email: string) {
  instance.post(uri.authEmail(email)).catch(errorCatch);
}

export function identifier(id: string) {
  instance.post(uri.identifier(id), {}).catch(errorCatch);
}

function authAuthCode(authCode: string, authName: string) {
  return instance
    .get(uri.authCode(authCode))
    .then((response: { data: { token: string } }) => {
      setValue(`${authName}Token`, response.data.token);
    })
    .catch(errorCatch);
}

export default authAuthCode;
