import { useState } from 'react';

import { css } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Input } from '@common/components';
import { colors, theme } from '@common/styles';

import axiosClient from 'utils/api/axios';
import accountApiUri from 'utils/api/uri/account';

const GSM_EMAIL_POSTFIX = '@gsm.hs.kr';
const GSM_EMAIL_PREFIX_REGEX = /^s\d{5}$/g;

const EmailVerifyForm: React.FC = () => {
  const [isSended, setIsSended] = useState<boolean>(false);

  const schema = z.object({
    email: z
      .string()
      .nonempty({ message: '빈값이 들어갈 수 없어요' })
      .regex(GSM_EMAIL_PREFIX_REGEX, {
        message: '학교 이메일 형식에 맞는지 확인해주세요',
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
      .post(accountApiUri.authEmail(data.email) + GSM_EMAIL_POSTFIX)
      .then(res => {
        if (res.status === 200) {
          toast.success('인증코드를 발송했습니다');
          setIsSended(true);
        }
      })
      .catch((err: AxiosError<{ message: string }>) => {
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };

  const submitButtonTextHandler = isSended
    ? '이메일 인증코드 재발송'
    : '이메일 인증코드 발송';

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
      button[type='submit'] {
        border: none;
        padding: 0;
        background: none;
        margin: 0.35rem 0;
        margin-left: 1.2rem;
        cursor: pointer;
        color: ${colors.pink};
        font-weight: ${theme.palette.fontWeight.semiBold};
        font-size: ${theme.palette.fontSize.extraSmall};
      }
    }
  `;

  return (
    <div css={style}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          placeholder="이메일"
          postfix={GSM_EMAIL_POSTFIX}
        />
        <ErrorMessage errors={errors} name="email" as="p" />
        <button type="submit">{submitButtonTextHandler}</button>
      </form>
    </div>
  );
};

export default EmailVerifyForm;
