import { ReactNode } from 'react';
import { Colors } from 'styles/theme';

export interface Props {
  color?: Colors;
  dotted?: boolean;
  background?: Colors;
  children?: ReactNode;
}
