import { useState } from 'react';

import { css } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input } from '@common/components';
import { colors, theme } from '@common/styles';

const AUTH_CODE_REGEX = /^\d{6}$/g;

const EmailVerifyForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    authCode: string;
  }>({
    authCode: '',
  });

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
    setFormData(data);
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
