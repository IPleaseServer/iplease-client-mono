import { Button } from '@common/components';

import * as S from './style';

interface PageManageButtonProps {
  first: boolean;
  last: boolean;
  totalPages: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}

function PageManageButton({
  first,
  last,
  totalPages,
  pageNumber,
  setPageNumber,
}: PageManageButtonProps): JSX.Element {
  return (
    <>
      <S.ButtonWrapper>
        <S.Description>더 이상 데이터가 없어요!</S.Description>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button
          text="이전"
          color={first ? 'default' : 'negative'}
          disabled={first}
          onClick={() => setPageNumber(pageNumber - 1)}
        />
        <span>
          {pageNumber + 1} / {totalPages}
        </span>
        <Button
          text="다음"
          color={last ? 'default' : 'negative'}
          disabled={last}
          onClick={() => setPageNumber(pageNumber + 1)}
        />
      </S.ButtonWrapper>
    </>
  );
}

export default PageManageButton;
