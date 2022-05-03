import { FC, memo } from 'react';
import * as Icon from 'react-feather';
import capitalize from 'lodash/capitalize';

import { Avatar, Tag, Checkbox, Span } from 'components';
import { type User } from 'data';

import { StyledTableRowContainer } from './styles';

interface Props {
  data: User;
  checked: any;
  onCheckbox: (user: User) => void;
  onDelete: (user: User) => void;
  onEdit: (user: User) => void;
}

export const TableRow: FC<Props> = memo(
  ({ data, checked, onCheckbox, onDelete, onEdit }) => {
    return (
      <StyledTableRowContainer>
        {/* 1 */}
        <td>
          <Checkbox checked={checked} onClick={() => onCheckbox(data)} />
          <Avatar />

          <div>
            <Span size="sm" color="gray900" fontWeight="medium">
              {data.name}
            </Span>
            <Span size="sm" color="gray500">
              @{data.username}
            </Span>
          </div>
        </td>

        {/* 2 */}
        <td>
          <Tag dotted background="success50">
            {data.isActive ? 'Online' : 'Offline'}
          </Tag>
        </td>

        {/* 3 */}
        <td>
          <Span size="sm" color="gray500">
            {data.email}
          </Span>
        </td>

        {/* 4 */}
        <td>
          <div style={{ display: 'flex' }}>
            {data.tags.map((tag, index) => (
              <Tag background="blue50" key={index}>
                {capitalize(tag)}
              </Tag>
            ))}
          </div>
        </td>

        {/* 5 */}
        <td>
          <Icon.Trash2 size={20} onClick={() => onDelete(data)} />
          <Icon.Edit2 size={20} onClick={() => onEdit(data)} />
        </td>
      </StyledTableRowContainer>
    );
  }
);
