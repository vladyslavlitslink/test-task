import styled from 'styled-components';
import device from 'styles/device';

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-bottom: 1em;

  h1 {
    margin-bottom: 16px;

    @media ${device.desktop} {
      margin-left: 16px;
    }
  }

  svg {
    cursor: pointer;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;
