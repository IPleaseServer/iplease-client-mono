import { css, useTheme } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError, AxiosResponse } from 'axios';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Button, Input } from '@common/components';
import { colors } from '@common/styles';
import { getValue } from '@common/utils/storage/storage';

import Logo from 'assets/Logo';
import { AuthCodeForm } from 'components/AuthCodeForm';
import { Link } from 'components/Common/Link';
import { EmailForm } from 'components/EmailForm';
import axiosClient from 'utils/api/axios';
import accountApiUri from 'utils/api/uri/account';

const ResetPasswrodForm: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const schema = z.object({
    newPassword: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
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
      .put(accountApiUri.resetPassword(), {
        emailToken,
        ...data,
      })
      .then((res: AxiosResponse) => {
        if (res.status === 200) {
          toast.success('비밀번호가 변경되었습니다');
          navigate('/auth/signin');
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
      .link-wrapper {
        width: 100%;
        display: grid;
        place-items: center;
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
          <Input
            {...register('newPassword')}
            placeholder="새로운 비밀번호"
            type="password"
          />
          <ErrorMessage errors={errors} name="newPassword" as="p" />
          <Button type="submit" text="비밀번호 재설정" size="big" />
          <div className="link-wrapper">
            <Link
              href={{
                name: '로그인 페이지로 돌아가기',
                to: '/auth/signin',
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswrodForm;
