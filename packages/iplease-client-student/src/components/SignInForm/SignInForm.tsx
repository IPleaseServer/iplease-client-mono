import { useState } from 'react';

import { css, useTheme } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input } from '@common/components';
import { colors } from '@common/styles';

import Logo from 'assets/Logo';

const GSM_EMAIL_POSTFIX = '@gsm.hs.kr';

// GSM 학생 이메일 정규 표현식입니다.
const GSM_EMAIL_PREFIX_REGEX = /s\d{5}/g;

const SignInForm: React.FC = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const schema = z.object({
    email: z
      .string()
      .nonempty({ message: '빈값이 들어갈 수 없어요' })
      .regex(GSM_EMAIL_PREFIX_REGEX, {
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
    setFormData(data);
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
