import { css, useTheme } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError, AxiosResponse } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Button, Input } from '@common/components';
import { colors } from '@common/styles';
import { setValue } from '@common/utils/storage/storage';

import Logo from 'assets/Logo';
import axiosClient from 'utils/api/axios';
import accountApiUri from 'utils/api/uri/account';

const GSM_EMAIL_POSTFIX = '@gsm.hs.kr';

// GSM 학생 이메일 정규 표현식입니다.
const GSM_STUDENT_EMAIL_PREFIX_REGEX = /^s\d{5}$/g;

const SignInForm: React.FC = () => {
  const theme = useTheme();

  const schema = z.object({
    email: z
      .string()
      .nonempty({ message: '빈값이 들어갈 수 없어요' })
      .regex(GSM_STUDENT_EMAIL_PREFIX_REGEX, {
        message: '학교 이메일 형식에 맞는지 확인해주세요',
      }),
    password: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
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
      .post(accountApiUri.login(), {
        email: data.email + GSM_EMAIL_POSTFIX,
        password: data.password,
      })
      .then(
        (res: AxiosResponse<{ accessToken: string; refreshToken: string }>) => {
          if (res.status === 200) {
            setValue('accessToken', res.data.accessToken, true);
            setValue('refreshToken', res.data.refreshToken, true);
          }
        }
      )
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
    width: 18.75rem;
    .logo-field {
      display: grid;
      place-items: center;
      margin-bottom: 1.75rem;
    }
    .form-field {
      form {
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
        Button {
          margin-top: 0.625rem;
        }
        p {
          color: ${colors.pink};
          font-size: ${theme.palette.fontSize.extraSmall};
        }
        p::before {
          display: inline;
          content: '⚠ ';
          padding-left: 1.2rem;
        }
      }
    }
  `;

  return (
    <div css={style}>
      <div className="logo-field">
        <Logo />
      </div>
      <div className="form-field">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email')}
            placeholder="email"
            postfix={GSM_EMAIL_POSTFIX}
          />
          <ErrorMessage errors={errors} name="email" as="p" />
          <Input
            {...register('password')}
            placeholder="password"
            type="password"
          />
          <ErrorMessage errors={errors} name="password" as="p" />
          <Button type="submit" text="로그인" size="big" />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
