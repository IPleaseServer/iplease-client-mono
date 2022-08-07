import { useState } from 'react';

import { css } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@common/components';
import { colors, theme } from '@common/styles';

const GSM_EMAIL_POSTFIX = '@gsm.hs.kr';
const GSM_EMAIL_PREFIX_REGEX = /^s\d{5}$/g;

const EmailVerifyForm: React.FC = () => {
  const [formData, setFormData] = useState<{
    email: string;
  }>({
    email: '',
  });

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
        <button type="submit">이메일 인증코드 발송</button>
      </form>
    </div>
  );
};

export default EmailVerifyForm;