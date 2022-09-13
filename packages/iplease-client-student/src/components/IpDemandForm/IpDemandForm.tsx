import { css } from '@emotion/react';
import { ErrorMessage } from '@hookform/error-message';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError, AxiosResponse } from 'axios';
import dayjs from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Button, Input } from '@common/components';
import { colors, theme } from '@common/styles';

import axiosClient from 'utils/api/axios';
import ipApiUri from 'utils/api/uri/internet-protocol';

const IP_USAGE = {
  교내네트워크이용: 'USE_NETWORK',
  서버배포: 'DEPLOY_SERVER',
};

const IpDemandForm: React.FC = () => {
  const schema = z.object({
    title: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
    description: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
    usage: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
    expireAt: z.string().nonempty({ message: '빈값이 들어갈 수 없어요' }),
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
      .post(ipApiUri.demandAssignIp(), data)
      .then((res: AxiosResponse<{ demandId: number }>) => {
        if (res.status === 200) {
          toast.success('IP 할당 요청이 완료되었어요');
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
    h3 {
      width: 100%;
      font-weight: ${theme.palette.fontWeight.bold};
      text-align: center;
      margin-bottom: 1.875rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 0.875rem;
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
      select {
        width: 100%;
        color: ${theme.palette.hue.black};
        font-size: ${theme.palette.fontSize.small};
        font-weight: ${theme.palette.fontWeight.medium};
        border-radius: ${theme.palette.borderRadius};
        border: 2px solid ${colors.gray.gray200};
        padding: 0.895rem 0.8rem;
        outline: ${colors.pink};
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: 1px;
        text-overflow: '';
      }
    }
  `;

  return (
    <div css={style}>
      <h3>IP 신청</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('title')} placeholder="신청 제목" />
        <ErrorMessage errors={errors} name="title" as="p" />
        <Input {...register('description')} placeholder="신청 이유" />
        <ErrorMessage errors={errors} name="description" as="p" />
        <Input
          {...register('expireAt')}
          type="date"
          value={dayjs().format('YYYY-MM-DD')}
        />
        <ErrorMessage errors={errors} name="expireAt" as="p" />
        <select {...register('usage')}>
          <option value={IP_USAGE.교내네트워크이용}>교내 네트워크 이용</option>
          <option value={IP_USAGE.서버배포}>서버 배포</option>
        </select>
        <ErrorMessage errors={errors} name="usage" as="p" />
        <Button type="submit" text="신청" size="big" />
      </form>
    </div>
  );
};

export default IpDemandForm;
