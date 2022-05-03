import { FC, ReactNode } from 'react';
import { StyledContainer } from './styles';

interface Props {
  children?: ReactNode;
}

export const Container: FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
