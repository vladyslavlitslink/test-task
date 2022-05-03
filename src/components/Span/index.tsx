import { FC, ReactNode } from 'react';
import { Text } from 'styles/typography';
import { StyledText } from './styles';

interface Props extends Text {
  children: ReactNode;
}

export const Span: FC<Props> = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};
