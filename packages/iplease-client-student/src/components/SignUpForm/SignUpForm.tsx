import { useState } from 'react';

import { css, useTheme } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError, AxiosResponse } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Button, Input } from '@common/components';
import { colors } from '@common/styles';
import { getValue, setValue } from '@common/utils/storage/storage';

import Logo from 'assets/Logo';
import { AuthCodeForm } from 'components/AuthCodeForm';
import { EmailForm } from 'components/EmailForm';
import axiosClient from 'utils/api/axios';
import accountApiUri from 'utils/api/uri/account';

const GSM_STUDENT_EMAIL_POSTFIX_REGEX = /^[1-3][1-4][0-2][0-9]$/g;

const SignInForm: React.FC = () => {
  const theme = useTheme();

  const schema = z.object({
    name: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
    password: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
    studentNumber: z
      .string()
      .nonempty({ message: '빈값이 들어갈 수 없어요' })
      .regex(GSM_STUDENT_EMAIL_POSTFIX_REGEX, {
        message: '학번 형식에 맞는지 확인해주세요',
      }),
    department: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = data => {
    const emailToken = getValue<string>('emailToken');

    if (!emailToken) {
      toast.error('이메일 인증을 먼저 해주세요');
      return;
    }

    axiosClient
      .post(accountApiUri.register(), {
        emailToken,
        ...data,
      })
      .then((res: AxiosResponse<{ accountId: number }>) => {
        if (res.status === 200) {
          setValue<number>('accountId', res.data.accountId);
        }
      })
      .catch((err: AxiosError<{ message: string }>) => {
        if (!err.response) return;

        if (err.response.status === 500) {
          toast.error('서버 오류입니다. 잠시 후 다시 시도해주세요');
        }
        if (err.response.data.message) {
          toast.error(err.response.data.message);
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
      display: flex;
      flex-direction: column;
      gap: 0.4375rem;
      .authorize-email-field {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .info-form {
        display: flex;
        flex-direction: column;
        gap: 0.4375rem;
        button[type='submit'] {
          margin-top: 1.0625rem;
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
        <div className="authorize-email-field">
          <EmailForm />
          <AuthCodeForm />
        </div>
        <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('name')} placeholder="이름" />
          <ErrorMessage errors={errors} name="name" as="p" />
          <Input {...register('studentNumber')} placeholder="학번" />
          <ErrorMessage errors={errors} name="studentNumber" as="p" />
          <Input
            {...register('password')}
            placeholder="비밀번호"
            type="password"
          />
          <ErrorMessage errors={errors} name="password" as="p" />
          <Input {...register('department')} placeholder="학과" />
          <ErrorMessage errors={errors} name="department" as="p" />
          <Button type="submit" text="회원가입" size="big" />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
