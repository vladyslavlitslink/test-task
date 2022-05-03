import { FC } from 'react';

interface Props {
  checked?: boolean;
  onClick: (checked?: boolean) => void;
}

export const Checkbox: FC<Props> = ({ checked, onClick }) => {
  return (
    <input
      type="checkbox"
      id="topping"
      name="topping"
      value="Paneer"
      width={12}
      height={12}
      checked={checked}
      onChange={(e) => onClick(e.target.checked)}
    />
  );
};
