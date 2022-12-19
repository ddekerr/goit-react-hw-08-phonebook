import { Header } from './AppBar.styled';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';

import { useNavigate } from 'react-router-dom';

const AppBar = () => {
  const isLogged = false;
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <Header>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
