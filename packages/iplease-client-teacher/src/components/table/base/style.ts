import styled from '@emotion/styled';

export const TableWrapper = styled.article`
  margin-top: 3.125rem;
`;

export const TableName = styled.h2`
  font-weight: ${({ theme }) => theme.palette.fontWeight.bold};
  font-size: ${({ theme }) => theme.palette.fontSize.large};
`;

export const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
  padding: 1.25rem 1.875rem;
  box-shadow: 0px 0.375rem 0.75rem rgba(51, 51, 51, 0.08);
  border-radius: ${({ theme }) => theme.palette.borderRadius};
  width: fit-content;
  min-width: 40%;
  margin-top: 0.938rem;
  table {
    width: 100%;
  }
  th {
    text-align: left;
    font-weight: 700;
    font-size: 0.938rem;
  }
  td {
    padding-right: 2.813rem;
  }
  button {
    margin-right: 0.625rem;
  }
  thead,
  tr {
    width: 100%;
    height: 2.188rem;
  }
  td:nth-child(4) {
    display: flex;
    justify-content: flex-end;
    padding-right: 0;
  }
`;
