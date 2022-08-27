import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

function errorCatch(err: AxiosError<{ message: string; detail: string }>) {
  if (!err.response) return;

  if (err.response.status === 500) {
    toast.error('서버 오류입니다. 잠시 후 다시 시도해주세요');
  }
  if (err.response.data.message) {
    toast.error(`${err.response.data.message}\n${err.response.data.detail}`);
  }
}

export default errorCatch;
