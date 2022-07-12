import { useState } from 'react';

import { css } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input } from '@common/components';

import Logo from 'assets/Logo';

const GSM_EMAIL_POSTFIX = '@gsm.hs.kr';
const GSM_EMAIL_PREFIX_REGEX = /s\d{5}/g;

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });

  const schema = z.object({
    email: z.string().regex(GSM_EMAIL_PREFIX_REGEX),
    password: z.string(),
  });

  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({
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
          <Input
            {...register('password')}
            placeholder="password"
            type="password"
          />
          <Button type="submit" text="로그인" size="big" />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
