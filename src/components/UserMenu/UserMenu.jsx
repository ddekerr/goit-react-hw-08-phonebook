import { Wrapper } from './UserMenu.styled';
import { getUserName } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const username = useSelector(getUserName);

  return (
    <Wrapper>
      <p>Welcome, {username}</p>
      <button type="button">Logout</button>
    </Wrapper>
  );
};

export default UserMenu;
