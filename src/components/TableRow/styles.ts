import styled from 'styled-components';

export const StyledTableRowContainer = styled.tr`
  :nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray50};
  }

  td {
    padding: 16px 24px;
    height: 72px;
  }

  td:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      white-space: nowrap;
    }
  }

  td:nth-child(2) {
    width: 120px;
    text-align: center;
  }

  td:nth-child(3) {
    width: 174px;
  }

  td:nth-child(4) {
    flex-shrink: 0;
    width: 288px;

    div {
      margin-left: 4px;
      margin-bottom: 4px;
    }

    div:first-of-type {
      margin-left: 0px;
    }
  }

  td:nth-child(5) {
    display: flex;
    justify-content: space-between;
    justify-self: flex-end;
    flex-shrink: 0;
    align-items: center;

    width: 116px;
    margin-left: auto;
    svg:nth-child(1) {
      margin-right: 14px;
    }
  }
`;
