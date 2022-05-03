import { FC } from 'react';
import { Checkbox, Span } from 'components';
import { StyledTableHeader } from './styles';

interface Props {
  onCheckbox: (checked: boolean) => void;
}

export const TableHeader: FC<Props> = ({ onCheckbox }) => {
  return (
    <StyledTableHeader>
      <tr>
        <th>
          <Checkbox onClick={onCheckbox} />

          <Span size="xs" color="gray500" fontWeight="medium">
            Name
          </Span>
        </th>

        <th>
          <Span size="xs" color="gray500" fontWeight="medium">
            Status
          </Span>
        </th>
        <th>
          <Span size="xs" color="gray500" fontWeight="medium">
            Email Adress
          </Span>
        </th>
        <th>
          <Span size="xs" color="gray500" fontWeight="medium">
            Teams
          </Span>
        </th>
        <th></th>
      </tr>
    </StyledTableHeader>
  );
};
