import { Header, Container } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const AppBar = () => {
  const isLogedIn = useSelector(getIsLoggedIn);

  return (
    <Header>
      <Container>
        <Navigation />
        {isLogedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};

export default AppBar;
