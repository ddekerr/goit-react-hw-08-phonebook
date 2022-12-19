import { Header } from './AppBar.styled';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

const AppBar = () => {
  const isLogged = true;

  return (
    <Header>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
