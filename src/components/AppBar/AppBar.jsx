import { Header, Container } from './AppBar.styled';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const AppBar = () => {
  const isLogged = false;

  return (
    <Header>
      <Container>
        <Navigation />
        {isLogged ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};

export default AppBar;
