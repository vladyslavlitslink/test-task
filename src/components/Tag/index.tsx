import { FC } from 'react';
import { Span } from 'components';

import { StyledTag } from './styles';
import { Props } from './types';

export const Tag: FC<Props> = ({
  color,
  children,
  background,
  dotted = false,
}) => {
  return (
    <StyledTag background={background}>
      {dotted && <div />}
      <Span size="xs" color={color} fontWeight="medium">
        {children}
      </Span>
    </StyledTag>
  );
};
