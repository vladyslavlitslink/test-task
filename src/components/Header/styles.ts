import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.gray100}`};

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1216px;
    padding: 20px 0px 20px 0px;

    div:nth-child(2) {
      gap: 16px;
    }
  }

  img:nth-child(1) {
    margin-bottom: -3px;
  }

  img:nth-child(2) {
    margin-left: 16;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 1232px) {
    padding: 0px 16px;
  }

  @media (max-width: 900px) {
    nav {
      display: none;
    }
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  gap: 32px;

  span {
    cursor: pointer;
  }
`;

export const StyledIcons = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const StyledIcon = styled.a`
  padding: 4px;

  &:hover {
    background: #f9fafb;
  }
`;
