import styled from 'styled-components';

export const StyledTableHeader = styled.thead`
  background-color: #f9fafb;

  th {
    padding: 12px 24px;
    text-align: left;
    cursor: pointer;
  }

  th:hover {
    background: ${({ theme }) => theme.colors.gray100};
  }

  th:nth-child(1) {
    display: flex;
    align-items: center;
    height: 42px;
    gap: 12px;
  }
`;
