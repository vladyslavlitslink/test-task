import styled from 'styled-components';

export const LabelContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TableContainer = styled.table`
  width: 100%;
  max-width: 1216px;
  border-spacing: 0px;
  overflow: scroll;

  tbody {
    width: 100%;
  }

  h1 {
    margin: 20px 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background: white;
  border: 1px solid #eaecf0;
  padding: 16px 24px 16px 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
`;

export const SpanContainer = styled.div`
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;

  text-align: center;

  margin-left: auto;
  margin-right: auto;

  z-index: -1;
  margin-top: -43px;
`;

export const Wrapper = styled.div`
  border-radius: '8px';
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
`;
