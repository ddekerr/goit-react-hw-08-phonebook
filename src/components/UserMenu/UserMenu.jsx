import { Wrapper } from './UserMenu.styled';
import { getUserName } from 'redux/auth/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUserName);

  const handleLogOut = () => dispatch(logout());

  return (
    <Wrapper>
      <p>Welcome, {username}</p>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </Wrapper>
  );
};

export default UserMenu;
