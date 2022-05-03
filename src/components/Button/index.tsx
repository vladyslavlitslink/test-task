import { FC } from 'react';
import { DownloadCloud, Plus, Trash2, Edit2 } from 'react-feather';

import { Props, Icons } from './types';
import { StyledButton } from './styles';

const getIcon = (name, size, color) => {
  const icons: Icons = {
    plus: <Plus size={size} color={color} />,
    'edit-2': <Edit2 size={size} color={color} />,
    'trash-2': <Trash2 size={size} color={color} />,
    'download-cloud': <DownloadCloud size={size} color={color} />,
  };

  return icons[name];
};

export const Button: FC<Props> = ({
  children,
  icon,
  iconSize = 20,
  color = 'white',
  background = 'black',
  bordered = false,
  iconColor = '#344054',
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      background={background}
      bordered={bordered}
      onClick={onClick}
    >
      <>
        {icon && getIcon(icon, iconSize, iconColor)}
        {children}
      </>
    </StyledButton>
  );
};
