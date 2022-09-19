import { css } from '@emotion/react';

import { Button } from '@common/components';
import { colors, theme } from '@common/styles';

interface ReadMoreProps {
  title: string;
  description: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ title, description }) => {
  const style = css`
    width: 18.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    h3 {
      width: 100%;
      font-weight: ${theme.palette.fontWeight.bold};
      text-align: center;
      margin-bottom: 1.875rem;
    }
    p {
      font-size: ${theme.palette.fontSize.small};
      color: ${colors.black};
      margin-bottom: 1.875rem;
    }
  `;

  return (
    <div css={style}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Button type="button" size="big" color="negative">
        신청 취소
      </Button>
    </div>
  );
};

export default ReadMore;
