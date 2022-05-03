import { ReactNode } from 'react';

export type IconsNames = 'plus' | 'edit-2' | 'trash-2' | 'download-cloud';
export type Icons = Record<IconsNames, ReactNode>;

export interface Props {
  icon?: IconsNames;
  children?: ReactNode;
  iconSize?: number;
  iconColor?: string;
  color?: string;
  background?: string;
  bordered?: boolean;
  onClick?: () => void;
}

export interface IButton {
  background: string;
  bordered: boolean;
}
