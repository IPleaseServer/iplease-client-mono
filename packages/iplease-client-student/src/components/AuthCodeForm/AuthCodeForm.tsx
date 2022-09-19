import { css } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError, AxiosResponse } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Button, Input } from '@common/components';
import { colors, theme } from '@common/styles';
import { setValue } from '@common/utils/storage/storage';

import axiosClient from 'utils/api/axios';
import accountApiUri from 'utils/api/uri/account';

const AUTH_CODE_REGEX = /^\d{6}$/g;

const EmailVerifyForm: React.FC = () => {
  const schema = z.object({
    authCode: z
      .string()
      .nonempty({ message: '빈값이 들어갈 수 없어요' })
      .regex(AUTH_CODE_REGEX, {
        message: '인증 코드 형식에 맞는지 확인해주세요',
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = data => {
    axiosClient
      .get(accountApiUri.authCode(data.authCode))
      .then((res: AxiosResponse<{ token: string }>) => {
        if (res.status === 200) {
          toast.success('인증이 완료되었어요');
          setValue<string>('emailToken', res.data.token);
        }
      })
      .catch((err: AxiosError<{ detail: string }>) => {
        if (!err.response) return;

        if (err.response.status === 500) {
          toast.error('서버 오류입니다. 잠시 후 다시 시도해주세요');
        }
        if (err.response.data.detail) {
          toast.error(err.response.data.detail);
        }
      });
  };

  const style = css`
    form {
      p {
        color: ${colors.pink};
        font-size: ${theme.palette.fontSize.extraSmall};
        margin-top: 0.35rem;
      }
      p::before {
        display: inline;
        content: '⚠ ';
        padding-left: 1.2rem;
      }
      button {
        flex: 0 0 3.75rem;
        width: 3.75rem;
      }
      .input-field {
        display: flex;
        gap: 0.375rem;
      }
    }
  `;

  return (
    <div css={style}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <Input {...register('authCode')} placeholder="인증 코드" />
          <Button type="submit" size="big" text="인증" />
        </div>
        <ErrorMessage errors={errors} name="authCode" as="p" />
      </form>
    </div>
  );
};

export default EmailVerifyForm;
