import { FC, ReactNode } from 'react';
import { StyledTitle, type Title as ITitle } from 'styles/typography';

interface Props extends ITitle {
  children: ReactNode;
}

export const Title: FC<Props> = (props) => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};
