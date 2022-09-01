import styled from '@emotion/styled';

export const TableWrapper = styled.article`
  margin-top: 50px;
`;

export const TableName = styled.h2`
  font-weight: ${({ theme }) => theme.palette.fontWeight.bold};
  font-size: ${({ theme }) => theme.palette.fontSize.large};
`;

export const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px 30px;
  box-shadow: 0px 6px 12px rgba(51, 51, 51, 0.08);
  border-radius: ${({ theme }) => theme.palette.borderRadius};
  width: fit-content;
  min-width: 40%;
  margin-top: 15px;
  table {
    width: 100%;
  }
  th {
    text-align: left;
    font-weight: 700;
    font-size: 15px;
  }
  thead,
  tr {
    width: 100%;
    height: 35px;
  }
  td:nth-child(4) {
    display: flex;
    justify-content: flex-end;
  }
`;
