import { StyledAvatar } from './styles';

const avatarUrl =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80';

export const Avatar = () => {
  return <StyledAvatar alt="avatar" src={avatarUrl} />;
};
