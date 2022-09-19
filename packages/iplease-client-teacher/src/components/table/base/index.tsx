import React from 'react';

import * as S from './style';

interface TableProps {
  children: React.ReactNode;
  title: string;
}

function Table(p: TableProps): JSX.Element {
  const { children, title } = p;
  return (
    <S.TableWrapper>
      <S.TableName>{title}</S.TableName>
      <S.TableBox>{children}</S.TableBox>
    </S.TableWrapper>
  );
}

export default Table;
